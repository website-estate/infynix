"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Successful Projects", value: "500+" },
    { label: "Global Clients", value: "150+" },
    { label: "Team Strength", value: "25+" },
    { label: "Retention Rate", value: "98%" }
  ];

  const logos = [
    "/assets/google.png?v=1", "/assets/lattice.png?v=1", "/assets/nestify.png?v=1", "/assets/prismic.png?v=1", "/assets/amazon.png?v=1",
    "/assets/google.png?v=1", "/assets/lattice.png?v=1", "/assets/nestify.png?v=1", "/assets/prismic.png?v=1", "/assets/amazon.png?v=1"
  ];

  if (!mounted) return null;

  return (
    <section suppressHydrationWarning className="bg-[var(--black-1000)] py-20 lg:py-32 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--primary)]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">

          {/* Left Side: Massive Impact Number */}
          <div className="lg:w-1/2 relative group">
            <div className="text-[12rem] lg:text-[18rem] font-black text-white/5 leading-none select-none absolute -top-16 -left-10 lg:-top-24 lg:-left-20 group-hover:text-[var(--primary)]/10 transition-colors duration-1000">
              10+
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--primary)] tx-sub-caption font-bold tracking-[0.2em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></span>
                A Decade of Innovation
              </div>
              <h2 className="text-white text-5xl lg:text-7xl font-black leading-[1.05] mb-6">
                Trusted Software <br />
                <span className="text-[var(--primary)] underline decoration-white/10 underline-offset-8 italic">Development</span> <br />
                Excellence.
              </h2>
              <p className="text-white/50 text-lg lg:text-xl max-w-xl leading-relaxed">
                Since 2014, we've been the silent engine behind some of the world's most successful
                e-commerce platforms and digital products.
              </p>
            </div>
          </div>

          {/* Right Side: Sophisticated Stats Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[var(--black-1000)] p-10 hover:bg-white/[0.02] transition-colors group">
                <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {stat.label}
                </div>
                <div className="text-white text-4xl lg:text-5xl font-black tracking-tighter">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTEGRATED INFINITE STRIP (Compact) */}
        <div className="relative py-6 mb-12 overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--black-1000)] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--black-1000)] to-transparent z-20 pointer-events-none"></div>

          <div className="flex overflow-hidden">
            <div className="animate-marquee flex gap-16 lg:gap-24 items-center whitespace-nowrap min-w-full">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default px-4">
                  <img src={logo} alt="Partner" className="h-6 lg:h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner Strip */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold text-2xl tracking-tight">Ready to build your legacy?</div>
            <p className="text-white/40 text-sm">Join the 150+ brands that trust Infynix for their digital evolution.</p>
          </div>
          <a href="#contact" className="btn-primary btn-md flex items-center justify-center">
            Start Project
          </a>
        </div>
      </div>
    </section>
  );
}
