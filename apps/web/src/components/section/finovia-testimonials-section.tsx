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
      className="py-24 sm:py-32 bg-white border-t border-black/5"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-[#111111] tracking-tight leading-tight mb-4">
            Loved by successful candidates.
          </h2>
          <p className="text-[15px] text-[#888888] font-normal">
            Don&apos;t just take our word for it. Here is what job seekers say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`rounded-[32px] ${idx === 0 ? "md:col-span-8 bg-[#F8F9F9]" : "md:col-span-4 bg-white"} p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${idx === 0 ? "size-5" : ""} fill-[#FF6600] text-[#FF6600]`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className={`text-[#555555] font-normal leading-relaxed mb-8 ${idx === 0 ? "text-[18px] sm:text-[22px] font-serif" : "text-[14px]"}`}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={`${idx === 0 ? "size-12" : "size-10"} rounded-full object-cover ring-1 ring-black/5`}
                />
                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[12px] text-[#A0A0A0]">
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
