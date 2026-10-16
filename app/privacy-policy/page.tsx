export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
      <h1 className="text-3xl font-bold text-white">Privacy & Affiliate Disclosure</h1>
      <p className="text-sm text-slate-400">Last Updated: October 2026</p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Affiliate Disclosure</h2>
        <p>
          In compliance with FTC guidelines, please assume that any links on <strong>schwak-it.org</strong> pointing to external products or services (including Namecheap, Amazon, or Printify) are affiliate links. 
        </p>
        <p>
          If you purchase a domain name, hosting package, or product through these links, SCHWAK IT Consultancy may receive a financial commission at zero additional cost to you. We only recommend platforms and infrastructure tools that align with engineering best practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Data Privacy Policy</h2>
        <p>
          We do not collect personal identifying information unless explicitly provided by you via direct communication. Anonymous aggregate analytics may be used to track page performance and link clicks.
        </p>
      </section>
    </div>
  );
}