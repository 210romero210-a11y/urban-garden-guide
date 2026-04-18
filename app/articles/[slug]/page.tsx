import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${post.title} | Urban Garden Guide`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const components = useMDXComponents({})

  return (
    <article className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
              <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-400">
              {post.excerpt}
            </p>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-500" />
                <span className="text-gray-400">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}/`}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
