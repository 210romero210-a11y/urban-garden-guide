import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getAllTags, getAllCategories } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { BookOpen, Tag, Folder } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Articles | Urban Garden Guide',
  description: 'Browse all our articles on urban gardening, indoor plants, container gardening, and more.',
}

export default function ArticlesPage() {
  const posts = getAllPosts()
  const tags = getAllTags()
  const categories = getAllCategories()

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            All Articles
          </h1>
          <p className="text-xl text-gray-400">
            Explore our complete collection of urban gardening guides, tips, and tutorials.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white">{posts.length}</div>
            <div className="text-sm text-gray-500">Articles</div>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white">{categories.length}</div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white">{tags.length}</div>
            <div className="text-sm text-gray-500">Tags</div>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-sm text-gray-500">Possibilities</div>
          </div>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Folder className="w-5 h-5 text-primary-400" />
              Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}/`}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary-400" />
              Popular Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}/`}
                  className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm hover:bg-gray-800 hover:text-gray-300 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No articles yet</h3>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  )
}
