import Image from "next/image";

export default function About() {
  const values = [
    { title: "E-Commerce DNA", desc: "Specialized in online retail growth.", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { title: "Proven Results", desc: "Average 35% conversion uplift.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { title: "Platform Agnostic", desc: "Seamless multi-platform integration.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
    { title: "AI Evolution", desc: "Models that learn and scale daily.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
  ];

  return (
    <section className="bg-[var(--black-1000)] py-24 lg:py-40 relative overflow-hidden text-[var(--white)]">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--primary)] tx-sub-caption font-bold tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]"></span>
            WHO WE ARE
          </div>
          <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-[1.05] tracking-tight">
            AI Experts <span className="text-[var(--primary)] italic font-light">Obsessed</span> <br />
            with <span className="underline decoration-[var(--primary)]/30 underline-offset-[12px]">Excellence.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-40">

          {/* Story & Vision */}
          <div className="lg:col-span-7 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="text-[var(--primary)] font-black text-xs tracking-widest uppercase opacity-60">Company Story</div>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  We were born from frustration. We watched businesses struggle with fragmented technology,
                  tired chatbots, and generic solutions that didn't move the needle. We saw AI potential going untapped.
                </p>
              </div>
              <div className="space-y-6">
                <div className="text-[var(--primary)] font-black text-xs tracking-widest uppercase opacity-60">Our Vision</div>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  Today, we're a team of engineers and strategists
                  who believe that the future of online retail is intelligent.
                  We reimagine what's possible for brands of all sizes.
                </p>
              </div>
            </div>

            {/* Mission Statement (Integrated) */}
            <div className="p-10 lg:p-16 rounded-[48px] bg-white/5 border border-white/10 relative group">
              <div className="absolute top-0 left-10 w-20 h-1 bg-[var(--primary)] group-hover:w-40 transition-all duration-700"></div>
              <p className="text-2xl lg:text-3xl font-medium italic leading-snug">
                "To democratize AI-powered commerce, enabling every business to compete with intelligence, scale, and human-centric technology."
              </p>
            </div>
          </div>

          {/* Visual Sidebar */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/assets/about.png"
                alt="Infynix Team"
                width={600}
                height={800}
                className="w-full h-auto object-cover opacity-80"
              />
            </div>
            {/* Quick Metrics Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--primary)] p-6 rounded-xl text-[var(--white)] max-w-[250px]">
              <div className="text-3xl font-black mb-1">150+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest leading-tight text-[var(--black-300)]">Successful Deployments</div>
            </div>
          </div>
        </div>

        {/* Benefits Horizontal Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-white/10">
          {values.map((val, i) => (
            <div key={i} className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[var(--primary)] transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm mb-1">{val.title}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">{val.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
