import Link from "next/link";

export default function Services() {
  const points = [
    {
      title: "Strategic Consulting",
      desc: "Customized digital roadmaps that align your business goals with the latest market innovations.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      stat: "Strategy First"
    },
    {
      title: "Scalable Infrastructure",
      desc: "Building robust cloud foundations that provide the stability needed for rapid business growth.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      stat: "Cloud Native"
    },
    {
      title: "Advanced AI Power",
      desc: "Integrating intelligent automation and chatbots to redefine how you connect with customers.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      stat: "AI-Driven"
    }
  ];

  return (
    <section className="bg-[var(--black-200)] py-20 lg:py-32 relative z-20">

      {/* Success Metrics Summary (Floating Dark Capsule) */}
      <div className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 w-full max-w-5xl px-4 mb-16 lg:mb-0">
        <div className="bg-[var(--black-900)] rounded-[32px] md:rounded-full py-8 md:py-10 px-8 md:px-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "Client Uptime", val: "99.9%", color: "text-[var(--primary)]" },
              { label: "Successful Projects", val: "150+", color: "text-[var(--white)]" },
              { label: "Average Growth", val: "45%", color: "text-[var(--secondary)]" },
              { label: "Expert Support", val: "24/7", color: "text-[var(--white)]" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center px-4 py-4 md:py-0">
                <div className={`text-2xl md:text-3xl font-bold mb-1 ${item.color}`}>{item.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--white)]/40 text-center">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[var(--primary)]/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-4 mt-12 lg:mt-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-[var(--primary)] tx-sub-caption font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            Driving Digital Growth
          </div>
          <h2 className="text-[var(--black)]">
            Scaling Your Digital <br />
            <span className="text-[var(--primary)]">Growth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group relative bg-[var(--white)] p-8 rounded-2xl border border-[var(--black-100)] hover:border-[var(--primary)]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Number Indicator */}
              <div className="absolute top-6 right-8 text-3xl font-black text-[var(--black-100)] select-none">
                0{index + 1}
              </div>

              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-[var(--black-100)] text-[var(--black-600)] flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={point.icon} />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-[var(--primary)] tx-sub-caption font-bold tracking-widest mb-3">
                  {point.stat}
                </div>
                <h3 className="text-[var(--black)] font-bold text-xl mb-3 transition-colors">
                  {point.title}
                </h3>
                <p className="text-[var(--black-500)] text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
