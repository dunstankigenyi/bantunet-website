type HeroNetworkVisualProps = {
  visual: {
    alt: string;
    panelLabel: string;
    locationLabel: string;
    hostsLabel: string;
    packageLabel: string;
    walletLabel: string;
    trustLabel: string;
    packageName: string;
    packageSpeed: string;
    packagePrice: string;
  };
};

export function HeroNetworkVisual({ visual }: HeroNetworkVisualProps) {
  return (
    <div className="relative min-h-[360px]" role="img" aria-label={visual.alt}>
      <div className="absolute inset-0 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm" />
      <div className="absolute inset-5 rounded-lg bg-[url('/bantunet-map-visual.svg')] bg-cover bg-center opacity-95" />
      <div className="absolute left-6 top-6 rounded-lg border border-white/15 bg-bantunet-navy/80 p-4 shadow-soft backdrop-blur">
        <p className="text-xs font-semibold uppercase text-bantunet-mint">{visual.locationLabel}</p>
        <p className="mt-2 text-lg font-semibold text-white">{visual.panelLabel}</p>
      </div>
      <div className="absolute right-6 top-24 rounded-lg border border-white/15 bg-white/95 p-4 text-bantunet-ink shadow-soft">
        <p className="text-xs font-semibold uppercase text-bantunet-blue">{visual.hostsLabel}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-bantunet-green" />
          <span className="h-3 w-3 rounded-full bg-bantunet-cyan" />
          <span className="h-3 w-3 rounded-full bg-white ring-2 ring-bantunet-green" />
        </div>
      </div>
      <div className="absolute bottom-8 left-7 right-7 grid gap-3 sm:grid-cols-3">
        {[visual.packageLabel, visual.walletLabel, visual.trustLabel].map((label, index) => (
          <div key={label} className="rounded-lg border border-white/15 bg-white/95 p-4 text-bantunet-ink shadow-soft">
            <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
            <p className="mt-2 text-sm font-semibold">
              {[visual.packageName, visual.packagePrice, visual.packageSpeed][index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
