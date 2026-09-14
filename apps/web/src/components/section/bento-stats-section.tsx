"use client";

import { Zap, Target } from "lucide-react";

export function BentoStatsSection() {
  return (
    <section id="features" className="py-24 border-t border-black/5 bg-[#FBFBFC]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="text-center mb-16">
           <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-[#111111] tracking-tight leading-tight">
              Land more interviews <br/> without the guesswork.
           </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Card 1: Left */}
          <div className="md:col-span-4 rounded-[32px] bg-white p-8 flex flex-col justify-between border border-black/5 shadow-sm relative overflow-hidden">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] mb-4">
                Callback Rate
              </span>
              <h3 className="text-[22px] font-semibold text-[#111111] leading-tight">
                Get past the ATS 3x more often with AI context.
              </h3>
            </div>

            <div className="mt-10 pt-6 border-t border-black/5">
              <div className="text-[13px] font-medium text-[#A0A0A0] mb-1">
                Interview Callbacks
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[40px] font-bold text-[#111111] tracking-tight">+75%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Center */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="rounded-[32px] bg-white p-8 border border-black/5 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                 <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] mb-4">
                   Targeting
                 </span>
                 <h3 className="text-[22px] font-semibold text-[#111111] leading-tight">
                   Matches against real job descriptions.
                 </h3>
              </div>
              <div className="flex items-center gap-3 mt-8">
                 <div className="size-12 rounded-[16px] bg-[#F8F9F9] flex items-center justify-center border border-black/5">
                    <Target className="size-5 text-[#7DA154]" />
                 </div>
                 <div className="size-12 rounded-[16px] bg-[#F8F9F9] flex items-center justify-center border border-black/5">
                    <Zap className="size-5 text-[#2A2B2D]" />
                 </div>
              </div>
            </div>
          </div>

          {/* Card 3: Right */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="rounded-[32px] bg-[#111111] text-white p-8 border border-black/5 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-white/50 mb-4">
                   Scale
                 </span>
                 <h3 className="text-[22px] font-semibold text-white leading-tight">
                   Trusted by job seekers globally.
                 </h3>
              </div>
              <div className="mt-8">
                  <div className="flex items-center gap-2 text-[40px] font-bold tracking-tight">
                    <span>1.2M+</span>
                  </div>
                  <p className="text-[13px] text-white/60 mt-1">Resumes analyzed</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
