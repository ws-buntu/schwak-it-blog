export default function SetupGuidePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
      <h1 className="text-3xl font-bold text-white">Namecheap Hosting & Domain Setup Blueprint</h1>
      <p className="text-slate-400">
        A step-by-step technical guide for hosting multiple websites under a single Namecheap cPanel account.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">1. DNS Nameserver Setup</h2>
        <p className="text-sm">
          Set domain nameservers to <strong>Namecheap Web Hosting DNS</strong> within the Namecheap Domain Dashboard for automatic cPanel routing.
        </p>

        <h2 className="text-xl font-bold text-white">2. cPanel Addon Domain Directory</h2>
        <p className="text-sm">
          In cPanel &rarr; Domains, create <code>schwak-it.org</code> and uncheck the root directory inheritance box to keep files isolated inside <code>public_html/schwak-it.org</code>.
        </p>

        <h2 className="text-xl font-bold text-white">3. Building Static Export</h2>
        <pre className="bg-slate-950 p-4 rounded text-indigo-400 text-xs overflow-x-auto">
npm run build # Generates static production files in /out directory
        </pre>
      </div>
    </div>
  );
}