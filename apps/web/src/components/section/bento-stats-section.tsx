"use client";

import { Zap, Target } from "lucide-react";

export function BentoStatsSection() {
  return (
    <section
      id="features"
      className="py-24 border-t border-black/5 bg-[#FBFBFC]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-[#111111] tracking-tight leading-tight">
            Land more interviews <br /> without the guesswork.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Card 1: Top Full Width */}
          <div className="md:col-span-12 rounded-[32px] bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-black/5 shadow-sm relative overflow-hidden">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#4A6430] bg-[#E5ECE0] rounded-[8px] mb-4">
                Callback Rate
              </span>
              <h3 className="text-[28px] sm:text-[32px] font-serif text-[#111111] leading-tight">
                Get past the ATS 3x more often with AI context.
              </h3>
            </div>

            <div className="md:w-1/3 flex flex-col items-center md:items-end md:border-l border-black/5 pl-0 md:pl-12 w-full pt-8 md:pt-0 border-t md:border-t-0">
              <div className="text-[14px] font-medium text-[#A0A0A0] mb-2">
                Interview Callbacks
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[56px] font-bold text-[#7DA154] tracking-tight leading-none">
                  +75%
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Bottom Left */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="rounded-[32px] bg-white p-8 md:p-10 border border-black/5 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] mb-4">
                  Targeting
                </span>
                <h3 className="text-[24px] font-serif text-[#111111] leading-tight">
                  Matches against real job descriptions.
                </h3>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <div className="size-16 rounded-[20px] bg-[#F8F9F9] flex items-center justify-center border border-black/5">
                  <Target className="size-7 text-[#7DA154]" />
                </div>
                <div className="size-16 rounded-[20px] bg-[#F8F9F9] flex items-center justify-center border border-black/5">
                  <Zap className="size-7 text-[#111111]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Right */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="rounded-[32px] bg-[#111111] text-white p-8 md:p-10 border border-black/5 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-4">
                  Scale
                </span>
                <h3 className="text-[24px] font-serif text-white leading-tight">
                  Trusted by job seekers globally.
                </h3>
              </div>
              <div className="mt-12">
                <div className="flex items-center gap-2 text-[48px] font-bold tracking-tight text-[#E5ECE0]">
                  <span>1.2M+</span>
                </div>
                <p className="text-[14px] text-white/60 mt-2">
                  Resumes analyzed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
