"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function FinoviaPricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#111111] text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-white tracking-tight leading-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-[15px] text-white/60 font-normal leading-relaxed">
            Start free, then scale exactly as you need to. No hidden fees or surprises.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-10 inline-flex items-center bg-white/5 p-1.5 rounded-[20px] border border-white/10 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-[16px] text-[13px] font-semibold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white/10 text-white shadow-sm border border-white/10"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-[16px] text-[13px] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-white/10 text-white shadow-sm border border-white/10"
                  : "text-white/40 hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span className="bg-[#7DA154] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                20% off
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Plan 1 */}
          <div className="rounded-[32px] bg-white/5 p-8 border border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[14px] font-bold text-white mb-2">Basic</div>
              <p className="text-[12px] text-white/50 mb-6 line-clamp-2">Perfect for startups and small teams getting started.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-[40px] font-serif text-white leading-none">
                  {billingCycle === "monthly" ? "$0" : "$0"}
                </span>
                <span className="text-[13px] text-white/50 font-medium">/mo</span>
              </div>

              <button className="w-full py-3.5 rounded-[16px] text-[14px] font-semibold bg-white/10 border border-white/10 text-white hover:bg-white/20 transition shadow-sm mb-8">
                Start for free
              </button>

              <div className="space-y-4">
                {["1 resume analysis", "Basic ATS score", "PDF export", "Community tips"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-[13px] text-white/70">
                    <span className="flex size-4 items-center justify-center rounded-full bg-white/10 border border-white/10 shrink-0">
                      <Check className="size-2.5 text-white" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan 2: Pro */}
          <div className="rounded-[32px] bg-[#1A1A1A] text-white p-8 border border-[#7DA154]/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-between relative transform md:-translate-y-4">
            <div className="absolute top-6 right-6">
              <span className="bg-[#7DA154] text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                Popular
              </span>
            </div>

            <div>
              <div className="text-[14px] font-bold text-[#7DA154] mb-2">Pro</div>
              <p className="text-[12px] text-white/50 mb-6 line-clamp-2">For active job seekers applying to multiple roles.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-[40px] font-serif text-white leading-none">
                  {billingCycle === "monthly" ? "$15" : "$12"}
                </span>
                <span className="text-[13px] text-white/50 font-medium">/mo</span>
              </div>

              <button className="w-full py-3.5 rounded-[16px] text-[14px] font-semibold bg-[#7DA154] text-white hover:bg-[#688a42] transition shadow-sm mb-8">
                Start free trial
              </button>

              <div className="space-y-4">
                {["Unlimited analyses", "AI bullet rewrites", "Keyword gap targeting", "Cover letter generator"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-[13px] text-white/90">
                    <span className="flex size-4 items-center justify-center rounded-full bg-[#7DA154]/20 shrink-0 border border-[#7DA154]/30">
                      <Check className="size-2.5 text-[#7DA154]" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="rounded-[32px] bg-white/5 p-8 border border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[14px] font-bold text-white mb-2">Career Coach</div>
              <p className="text-[12px] text-white/50 mb-6 line-clamp-2">For coaches managing multiple clients and resumes.</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-[40px] font-serif text-white leading-none">
                  {billingCycle === "monthly" ? "$49" : "$39"}
                </span>
                <span className="text-[13px] text-white/50 font-medium">/mo</span>
              </div>

              <button className="w-full py-3.5 rounded-[16px] text-[14px] font-semibold bg-white/10 border border-white/10 text-white hover:bg-white/20 transition shadow-sm mb-8">
                Upgrade now
              </button>

              <div className="space-y-4">
                {["Multiple user profiles", "Client dashboard", "White-label reports", "API access"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-[13px] text-white/70">
                    <span className="flex size-4 items-center justify-center rounded-full bg-white/10 border border-white/10 shrink-0">
                      <Check className="size-2.5 text-white" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
