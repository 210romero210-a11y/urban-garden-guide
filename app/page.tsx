import Link from 'next/link'
import { Leaf, Sun, Droplets, Sprout, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts().slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
              <Leaf className="w-4 h-4" />
              <span>Grow Your Own Food, Anywhere</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Urban Garden Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              Practical tips for indoor, apartment, and container gardening. 
              Transform any space into a thriving green oasis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors"
              >
                Browse Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/guides/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700"
              >
                Getting Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary-500/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Beginner Friendly</h3>
              <p className="text-gray-400">
                Step-by-step guides designed for those new to gardening. No experience required.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary-500/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Small Space Solutions</h3>
              <p className="text-gray-400">
                Maximize your harvest in apartments, balconies, and tiny homes.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-primary-500/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Year-Round Growing</h3>
              <p className="text-gray-400">
                Indoor techniques to keep your garden thriving through every season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 md:py-24 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest Articles</h2>
              <p className="text-gray-400">Fresh tips and guides for your urban garden</p>
            </div>
            <Link
              href="/articles/"
              className="hidden sm:inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/articles/"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-900/20 to-gray-900 border border-primary-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Growing?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of urban gardeners transforming their spaces. 
              Get our free beginner&apos;s guide to container gardening.
            </p>
            <Link
              href="/guides/getting-started/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors"
            >
              Start Your Garden Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
