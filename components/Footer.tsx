import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <div>
          <p>&copy; {new Date().getFullYear()} SCHWAK IT (schwak-it.org). All rights reserved.</p>
          <p className="text-xs text-slate-500 mt-1">
            Built for software engineers, systems architects, and developers.
          </p>
        </div>
        <div className="flex gap-6 text-xs">
          <Link href="/privacy-policy" className="hover:text-slate-200">Privacy & Affiliate Disclosure</Link>
          <Link href="/setup-guide" className="hover:text-slate-200">Server Specifications</Link>
        </div>
      </div>
    </footer>
  );
};