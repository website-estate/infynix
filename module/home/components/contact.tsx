"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section id="contact" suppressHydrationWarning className="bg-[var(--white)] py-24 lg:py-32 border-t border-[var(--black-100)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Heading Content */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-[var(--primary)] tx-sub-caption font-bold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              Contact Us
            </div>
            <h2 className="text-[var(--black)] text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
              Ready to <br />
              make <span className="text-[var(--primary)] italic">history?</span>
            </h2>
            <p className="text-[var(--black-400)] text-lg leading-relaxed max-w-sm">
              We're ready to build your next digital evolution. Let's start the journey today.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[var(--black-100)] p-8 lg:p-12 rounded-3xl border border-[var(--black-200)] shadow-sm">
            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[var(--black-400)] text-[10px] font-black uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-[var(--black-200)] rounded-xl px-4 py-3 text-sm placeholder:text-[var(--black-400)] focus:outline-none focus:border-[var(--primary)] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[var(--black-400)] text-[10px] font-black uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white border border-[var(--black-200)] rounded-xl px-4 py-3 text-sm placeholder:text-[var(--black-400)] focus:outline-none focus:border-[var(--primary)] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[var(--black-400)] text-[10px] font-black uppercase tracking-widest ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full bg-white border border-[var(--black-200)] rounded-xl px-4 py-3 text-sm placeholder:text-[var(--black-400)] focus:outline-none focus:border-[var(--primary)] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[var(--black-400)] text-[10px] font-black uppercase tracking-widest ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white border border-[var(--black-200)] rounded-xl px-4 py-3 text-sm placeholder:text-[var(--black-400)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"></textarea>
              </div>
              <button className="btn-primary w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-lg shadow-[var(--primary)]/10">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
