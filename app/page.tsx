import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getFeaturedArticles } from "@/lib/content";

export const metadata = {
  title: "Urban Garden Guide | Container Gardening for Apartments",
  description: "Discover the joy of indoor, urban, and container gardening. Perfect for apartments, small spaces, and beginners.",
};

export default function Home() {
  const articles = getAllArticles();
  const featured = getFeaturedArticles();
  
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Grow Anywhere</span>
            <br />
            <span className="text-slate-100">Garden Anywhere</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
            Discover the joy of container gardening in apartments, balconies, and small spaces. 
            Fresh herbs, vegetables, and flowers—grown where you&apos;re planted.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#articles"
              className="btn btn-primary text-lg px-6 py-3"
            >
              Start Reading
            </Link>
            <Link
              href="/about"
              className="btn btn-outline text-lg px-6 py-3"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 flex gap-4 text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪴</span>
            <span className="text-sm">50+ Guides</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="text-sm">Fresh Content</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <span className="text-sm">Beginner Friendly</span>
          </div>
        </div>
      </section>
      
      {/* Featured Articles */}
      {featured.length > 0 && (
        <section id="articles" className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-100">Featured Articles</h2>
            <Link href="/articles" className="text-teal-400 hover:text-teal-300">
              View all →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group card hover:border-teal-500/50 hover:glow"
              >
                {/* Image */}
                {article.image.src && (
                  <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-slate-700">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                
                {/* Category tag */}
                <div className="mb-2">
                  <span className="text-xs font-medium text-teal-400 uppercase tracking-wider">
                    {article.category.replace('-', ' ')}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{article.readingTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      
      {/* All Articles */}
      {articles.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Latest Articles</h2>
          
          <div className="space-y-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="flex gap-6 items-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800/50 transition-all group"
              >
                {/* Thumbnail */}
                {article.image.src && (
                  <div className="hidden sm:block relative w-32 h-24 rounded-lg overflow-hidden bg-slate-700 flex-shrink-0">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-teal-400 uppercase tracking-wider">
                      {article.category.replace('-', ' ')}
                    </span>
                    <span className="text-slate-600">•</span>
                    <time className="text-xs text-slate-500" dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-teal-400 transition-colors truncate">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-sm truncate">
                    {article.excerpt}
                  </p>
                </div>
                
                <span className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
      
      {/* Empty State */}
      {articles.length === 0 && (
        <section className="py-12 text-center">
          <div className="text-6xl mb-4">🌱</div>
          <h2 className="text-2xl font-semibold text-slate-100 mb-2">
            No articles yet
          </h2>
          <p className="text-slate-400 mb-8">
            We&apos;re growing fresh content. Check back soon!
          </p>
        </section>
      )}
      
      {/* Newsletter CTA */}
      <section className="bg-slate-800 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">
          Start Your Garden Journey
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Get weekly tips on growing your own food in small spaces. 
          No yard required—just a sunny spot and a willingness to try.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
          />
          <button
            type="submit"
            className="btn btn-primary px-6 py-3"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}