"use client";

import { MapPin, Shield, Wifi, Zap } from "lucide-react";
import { useEffect, useState } from "react";

type HeroNetworkVisualProps = {
  visual: {
    alt: string;
    panelLabel: string;
    locationLabel: string;
    hostsLabel: string;
    hostCount: string;
    packageLabel: string;
    walletLabel: string;
    trustLabel: string;
    packageName: string;
    packageSpeed: string;
    packagePrice: string;
  };
};

const nodes = [
  { x: "20%", y: "28%" },
  { x: "52%", y: "18%" },
  { x: "75%", y: "38%" },
  { x: "38%", y: "55%" },
  { x: "62%", y: "62%" },
  { x: "18%", y: "68%" }
] as const;

export function HeroNetworkVisual({ visual }: HeroNetworkVisualProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => setActive((value) => (value + 1) % 3), 2400);
    return () => window.clearInterval(timer);
  }, []);

  const cards = [
    { label: visual.packageLabel, value: visual.packageName, icon: Zap },
    { label: visual.walletLabel, value: visual.packagePrice, icon: Shield },
    { label: visual.trustLabel, value: visual.packageSpeed, icon: MapPin }
  ];

  return (
    <div
      className="relative min-h-[420px] w-full min-w-0 overflow-hidden rounded-lg border border-white/10 bg-bantunet-navy shadow-soft lg:min-h-[480px]"
      role="img"
      aria-label={visual.alt}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,61,115,0.65),rgba(7,26,58,0.96)_52%,rgba(34,197,94,0.14))]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <line x1="20%" y1="28%" x2="52%" y2="18%" stroke="url(#heroLineGrad)" strokeWidth="1" />
        <line x1="52%" y1="18%" x2="75%" y2="38%" stroke="url(#heroLineGrad)" strokeWidth="1" />
        <line x1="20%" y1="28%" x2="38%" y2="55%" stroke="url(#heroLineGrad)" strokeWidth="1" />
        <line x1="52%" y1="18%" x2="62%" y2="62%" stroke="url(#heroLineGrad)" strokeWidth="1" />
        <line x1="38%" y1="55%" x2="62%" y2="62%" stroke="url(#heroLineGrad)" strokeWidth="1" />
        <line x1="18%" y1="68%" x2="38%" y2="55%" stroke="url(#heroLineGrad)" strokeWidth="1" />
        <line x1="75%" y1="38%" x2="62%" y2="62%" stroke="url(#heroLineGrad)" strokeWidth="1" />
      </svg>

      {nodes.map((node, index) => (
        <div
          key={`${node.x}-${node.y}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
          aria-hidden="true"
        >
          <div className={`relative transition duration-500 ${active === index % 3 ? "scale-110" : "scale-100"}`}>
            {active === index % 3 ? <div className="absolute inset-0 animate-ping rounded-full bg-bantunet-green/30" /> : null}
            <div
              className={`h-3 w-3 rounded-full border-2 transition duration-300 ${
                active === index % 3
                  ? "border-bantunet-green bg-bantunet-green shadow-glow-sm"
                  : "border-bantunet-mint/40 bg-bantunet-navy"
              }`}
            />
          </div>
        </div>
      ))}

      <div className="absolute left-5 top-5 rounded-lg border border-white/15 bg-bantunet-navy/80 p-4 shadow-soft backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bantunet-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-bantunet-green" />
          </span>
          <p className="text-xs font-semibold uppercase text-bantunet-mint">{visual.locationLabel}</p>
        </div>
        <p className="mt-2 text-sm font-semibold text-white">{visual.panelLabel}</p>
      </div>

      <div className="absolute right-5 top-5 rounded-lg border border-white/15 bg-white/95 p-4 text-bantunet-ink shadow-soft backdrop-blur">
        <p className="text-xs font-semibold uppercase text-bantunet-blue">{visual.hostsLabel}</p>
        <div className="mt-3 flex items-center gap-1.5">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white transition duration-300 ${
                active === index ? "scale-110 bg-bantunet-green" : "bg-bantunet-blue/20"
              }`}
            >
              <Wifi className="h-3 w-3 text-bantunet-navy" aria-hidden="true" />
            </span>
          ))}
          <span className="ml-1 text-xs font-bold text-bantunet-navy">{visual.hostCount}</span>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 grid gap-2.5 sm:grid-cols-3">
        {cards.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`rounded-lg border p-3 shadow-soft backdrop-blur-md transition duration-300 ${
                active === index
                  ? "border-bantunet-green/40 bg-bantunet-navy/90"
                  : "border-white/15 bg-bantunet-navy/75"
              }`}
            >
              <div
                className={`mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase ${
                  active === index ? "text-bantunet-green" : "text-slate-300"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{item.label}</span>
              </div>
              <p className="truncate text-xs font-semibold text-white">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
