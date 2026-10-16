import React from 'react';

interface AffiliateBannerProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

export const AffiliateBanner: React.FC<AffiliateBannerProps> = ({
  title,
  description,
  link,
  buttonText
}) => {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl shadow-lg border border-indigo-800/50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded border border-indigo-500/30">
            Recommended Tool
          </span>
          <h3 className="text-xl font-bold mt-2 text-white">{title}</h3>
          <p className="text-slate-300 text-sm mt-1 max-w-xl">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="whitespace-nowrap px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-indigo-500/25 text-center"
        >
          {buttonText} &rarr;
        </a>
      </div>
      <p className="text-[10px] text-slate-400 mt-4 italic">
        * Disclosure: SCHWAK IT Consultancy may earn an affiliate commission from qualifying purchases made through links on this page at no extra cost to you.
      </p>
    </div>
  );
};