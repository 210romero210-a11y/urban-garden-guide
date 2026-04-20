// Content utilities for loading MDX articles
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), '../content/posts');

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDirectory);
  
  const articles = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      return getArticleMeta(slug);
    })
    .filter((article): article is ArticleMeta => article !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  return articles;
}

export function getArticleMeta(slug: string): ArticleMeta | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Parse frontmatter
  const match = fileContent.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  
  const frontmatter = parseFrontmatter(match[1]);
  
  return {
    slug,
    title: frontmatter.title || '',
    description: frontmatter.description || '',
    excerpt: frontmatter.excerpt || '',
    publishedAt: frontmatter.publishedAt || '',
    updatedAt: frontmatter.updatedAt || '',
    author: frontmatter.author || '',
    category: frontmatter.category || '',
    tags: frontmatter.tags || [],
    featured: frontmatter.featured || false,
    readingTime: frontmatter.readingTime || 5,
    image: frontmatter.image || { src: '', alt: '', width: 1200, height: 630 },
    seo: frontmatter.seo || { title: '', description: '', keywords: [], ogImage: '' },
  };
}

export function getArticle(slug: string): Article | null {
  const meta = getArticleMeta(slug);
  if (!meta) return null;
  
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Remove frontmatter to get content
  const content = fileContent.replace(/^---[\s\S]*?---\n/, '');
  
  return {
    ...meta,
    content,
  };
}

function parseFrontmatter(frontmatter: string): Record<string, any> {
  const result: Record<string, any> = {};
  const lines = frontmatter.split('\n');
  
  let currentKey = '';
  let currentValue: any = null;
  let inArray = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Array start
    if (trimmed.startsWith('- ') && inArray) {
      (currentValue as string[]).push(trimmed.slice(2));
      continue;
    }
    
    // Array end detection
    if (trimmed === '' && inArray) {
      inArray = false;
      result[currentKey] = currentValue;
      continue;
    }
    
    // Key: value
    const keyMatch = trimmed.match(/^(\w+):\s*(.*)$/);
    if (keyMatch) {
      if (currentKey && currentValue !== null) {
        result[currentKey] = currentValue;
      }
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();
      
      // Check if it's an array
      if (value === '') {
        currentValue = [];
        inArray = true;
      } else {
        currentValue = value;
      }
      continue;
    }
    
    // Nested object property
    const nestedMatch = trimmed.match(/^(\w+):\s*(.*)$/);
    if (nestedMatch && currentValue) {
      if (Array.isArray(currentValue)) {
        // Continue array
        (currentValue as string[]).push(trimmed.replace(/^-\s*/, ''));
      } else {
        // Add to object
        (currentValue as Record<string, string>)[nestedMatch[1]] = nestedMatch[2].trim();
      }
    }
  }
  
  // Don't forget the last key
  if (currentKey && currentValue !== null) {
    result[currentKey] = currentValue;
  }
  
  return result;
}

export function getFeaturedArticles(): ArticleMeta[] {
  return getAllArticles().filter(article => article.featured);
}
