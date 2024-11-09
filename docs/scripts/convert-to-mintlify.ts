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
\`\`\`yaml
---
title: "Page Title"
description: "Page description for SEO"
sidebarTitle: "Sidebar title (optional)"
api: "POST /v1/endpoint" # For API endpoints
openapi: "https://path-to-spec.json" # For OpenAPI specs
---
\`\`\`

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

async function convertToMintlify(filePath: string): Promise<void> {
  try {
    // Read the markdown file
    const content = await fs.readFile(filePath, 'utf-8')
    
    // Extract front matter if it exists
    let frontMatter: FrontMatter = {}
    let markdown = content
    
    if (content.startsWith('---')) {
      const matches = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
      if (matches) {
        frontMatter = yaml.load(matches[1]) as FrontMatter
        markdown = matches[2]
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
      const absoluteImgPath = path.resolve(path.dirname(filePath), imgPath);
      const imgFileName = path.basename(imgPath);
      const newImgPath = path.join(MINTLIFY_IMAGES, imgFileName);

      // Copy the image to the Mintlify images folder
      await fs.copyFile(absoluteImgPath, newImgPath);
      
      // Update the markdown image path
      markdown = markdown.replace(`![${imgFileName}](${imgPath})`, `![${imgFileName}](/images/${imgFileName})`);
    }));

    // Use OpenAI to convert the content
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
          The output should be plain text formatted for Mintlify without any additional code language indicators.`
        },
        {
          role: "user",
          content: markdown
        }
      ]
    })

    // Get the converted content
    const convertedContent = completion.choices[0].message.content

    // Create new front matter
    const newFrontMatter = {
      title: frontMatter.title || path.basename(filePath, '.md'),
      description: frontMatter.description || '',
      ...frontMatter
    }

    // Combine front matter and converted content
    const finalContent = `---\n${yaml.dump(newFrontMatter)}---\n\n${convertedContent}`

    // Determine output path (maintain directory structure but in Mintlify docs folder)
    const relativePath = path.relative(process.cwd(), filePath)
    const outputPath = path.join(MINTLIFY_DOCS_PATH, relativePath.replace(/\.md$/, '.mdx'))
    
    // Create directories if they don't exist
    await fs.mkdir(path.dirname(outputPath), { recursive: true })

    // Write the converted file
    await fs.writeFile(outputPath, finalContent)

    console.log(`✅ Converted ${filePath} to ${outputPath}`)

  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error)
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

async function generateNavigation(files: string[]): Promise<any> {
  // Group files by directory
  const groups = files.reduce((acc, file) => {
    // Get directory relative to MINTLIFY_DOCS
    const dir = path.dirname(path.relative(MINTLIFY_DOCS_PATH, file)).split(path.sep)[0] || 'root'
    if (!acc[dir]) acc[dir] = []
    acc[dir].push(file)
    return acc
  }, {} as Record<string, string[]>)

  // Create navigation structure
  return Object.entries(groups).map(([group, groupFiles]) => ({
    group: group.charAt(0).toUpperCase() + group.slice(1),
    pages: groupFiles.map(file => path.relative(MINTLIFY_DOCS_PATH, file).replace(/\.(md|mdx)$/, ''))
  }))
}

async function main() {
  try {
    // Initialize Mintlify directory structure
    await initializeMintlifyStructure()

    // Find all markdown files
    const markdownFiles = await findMarkdownFiles(process.cwd())

    // Convert each file
    await Promise.all(markdownFiles.map(convertToMintlify))

    // Generate navigation structure
    const navigation = await generateNavigation(markdownFiles)

    // Update mint.json
    const mintConfigPath = path.join(MINTLIFY_ROOT, 'mint.json')
    const mintConfig = JSON.parse(await fs.readFile(mintConfigPath, 'utf-8'))
    mintConfig.navigation = navigation
    await fs.writeFile(mintConfigPath, JSON.stringify(mintConfig, null, 2))

    console.log('✨ Conversion complete!')
    console.log(`📚 Documentation available in ${MINTLIFY_ROOT}`)
    console.log('To preview your docs, run:')
    console.log('cd mintlify && mintlify dev')

  } catch (error) {
    console.error('Error in main process:', error)
  }
}

main() 