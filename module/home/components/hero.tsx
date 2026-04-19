import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-mesh-gradient relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-36">

      {/* Bold Background Elements */}
      <div className="absolute inset-0 bg-diagonal-grid opacity-100 pointer-events-none"></div>

      {/* High-Visibility Floating Blobs */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-[var(--primary)]/15 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-[var(--secondary)]/30 blur-[100px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Abstract Geometric Lines (Animated) */}
      <div className="absolute top-20 right-20 opacity-20 hidden lg:block animate-rotate-slow">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric Circles */}
          <circle cx="120" cy="120" r="119" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="120" cy="120" r="85" stroke="var(--primary)" strokeWidth="0.5" />
          <circle cx="120" cy="120" r="50" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="2 2" />

          {/* Blinking Dots with Ping Effect */}
          <g className="animate-blink">
            <circle cx="120" cy="1" r="3" fill="var(--primary)" />
            <circle cx="120" cy="1" r="3" stroke="var(--primary)" fill="none" className="animate-svg-ping" />
          </g>

          <g className="animate-blink" style={{ animationDelay: '1s' }}>
            <circle cx="120" cy="239" r="3" fill="var(--primary)" />
            <circle cx="120" cy="239" r="3" stroke="var(--primary)" fill="none" className="animate-svg-ping" style={{ animationDelay: '1s' }} />
          </g>

          <g className="animate-blink" style={{ animationDelay: '1.5s' }}>
            <circle cx="1" cy="120" r="3" fill="var(--primary)" />
            <circle cx="1" cy="120" r="3" stroke="var(--primary)" fill="none" className="animate-svg-ping" style={{ animationDelay: '1.5s' }} />
          </g>

          <g className="animate-blink" style={{ animationDelay: '0.5s' }}>
            <circle cx="239" cy="120" r="3" fill="var(--primary)" />
            <circle cx="239" cy="120" r="3" stroke="var(--primary)" fill="none" className="animate-svg-ping" style={{ animationDelay: '0.5s' }} />
          </g>

          <g className="animate-blink" style={{ animationDelay: '2s' }}>
            <circle cx="180" cy="180" r="2" fill="var(--secondary)" />
            <circle cx="180" cy="180" r="2" stroke="var(--secondary)" fill="none" className="animate-svg-ping" style={{ animationDelay: '2s' }} />
          </g>

          <g className="animate-blink" style={{ animationDelay: '2.5s' }}>
            <circle cx="60" cy="60" r="2" fill="var(--secondary)" />
            <circle cx="60" cy="60" r="2" stroke="var(--secondary)" fill="none" className="animate-svg-ping" style={{ animationDelay: '2.5s' }} />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Standardized Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-[var(--primary)] tx-sub-caption font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            INFYNIX IT SERVICES
          </div>

          {/* Heading */}
          <h1 className="text-[var(--black)] font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            Next-Gen E-commerce with <br />
            <span className="text-[var(--primary)]">AI-Driven Intelligence</span>
          </h1>

          {/* Description */}
          <p className="text-[var(--black-500)] text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            We build high-performance e-commerce platforms integrated with
            <span className="text-[var(--black)] font-semibold"> intelligent AI chatbots</span> and
            <span className="text-[var(--black)] font-semibold"> robust CRM systems</span> to
            automate your growth and redefine customer relationships in the modern market.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <a
              href="#contact"
              className="btn-primary btn-lg group w-full sm:w-[240px] flex items-center justify-center"
            >
              Explore Solutions
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-primary-outline btn-lg w-full sm:w-[240px] flex items-center justify-center"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Expertise Section */}
          <div className="pt-12 border-t border-[var(--black-100)]">
            <p className="text-[var(--black-500)] font-bold text-xs tracking-[0.2em] uppercase mb-8">Specialized AI Services</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "AI E-commerce", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
                { name: "Intelligent Chatbots", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
                { name: "CRM Integration", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { name: "Market Analytics", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
                { name: "SaaS Automation", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--white)] border border-[var(--black-100)] hover:border-[var(--primary)]/30 transition-all cursor-default group"
                >
                  <svg className="w-5 h-5 text-[var(--primary)] opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
                  </svg>
                  <span className="text-[var(--black-700)] text-sm font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
