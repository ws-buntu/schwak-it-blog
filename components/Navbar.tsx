import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="text-indigo-500">&lt;/&gt;</span> schwak-it.org
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link href="/blog" className="hover:text-indigo-400 transition">Articles</Link>
          <Link href="/setup-guide" className="hover:text-indigo-400 transition">Hosting Specs</Link>
          <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer sponsored" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md transition shadow-sm">
            Namecheap Deals
          </a>
        </nav>
      </div>
    </header>
  );
};