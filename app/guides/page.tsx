import { Metadata } from 'next'
import Link from 'next/link'
import { Sprout, ArrowRight, BookOpen, Lightbulb, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guides | Urban Garden Guide',
  description: 'Step-by-step guides for starting your urban garden, from beginner basics to advanced techniques.',
}

const guides = [
  {
    title: 'Getting Started',
    description: 'Everything you need to know to start your first urban garden.',
    icon: Sprout,
    href: '/guides/getting-started/',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    title: 'Container Gardening',
    description: 'Master the art of growing plants in containers and small spaces.',
    icon: BookOpen,
    href: '/guides/container-gardening/',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Indoor Growing',
    description: 'Tips and techniques for successful indoor gardening year-round.',
    icon: Lightbulb,
    href: '/guides/indoor-growing/',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    title: 'Tools & Equipment',
    description: 'Essential tools and equipment for urban gardeners.',
    icon: Wrench,
    href: '/guides/tools-equipment/',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Learning Center</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gardening Guides
          </h1>
          <p className="text-xl text-gray-400">
            Comprehensive guides to help you grow successfully, whether you&apos;re a beginner or looking to expand your skills.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-primary-500/30 transition-all hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${guide.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <guide.icon className={`w-6 h-6 ${guide.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary-400 text-sm font-medium">
                    Read Guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Looking for something specific?
          </p>
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
          >
            Browse All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
