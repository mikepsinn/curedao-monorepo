import { OpenAI } from 'openai';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as yaml from 'js-yaml';
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Add constants for directory structure
const MINTLIFY_ROOT = 'mintlify' // Root directory for Mintlify docs
const MINTLIFY_DOCS_PATH = 'mintlify/docs' // Directory for documentation files
const MINTLIFY_IMAGES = 'mintlify/public/images' // Directory for images
const MINTLIFY_SNIPPETS = 'mintlify/snippets' // Directory for reusable snippets

// Mintlify documentation context
const MINTLIFY_DOCS = `
Mintlify Documentation Format Guide:

1. FRONTMATTER
Required metadata at the top of each MDX file:

---
title: "Page Title"
description: "Page description for SEO"
sidebarTitle: "Sidebar title (optional)"
api: "POST /v1/endpoint" # For API endpoints
openapi: "https://path-to-spec.json" # For OpenAPI specs
---


2. COMPONENTS

a) Callouts:
<Note>Content</Note>
<Warning>Content</Warning>
<Info>Content</Info>
<Tip>Content</Tip>
<Check>Content</Check>

b) Steps:
<Steps>
  <Step title="Step Title">Step content</Step>
</Steps>

c) Cards:
<Card title="Card Title" icon="icon-name">
  Card content
</Card>

<CardGroup cols={2}>
  <Card title="First Card">Content</Card>
  <Card title="Second Card">Content</Card>
</CardGroup>

d) Tabs:
<Tabs>
  <Tab title="First Tab">Tab content</Tab>
  <Tab title="Second Tab">Tab content</Tab>
</Tabs>

e) API Components:
<ParamField path="parameter_name" type="string" required>
  Parameter description
</ParamField>

<ResponseField name="field_name" type="string">
  Response field description
</ResponseField>

f) Code:
<CodeGroup>
  <CodeBlock title="npm" active>
    npm install package
  </CodeBlock>
  <CodeBlock title="yarn">
    yarn add package
  </CodeBlock>
</CodeGroup>

g) Accordions:
<Accordion title="Accordion Title">
  Accordion content
</Accordion>

h) LaTeX Support:
Inline: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
Block: $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

i) Images and Videos:
<Frame>
  <img src="/path/to/image.png" alt="Description" />
</Frame>

<video src="/path/to/video.mp4" />

j) Tooltips:
<Tooltip tip="Tooltip content">Hover over me</Tooltip>

k) API Playground:
<RequestExample>
  <CodeBlock title="Request">
    Example request code
  </CodeBlock>
</RequestExample>

<ResponseExample>
  <CodeBlock title="Response">
    Example response code
  </CodeBlock>
</ResponseExample>

3. NAVIGATION
Navigation structure in mint.json:
\`\`\`json
{
  "navigation": [
    {
      "group": "Group Name",
      "pages": ["page-1", "page-2"],
      "icon": "icon-name",
      "iconType": "duotone" // supports Font Awesome icon types
    }
  ]
}
\`\`\`

4. SPECIAL FEATURES
- Automatic table of contents
- Dark/light mode support
- Search functionality
- API playground integration
- LaTeX support
- Anchor links
- Mobile responsiveness
- Code syntax highlighting
- Copy code buttons
- Link previews
- Automatic redirects

5. SEO OPTIMIZATION
- Automatic meta tags
- OpenGraph support
- Sitemap generation
- Canonical URLs
- 301 redirects configuration

6. STYLING GUIDELINES
- Use proper heading hierarchy (h1 -> h6)
- Include descriptive alt text for images
- Keep code blocks language-specific
- Use consistent spacing
- Follow semantic HTML structure

7. IMAGES
- Store in public/images directory
- Use absolute paths: "/images/example.png"
- Supported formats: png, jpg, jpeg, gif, svg, webp
- Optimize for web performance
- Include alt text for accessibility

8. CODE SNIPPETS
Use triple backticks with language:
\`\`\`language
code here
\`\`\`

9. REUSABLE CONTENT
Use snippets in mint.json:
\`\`\`json
{
  "snippets": {
    "example": {
      "content": "Reusable content here"
    }
  }
}
\`\`\`
`

