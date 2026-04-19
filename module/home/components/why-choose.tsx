"use client";
import { useState } from "react";
import Image from "next/image";

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "E-Commerce DNA",
      desc: "We only build for online retail. We understand your pain points intimately and speak the language of sales.",
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    },
    {
      title: "Proven Results",
      desc: "Our clients see an average 35% uplift in conversion rates and a 50% reduction in support costs.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Hands-On Partnership",
      desc: "You're not just a ticket number. Our team works embedded in your ecosystem as a true strategic partner.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Platform Agnostic",
      desc: "Shopify, WooCommerce, Magento, or custom builds—we integrate seamlessly with your existing stack.",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    }
  ];

  return (
    <section className="bg-[var(--white)] py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side: Headline + Image */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-[var(--primary)] tx-sub-caption font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              Strategic Partnership
            </div>
            <h2 className="text-[var(--black)] tx-title mb-10 leading-[1.1]">
              Keeping Your Business <br />
              <span className="text-[var(--primary)]">Safe</span> and Available.
            </h2>

            <div className="relative rounded-2xl overflow-hidden border border-[var(--black-100)]">
              <Image
                src="/assets/why_choose.png"
                alt="Why Choose Us"
                width={700}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side: Accordion Features */}
          <div className="lg:w-1/2 lg:pt-8">
            <div className="max-w-xl mb-12">
              <h3 className="text-[var(--black)] text-3xl lg:text-4xl font-black mb-6">
                A Comprehensive <span className="text-[var(--primary)]">Guide.</span>
              </h3>
              <p className="text-[var(--black-500)] tx-body">
                We believe in total transparency. Here is why forward-thinking e-commerce brands
                rely on Infynix for their digital growth.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`rounded-xl transition-all duration-300 overflow-hidden border ${openIndex === i
                    ? "bg-[var(--black-100)] border-transparent"
                    : "bg-transparent border-[var(--black-100)]"
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${openIndex === i ? "bg-[var(--primary)] text-white" : "bg-[var(--black-100)] text-[var(--black)]"
                        }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                        </svg>
                      </div>
                      <span className={`text-lg font-bold ${openIndex === i ? "text-[var(--primary)]" : "text-[var(--black)]"
                        }`}>
                        {feature.title}
                      </span>
                    </div>
                    <span className={`text-xl transition-transform ${openIndex === i ? "rotate-180 text-[var(--primary)]" : "text-[var(--black-300)]"}`}>
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-[300px]" : "max-h-0"
                      }`}
                  >
                    <div className="px-6 pb-6 text-[var(--black-500)] text-sm leading-relaxed border-t border-[var(--black-200)]/20 pt-4 mx-6">
                      {feature.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
