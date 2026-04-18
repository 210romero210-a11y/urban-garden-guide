import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { Post } from '@/types/post'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary-500/30 transition-all hover:shadow-lg hover:shadow-primary-500/5">
      {post.coverImage && (
        <Link href={`/articles/${post.slug}/`} className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </Link>
      )}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          <Link href={`/articles/${post.slug}/`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-400 mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/articles/${post.slug}/`}
            className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm font-medium"
          >
            Read
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
