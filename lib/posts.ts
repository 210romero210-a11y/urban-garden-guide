import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post, PostFrontmatter } from '@/types/post'

const contentDirectory = path.join(process.cwd(), 'content')

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const files = fs.readdirSync(contentDirectory)
  const mdxFiles = files.filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))

  const posts = mdxFiles.map((file) => {
    const filePath = path.join(contentDirectory, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const frontmatter = data as PostFrontmatter

    const slug = file.replace(/\.(mdx|md)$/, '')

    return {
      slug,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      readingTime: calculateReadingTime(content),
      coverImage: frontmatter.coverImage,
      tags: frontmatter.tags || [],
      category: frontmatter.category || 'General',
      content,
    }
  })

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set<string>()
  posts.forEach((post) => {
    categories.add(post.category)
  })
  return Array.from(categories).sort()
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.category === category)
}
