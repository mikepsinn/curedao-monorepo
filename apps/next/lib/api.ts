import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

//const postsDirectory = join(process.cwd(), "_posts");
const postsDirectory = join(process.cwd(), "public");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);
  content = fixImagePaths(content);
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}


function fixImagePaths(content: string) {
  return  content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, url) => {
    if (!url.startsWith('/') && !url.startsWith('http')) {
      url = '/' + url;
    }
    return `![${altText}](${url})`;
  });
}