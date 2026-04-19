"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What makes Infynix different from other AI agencies?",
      answer: "We specialize exclusively in e-commerce. Our models are trained on real retail data, ensuring that every insight we provide is geared specifically towards increasing your conversion rates and revenue."
    },
    {
      question: "How do you ensure the security of our business data?",
      answer: "Security is our top priority. We use enterprise-grade encryption and follow strict data privacy protocols. Your data is used only to train your specific models and is never shared with third parties."
    },
    {
      question: "Can we customize the AI models for our specific niche?",
      answer: "Absolutely. We don't believe in one-size-fits-all solutions. Our team works closely with you to fine-tune our algorithms according to your specific industry, customer behavior, and business goals."
    },
    {
      question: "How long does it take to see measurable results?",
      answer: "While some improvements can be seen within the first few weeks, our AI models typically require 30-60 days of data collection to reach peak performance and deliver the most significant ROI."
    }
  ];

  return (
    <section className="bg-[var(--black-100)] py-24 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-black uppercase tracking-widest mb-6">
              Common Questions
            </div>
            <h2 className="text-[var(--black)] tx-title mb-6">
              Frequently Asked <span className="text-[var(--primary)]">Questions.</span>
            </h2>
            <p className="text-[var(--black-500)] tx-body max-w-2xl mx-auto">
              Everything you need to know about our process, technology, and how we help your business scale.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div 
                key={i} 
                className={`rounded-[32px] transition-all duration-500 overflow-hidden ${
                  openIndex === i 
                  ? "bg-[var(--white)] shadow-xl border-transparent" 
                  : "bg-transparent border border-[var(--black-200)] hover:border-[var(--primary)]/30"
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full p-8 lg:p-10 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors ${
                    openIndex === i ? "text-[var(--primary)]" : "text-[var(--black)]"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === i ? "bg-[var(--primary)] text-white rotate-180" : "bg-[var(--black-100)] text-[var(--black)]"
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openIndex === i ? "M20 12H4" : "M12 4v16m8-8H4"} />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-10 pb-10 text-[var(--black-500)] tx-body leading-relaxed border-t border-[var(--black-100)] pt-8 mx-10">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="p-10 rounded-[40px] bg-[var(--black-1000)] text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h4 className="text-2xl font-bold mb-2">Still have more questions?</h4>
                <p className="text-white/60">We're here to help you navigate your AI journey.</p>
              </div>
              <button className="btn-primary px-10 py-5 rounded-full font-bold whitespace-nowrap">
                Contact Our Experts
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
