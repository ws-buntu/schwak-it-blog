import { POSTS } from "@/lib/posts";
import { AffiliateBanner } from "@/components/AffiliateBanner";
import { ArticleContent } from "@/components/ArticleContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return POSTS.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-6">
      <div className="mb-8">
        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
          {post.chapter} &bull; {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight">
          {post.title}
        </h1>
        <p className="text-slate-400 text-sm mt-3">{post.readTime} &bull; Published by SCHWAK IT</p>
      </div>

      {/* Top Affiliate CTA Banner */}
      <AffiliateBanner {...post.affiliateCallout} />

      {/* Article Content Render */}
      <ArticleContent content={post.content} />

      {/* Bottom Sticky Affiliate Banner */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <AffiliateBanner
          title="Deploy Your Next Web Project on Namecheap"
          description="Get affordable web hosting, SSL certificates, and managed WordPress solutions with 24/7 technical support."
          link="https://www.namecheap.com/hosting/"
          buttonText="Get Started on Namecheap"
        />
      </div>
    </article>
  );
}
