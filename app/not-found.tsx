import Link from 'next/link'
import { Leaf, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-10 h-10 text-primary-400" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            Oops! The page you&apos;re looking for seems to have withered away. 
            Let&apos;s get you back to greener pastures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              href="/articles/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700"
            >
              Browse Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
