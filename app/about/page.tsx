import { Metadata } from 'next'
import Link from 'next/link'
import { Leaf, Heart, Users, Globe, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Urban Garden Guide',
  description: 'Learn about Urban Garden Guide and our mission to help everyone grow their own food, no matter how small their space.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Urban Garden Guide
            </h1>
            <p className="text-xl text-gray-400">
              Empowering everyone to grow their own food, one plant at a time.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Urban Garden Guide was created with a simple belief: everyone should have access to fresh, 
              homegrown food regardless of where they live. Whether you have a sprawling backyard or 
              just a sunny windowsill, we believe you can grow something beautiful and delicious.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our goal is to make gardening accessible, approachable, and enjoyable for beginners. 
              We break down complex topics into simple, actionable steps that anyone can follow.
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">What We Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Passion</h3>
                <p className="text-gray-400 text-sm">
                  We love gardening and believe in its power to transform lives and spaces.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-400 text-sm">
                  Gardening is better together. We foster a supportive community of growers.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Sustainability</h3>
                <p className="text-gray-400 text-sm">
                  We promote eco-friendly practices that benefit both people and planet.
                </p>
              </div>
            </div>
          </section>

          {/* What We Cover */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">What We Cover</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <span><strong className="text-white">Indoor Gardening:</strong> Growing herbs, vegetables, and houseplants inside your home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <span><strong className="text-white">Container Gardening:</strong> Maximizing small spaces like balconies, patios, and windowsills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <span><strong className="text-white">Apartment Gardening:</strong> Solutions for renters and those with limited outdoor space</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <span><strong className="text-white">Beginner Tips:</strong> Step-by-step guides for those just starting their gardening journey</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Growing?
            </h2>
            <p className="text-gray-400 mb-6">
              Explore our guides and articles to begin your urban gardening journey today.
            </p>
            <Link
              href="/guides/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors"
            >
              Browse Guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
