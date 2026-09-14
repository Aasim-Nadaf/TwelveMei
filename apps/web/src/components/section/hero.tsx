"use client";

import {
  Sparkles,
  MessageCircle,
  User,
  CheckCircle2,
  Search,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden min-h-[90vh] flex flex-col items-center"
    >
      {/* Background Image - Full height of the section, behind the transparent navbar */}
      <div
        className="absolute inset-0 z-0 object-cover w-full h-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Subtle overlay if needed to make text readable */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-0" />

      {/* Gradient to blend the bottom with the next section if needed */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 w-full flex flex-col items-center mt-8">
        {/* Trust Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white shadow-sm border border-black/5 text-[12px] font-bold text-[#111111]">
            <span>Backed by</span>
            <span className="bg-[#FF6600] text-white px-1.5 py-0.5 rounded-sm flex items-center justify-center font-sans">
              Y
            </span>
            <span>Combinator</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] font-serif tracking-tight text-[#111111] leading-[1.05]">
            Autopilot for
            <br />
            your Customer Support.
            <br />
            Scale effortlessly
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <a
            href="#waitlist"
            className="px-8 py-3.5 rounded-[12px] text-[15px] font-semibold bg-[#111111] text-white hover:bg-black transition-all shadow-lg"
          >
            Join to Waitlist
          </a>
        </div>

        {/* Support Dashboard Mockup */}
        <div className="relative mx-auto w-full max-w-[850px] bg-white/90 backdrop-blur-md rounded-[24px] p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Left Stats Panel */}
            <div className="w-full sm:w-1/3 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-zinc-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop"
                    alt="avatar"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#111111] leading-tight">
                    World of Diversity
                  </div>
                  <div className="text-[11px] text-[#888888]">my space</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[11px] text-[#A0A0A0] font-medium mb-1">
                    <span>New leads</span>
                    <span>23</span>
                  </div>
                  <div className="flex items-end gap-4 mt-2">
                    <div>
                      <div className="text-[28px] text-[#7DA154] font-semibold leading-none">
                        12
                      </div>
                      <div className="text-[10px] text-[#888888] mt-1">
                        send request
                      </div>
                    </div>
                    <div>
                      <div className="text-[28px] text-[#111111] font-semibold leading-none">
                        10
                      </div>
                      <div className="text-[10px] text-[#888888] mt-1">
                        in chat now
                      </div>
                    </div>
                    <div>
                      <div className="text-[28px] text-[#B95959] font-semibold leading-none">
                        1
                      </div>
                      <div className="text-[10px] text-[#888888] mt-1">
                        close chat
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <div className="flex justify-between text-[11px] text-[#A0A0A0] font-medium mb-1">
                    <span>New clients</span>
                    <span>3</span>
                  </div>
                  <div className="text-[28px] text-[#7DA154] font-semibold mt-2">
                    23 251$
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chat Panel */}
            <div className="w-full sm:w-2/3 flex gap-4">
              {/* Avatars column */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="size-8 rounded-full bg-fuchsia-600 ring-2 ring-white"></div>
                <div className="size-8 rounded-full bg-zinc-800 ring-2 ring-white"></div>
                <div className="size-8 rounded-full bg-zinc-400 ring-2 ring-white"></div>
                <div className="size-8 rounded-full bg-emerald-200 ring-2 ring-white overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
                    alt="avatar"
                  />
                </div>
              </div>

              {/* Chat View */}
              <div className="flex-grow bg-white rounded-[20px] p-5 shadow-sm border border-black/5 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[18px] font-medium text-zinc-400">
                    Board: <span className="font-bold text-[#111111]">CRM</span>{" "}
                    ⁽⁺⁾
                  </div>
                </div>

                {/* Chat Message Box */}
                <div className="bg-[#F8F9F9] rounded-[16px] p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="text-[12px] font-bold text-[#111111]">
                      Marcus{" "}
                      <span className="text-zinc-300 font-normal">
                        #34-24515
                      </span>
                    </div>
                    <MessageCircle className="size-3.5 text-zinc-400" />
                  </div>
                  <div className="text-[13px] text-[#555555]">
                    Hey. I ordered yesterday. Where is it?
                  </div>

                  <div className="flex justify-end mt-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-400 bg-white px-2 py-1 rounded-md shadow-sm">
                      <Search className="size-3" />
                      <span>Order lookup</span>
                    </div>
                  </div>

                  <div className="flex justify-end mt-1">
                    <div className="flex items-center gap-1.5 text-[12px] text-[#4A6430] bg-[#E5ECE0] px-3 py-1.5 rounded-[10px]">
                      <span>Found it</span>
                      <CheckCircle2 className="size-3.5 fill-emerald-500 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
