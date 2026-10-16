import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCHWAK IT Engineering Journal | Systems & Software Design",
  description: "In-depth articles, architectural guides, and software engineering blueprints.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased">
        <Navbar />

        {/* Global Affiliate Notice Header */}
        <div className="bg-indigo-950/60 border-b border-indigo-900/50 py-1.5 px-4 text-center text-xs text-indigo-300">
          💡 Partnered with Namecheap. Discover domain deals and cloud hosting infrastructure.
        </div>

        {/* Page Content */}
        <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
