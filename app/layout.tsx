import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Urban Garden Guide | Container Gardening for Apartments",
    template: "%s | Urban Garden Guide",
  },
  description: "Discover the joy of indoor, urban, and container gardening. Perfect for apartments, small spaces, and beginners.",
  keywords: ["container gardening", "urban gardening", "apartment gardening", "indoor plants", "vegetables", "herbs", "balcony garden"],
  authors: [{ name: "ContentEmpire" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Urban Garden Guide",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-slate-950 text-slate-50 min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">🪴</span>
                <span className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
                  Urban Garden
                </span>
              </Link>
              
              {/* Navigation */}
              <div className="flex items-center gap-6">
                <Link href="/" className="text-slate-300 hover:text-teal-400 text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/articles" className="text-slate-300 hover:text-teal-400 text-sm font-medium transition-colors">
                  Articles
                </Link>
                <Link href="/about" className="text-slate-300 hover:text-teal-400 text-sm font-medium transition-colors">
                  About
                </Link>
              </div>
            </nav>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="border-t border-slate-800 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🪴</span>
                  <span className="text-xl font-bold text-teal-400">Urban Garden Guide</span>
                </div>
                <p className="text-slate-400 max-w-sm">
                  Growing where you&apos;re planted. Discover the joy of container gardening 
                  in apartments, balconies, and small spaces.
                </p>
              </div>
              
              {/* Links */}
              <div>
                <h4 className="font-semibold text-slate-100 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-slate-400 hover:text-teal-400 text-sm">Home</Link></li>
                  <li><Link href="/articles" className="text-slate-400 hover:text-teal-400 text-sm">Articles</Link></li>
                  <li><Link href="/about" className="text-slate-400 hover:text-teal-400 text-sm">About</Link></li>
                </ul>
              </div>
              
              {/* Categories */}
              <div>
                <h4 className="font-semibold text-slate-100 mb-4">Topics</h4>
                <ul className="space-y-2">
                  <li><Link href="/category/container-gardening" className="text-slate-400 hover:text-teal-400 text-sm">Container Gardening</Link></li>
                  <li><Link href="/category/indoor-plants" className="text-slate-400 hover:text-teal-400 text-sm">Indoor Plants</Link></li>
                  <li><Link href="/category/herbs" className="text-slate-400 hover:text-teal-400 text-sm">Herbs</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
              <p>© 2026 Urban Garden Guide. All rights reserved.</p>
              <p className="mt-2">Growing where you are planted. 🌱</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}