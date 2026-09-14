"use client";

import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Carter",
    role: "Senior Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    content:
      "I was struggling to get past the initial screening. The AI rewrote my bullets to focus on metrics, and I landed 3 interviews the next week.",
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    role: "UX Designer at Stripe",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    content:
      "The keyword gap analysis showed me exactly what my resume was missing compared to the job description. Invaluable tool for design roles.",
  },
  {
    id: "3",
    name: "David Thompson",
    role: "Backend Engineer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    content:
      "Finally, a tool that formats tech resumes perfectly for ATS parsers without losing the technical depth of my experience.",
  },
];

export function FinoviaTestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-white border-t border-[#40351F]/10 relative overflow-hidden"
    >
      {/* Decorative background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#FFF0C4]/30 blur-[100px] -z-10 rounded-full" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-[#40351F] tracking-tight leading-tight mb-4">
            Loved by successful candidates.
          </h2>
          <p className="text-[15px] text-[#40351F]/60 font-normal">
            Don&apos;t just take our word for it. Here is what job seekers say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[32px] bg-white/80 backdrop-blur-sm p-8 border border-[#40351F]/10 shadow-[0_10px_30px_rgba(64,53,31,0.03)] hover:shadow-[0_20px_40px_rgba(64,53,31,0.08)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-[#D98A12] text-[#D98A12]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#40351F]/80 font-medium leading-relaxed mb-8 text-[15px]">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#40351F]/5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="size-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <h4 className="text-[14px] font-bold text-[#40351F]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[12px] text-[#40351F]/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
