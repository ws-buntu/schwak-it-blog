import Link from 'next/link';
import { Post } from '@/lib/posts';

export const ArticleCard = ({ post }: { post: Post }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition shadow-md">
      <div>
        <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-2">
          <span>{post.chapter}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-white hover:text-indigo-300 transition">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-slate-400 text-sm mt-3 line-clamp-2">
          {post.description}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
          {post.category}
        </span>
        <Link 
          href={`/blog/${post.slug}`}
          className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-1"
        >
          Read Article &rarr;
        </Link>
      </div>
    </div>
  );
};