interface FrontMatter {
  title?: string
  description?: string
  published?: boolean
  date?: string
  tags?: string[]
  [key: string]: any
}

async function initializeMintlifyStructure(): Promise<void> {
  // Create necessary directories
  const directories = [
    MINTLIFY_ROOT,
    MINTLIFY_DOCS_PATH,
    MINTLIFY_IMAGES,
    MINTLIFY_SNIPPETS
  ]
  
  for (const dir of directories) {
    await fs.mkdir(dir, { recursive: true })
  }

  // Create default mint.json if it doesn't exist
  const mintJsonPath = path.join(MINTLIFY_ROOT, 'mint.json')
  if (!await fs.access(mintJsonPath).then(() => true).catch(() => false)) {
    const defaultMintJson = {
      "name": "Documentation",
      "logo": {
        "light": "/logo/light.png",
        "dark": "/logo/dark.png"
      },
      "favicon": "/favicon.png",
      "colors": {
        "primary": "#0D9373",
        "light": "#07C983",
        "dark": "#0D9373"
      },
      "navigation": [],
      "footerSocials": {}
    }
    await fs.writeFile(mintJsonPath, JSON.stringify(defaultMintJson, null, 2))
  }
}

async function convertToMintlify(filePath: string): Promise<{ title: string; description: string; path: string }> {
  try {
    // Check if the file is a markdown file (.md)
    if (!filePath.endsWith('.md')) {
      console.log(`Skipping non-markdown file: ${filePath}`);
      return { title: '', description: '', path: filePath }; // Skip if not .md
    }

    // Skip files in the mintlify and api-docs folders
    if (filePath.includes('/mintlify/') || filePath.includes('/api-docs/')) {
      console.log(`Skipping file in excluded folder: ${filePath}`);
      return { title: '', description: '', path: filePath }; // Skip if in excluded folders
    }

    // Read the markdown file
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Extract front matter if it exists
    let frontMatter: FrontMatter = {};
    let markdown = content;
    
    if (content.startsWith('---')) {
      const matches = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (matches) {
        frontMatter = yaml.load(matches[1]) as FrontMatter;
        markdown = matches[2]; // Remove front matter from markdown
      }
    }

    // Copy images and update paths
    const imageRegex = /!\[.*?\]\((.*?)\)/g; // Regex to find image paths
    const imgPaths: string[] = []; // Array to hold image paths
    markdown = markdown.replace(imageRegex, (match: string, imgPath: string) => {
      imgPaths.push(imgPath); // Collect image paths
      return match; // Return the original match
    });

    // Process image paths asynchronously
    await Promise.all(imgPaths.map(async (imgPath) => {
      // Check if the image path is external
      if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
        console.log(`Skipping external image: ${imgPath}`);
        return; // Skip external images
      }

      // Sanitize the image path
      imgPath = imgPath.replace(/>$/, '').trim(); // Remove any trailing '>' and trim whitespace

      const absoluteImgPath = path.resolve(path.dirname(filePath), imgPath);
      const imgFileName = path.basename(imgPath);
      const newImgPath = path.join(MINTLIFY_IMAGES, imgFileName);

      // Check if the image file exists before attempting to copy
      try {
        await fs.access(absoluteImgPath); // Check if the file exists
        await fs.copyFile(absoluteImgPath, newImgPath);
        // Update the markdown image path
        markdown = markdown.replace(`![${imgFileName}](${imgPath})`, `![${imgFileName}](/images/${imgFileName})`);
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.error(`❌ Error: The file does not exist at the specified path: ${absoluteImgPath}`);
        } else if (error.code === 'EACCES') {
          console.error(`❌ Error: Permission denied when accessing the file: ${absoluteImgPath}`);
        } else {
          console.error(`❌ Error copying image ${imgPath}:`, error);
        }
      }
    }));

    // Use OpenAI to convert the content without front matter
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a documentation specialist who converts markdown files to Mintlify-compatible format. 
          ${MINTLIFY_DOCS}
          Please convert the following markdown content to Mintlify format, preserving the essential information 
          while optimizing for Mintlify's features and components. 
          Do not include any language-specific code blocks or any code formatting in the final output. 
          The output should include appropriate front matter based on the content.`
        },
        {
          role: "user",
          content: markdown // Send markdown without front matter
        }
      ]
    });

    // Get the converted content
    const convertedContent = completion.choices[0].message.content;

    // Combine front matter and converted content
    const finalContent = `${convertedContent}`; // The LLM should generate the front matter

    // Determine output path (maintain directory structure but in Mintlify docs folder)
    const relativePath = path.relative(process.cwd(), filePath);
    const outputPath = path.join(MINTLIFY_DOCS_PATH, relativePath.replace(/\.md$/, '.mdx'));
    
    // Create directories if they don't exist
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Write the converted file
    await fs.writeFile(outputPath, finalContent);

    console.log(`✅ Converted ${filePath} to ${outputPath}`);

    // Return the front matter data for mint.json generation
    return {
      title: frontMatter.title || path.basename(filePath, '.md'),
      description: frontMatter.description || '',
      path: outputPath
    };

  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error);
    return { title: '', description: '', path: filePath }; // Return empty data on error
  }
}

async function findMarkdownFiles(dir: string): Promise<string[]> {
  const files = await fs.readdir(dir)
  const markdownFiles: string[] = []

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file !== 'node_modules' && file !== '.git') {
        const nestedFiles = await findMarkdownFiles(filePath)
        markdownFiles.push(...nestedFiles)
      }
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      markdownFiles.push(filePath)
    }
  }

  return markdownFiles
}

// Function to delete a directory and its contents
async function deleteDirectory(dir: string) {
  try {
    const files = await fs.readdir(dir);
    await Promise.all(files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await deleteDirectory(filePath); // Recursively delete subdirectories
      } else {
        await fs.unlink(filePath); // Delete file
      }
    }));
    await fs.rmdir(dir); // Remove the directory itself
  } catch (error) {
    console.error(`❌ Error deleting directory ${dir}:`, error);
  }
}

async function main() {
  try {
    // Delete the existing mintlify folder if it exists
    const mintlifyDir = path.join(process.cwd(), 'mintlify');
    if (await fs.access(mintlifyDir).then(() => true).catch(() => false)) {
      console.log(`Deleting existing mintlify directory: ${mintlifyDir}`);
      await deleteDirectory(mintlifyDir);
    }

    // Initialize Mintlify directory structure
    await initializeMintlifyStructure();

    // Find all markdown files
    const markdownFiles = await findMarkdownFiles(process.cwd());

    // Convert each file and collect metadata
    const metadataPromises = markdownFiles.map(convertToMintlify);
    const metadataArray = await Promise.all(metadataPromises);

    // Filter out any empty metadata
    const validMetadata = metadataArray.filter(meta => meta.title && meta.path);

    // Prepare data for LLM to generate mint.json
    const mintJsonData = {
      files: validMetadata.map(meta => ({
        path: meta.path,
        title: meta.title,
        description: meta.description
      }))
    };

    // Use OpenAI to generate mint.json
    const mintJsonCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a documentation specialist who generates a mint.json configuration file for Mintlify documentation. 
          Based on the following file metadata, create a well-structured mint.json file.`
        },
        {
          role: "user",
          content: JSON.stringify(mintJsonData, null, 2) // Pass the collected metadata
        }
      ]
    });

    // Get the generated mint.json content
    const generatedMintJson = mintJsonCompletion.choices[0].message.content;

    // Parse the generated content to ensure it's valid JSON
    let parsedMintJson;
    try {
      parsedMintJson = JSON.parse(generatedMintJson);
    } catch (error) {
      console.error('❌ Error parsing generated mint.json:', error);
      return; // Exit if parsing fails
    }

    // Write the generated mint.json to file
    const mintConfigPath = path.join(mintlifyDir, 'mint.json');
    await fs.writeFile(mintConfigPath, JSON.stringify(parsedMintJson, null, 2));

    console.log('✨ mint.json generated successfully!');

  } catch (error) {
    console.error('Error in main process:', error);
  }
}

main();