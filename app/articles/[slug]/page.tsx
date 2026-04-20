import { getArticle, getAllArticles } from '@/lib/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  
  if (!article) {
    return { title: 'Article Not Found' };
  }
  
  return {
    title: article.seo.title || article.title,
    description: article.seo.description || article.description,
    keywords: article.seo.keywords,
    openGraph: {
      title: article.seo.title || article.title,
      description: article.seo.description || article.description,
      images: article.seo.ogImage ? [article.seo.ogImage] : [],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  
  if (!article) {
    notFound();
  }
  
  // Simple markdown to JSX conversion
  const renderContent = (content: string) => {
    return content
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3 text-slate-100">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-8 mb-4 text-teal-400">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4 text-slate-100">$1</h1>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-100 font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Links - but exclude image links
      .replace(/(?<!<img.*?)href="(.*?)"/g, 'href="$1" class="text-teal-400 hover:text-teal-300 underline"')
      // Lists
      .replace(/^- (.*$)/gim, '<li class="ml-4 text-slate-300">$1</li>')
      .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 text-slate-300 list-decimal"><span class="text-slate-100">$2</span></li>')
      // Horizontal rule
      .replace(/^---$/gim, '<hr class="border-slate-700 my-8" />')
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="text-slate-300 leading-relaxed my-4">')
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-teal-500 pl-4 italic text-slate-400 my-4 bg-slate-800/50 py-2 rounded-r">$1</blockquote>');
  };
  
  const formattedContent = renderContent(article.content);
  
  return (
    <article className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm flex items-center gap-2">
        <Link href="/" className="text-teal-400 hover:text-teal-300 transition-colors">Home</Link>
        <span className="text-slate-600">/</span>
        <span className="text-slate-400 capitalize">{article.category.replace('-', ' ')}</span>
      </nav>
      
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-50 mb-4 leading-tight">
          {article.title}
        </h1>
        
        <p className="text-xl text-slate-400 mb-6">
          {article.description}
        </p>
        
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>•</span>
          <span>{article.readingTime} min read</span>
          <span>•</span>
          <span className="capitalize">{article.category.replace('-', ' ')}</span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-slate-900/80 text-teal-400 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      {/* Hero Image */}
      {article.image.src && (
        <div className="relative w-full aspect-video mb-10 rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/20 ring-1 ring-slate-800">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      {/* Article Content */}
      <div 
        className="prose prose-invert prose-teal max-w-none text-slate-300"
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
      
      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-slate-800">
        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
              <span className="text-2xl">🪴</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">About ContentEmpire</h3>
              <p className="text-sm text-slate-500">Urban Gardening Experts</p>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">
            ContentEmpire brings you expert advice on urban gardening, container gardening, and growing your own food in small spaces. Transform your apartment balcony or windowsill into a thriving garden.
          </p>
        </div>
      </footer>
    </article>
  );
}
