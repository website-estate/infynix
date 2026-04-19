"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const reviews = [
    {
      name: "Alex Rivera",
      role: "CEO, TechFlow",
      text: "Infynix transformed our e-commerce experience. Their AI integration saved us countless hours in support and boosted our sales by 40%.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "Founder, GreenLush",
      text: "The 10+ years of experience really shows. They handled our complex migration with zero downtime. A true strategic partner.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      name: "James Wilson",
      role: "CTO, RetailNode",
      text: "Clean code, professional communication, and deep tech understanding. They built an engine that's ready for the future.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Director, VibeStyle",
      text: "The AI chatbots they built for us actually feel human. Our customer engagement rates have doubled and satisfaction is at an all-time high.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
      const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + 24));
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + 24),
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-[var(--black-100)] py-20 lg:py-24 border-t border-[var(--black-200)]">
      <div className="container mx-auto px-4">

        {/* Centered Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-[var(--primary)] tx-sub-caption font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            What Our Clients Say
          </div>
          <h2 className="text-[var(--black)] text-3xl lg:text-4xl font-black leading-tight mb-4">
            Transforming Businesses, <br />
            One <span className="text-[var(--primary)]">Success Story</span> at a Time.
          </h2>
        </div>

        {/* Compact Swiper Slider */}
        <div className="max-w-4xl mx-auto relative group">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 scroll-smooth"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              overflowY: 'hidden'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full md:w-[380px] snap-center bg-white p-8 rounded-2xl border border-[var(--black-100)] hover:border-[var(--primary)]/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 mb-5 text-[var(--primary)]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[var(--black-700)] text-sm leading-relaxed mb-8">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[var(--black-100)]">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--black-200)] flex-shrink-0">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[var(--black)] font-bold text-sm leading-none mb-1">{review.name}</div>
                    <div className="text-[var(--black-400)] text-[10px] font-black uppercase tracking-widest">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Pagination Indicators */}
          <div className="flex justify-center items-center gap-3 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? "w-10 bg-[var(--primary)]" : "w-3 bg-[var(--black-200)]"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
