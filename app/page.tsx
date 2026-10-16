import Link from 'next/link';
import { POSTS } from '@/lib/posts';
import { ArticleCard } from '@/components/ArticleCard';
import { AffiliateBanner } from '@/components/AffiliateBanner';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="text-center py-12 px-4 bg-gradient-to-b from-indigo-950/40 to-transparent rounded-2xl border border-indigo-900/30">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Systems Architecture & Engineering
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
          SCHWAK IT Technical Journal
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          In-depth architectural patterns, computer science logic, algorithm optimizations, and production software blueprints.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/blog" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition">
            Explore All Articles
          </Link>
          <a 
            href="https://www.namecheap.com/" 
            target="_blank" 
            rel="noopener noreferrer sponsored"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg transition"
          >
            Namecheap Infrastructure
          </a>
        </div>
      </section>

      {/* Featured Affiliate Card */}
      <AffiliateBanner
        title="Deploy Your Infrastructure on Namecheap"
        description="Power your full-stack applications with high-speed SSD shared hosting, VPS instances, and dedicated server solutions."
        link="https://www.namecheap.com/hosting/"
        buttonText="View Hosting Options"
      />

      {/* Recent Posts Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Latest Engineering Articles</h2>
          <Link href="/blog" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">
            View All ({POSTS.length}) &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}