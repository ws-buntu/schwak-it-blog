import { ArticleCard } from '@/components/ArticleCard';
import { POSTS } from '@/lib/posts';

export default function BlogIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Article Archive</h1>
        <p className="text-slate-400 text-sm mt-1">
          Complete chapter breakdown covering computer logic, database systems, modularization, and OOP architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {POSTS.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
