"use client";

import { Zap, Target } from "lucide-react";

export function BentoStatsSection() {
  return (
    <section
      id="features"
      className="py-24 border-t border-[#40351F]/10 bg-[#FFF0C4]/30"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-[#40351F] tracking-tight leading-tight">
            Land more interviews <br /> without the guesswork.
          </h2>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {/* Card 1 */}
          <div className="rounded-[32px] bg-white p-8 md:p-10 flex flex-col justify-between border border-[#40351F]/10 shadow-sm relative overflow-hidden">
            <div>
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#087D9D] bg-[#087D9D]/10 rounded-[8px] mb-4">
                Callback Rate
              </span>
              <h3 className="text-[24px] font-serif text-[#40351F] leading-tight mb-8">
                Get past the ATS 3x more often.
              </h3>
            </div>

            <div className="mt-auto">
              <div className="text-[13px] font-medium text-[#40351F]/60 mb-1">
                Interview Callbacks
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[48px] font-bold text-[#087D9D] tracking-tight leading-none">
                  +75%
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[32px] bg-[#FFF0C4] p-8 md:p-10 border border-[#40351F]/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D98A12] bg-[#D98A12]/10 rounded-[8px] mb-4">
                Targeting
              </span>
              <h3 className="text-[24px] font-serif text-[#40351F] leading-tight mb-8">
                Matches against real job descriptions.
              </h3>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <div className="size-14 rounded-[16px] bg-white flex items-center justify-center border border-[#40351F]/10 shadow-sm">
                <Target className="size-6 text-[#087D9D]" />
              </div>
              <div className="size-14 rounded-[16px] bg-white flex items-center justify-center border border-[#40351F]/10 shadow-sm">
                <Zap className="size-6 text-[#F3A33C]" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[32px] bg-[#40351F] text-white p-8 md:p-10 border border-[#40351F]/10 shadow-[0_10px_30px_rgba(64,53,31,0.2)] flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#DFA16C] bg-[#DFA16C]/20 rounded-[8px] mb-4">
                Scale
              </span>
              <h3 className="text-[24px] font-serif text-white leading-tight mb-8">
                Trusted by job seekers globally.
              </h3>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-2 text-[48px] font-bold tracking-tight text-[#DFA16C] leading-none">
                <span>1.2M+</span>
              </div>
              <p className="text-[14px] text-white/70 mt-2">Resumes analyzed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
