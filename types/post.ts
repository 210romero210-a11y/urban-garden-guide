export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  coverImage?: string
  tags: string[]
  category: string
  content: string
}

export interface PostFrontmatter {
  title: string
  excerpt?: string
  description?: string
  date: string
  coverImage?: string
  tags: string[]
  category: string
}