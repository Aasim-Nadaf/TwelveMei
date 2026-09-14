"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/section/use-scroll";
import { Grid, Camera, User, AtSign, Hexagon } from "lucide-react";

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 px-6 sm:px-10 py-6",
        scrolled ? "bg-white/50 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="grid grid-cols-2 gap-0.5">
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-tl-[3px] rounded-bl-[3px] rounded-tr-[1px] rounded-br-[1px]" />
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-tr-[3px] rounded-br-[3px] rounded-tl-[1px] rounded-bl-[1px]" />
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-bl-[3px] rounded-br-[1px] rounded-tl-[1px] rounded-tr-[3px]" />
             <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-br-[3px] rounded-bl-[1px] rounded-tr-[1px] rounded-tl-[3px]" />
          </div>
          <span className="font-sans font-semibold text-[#1F2327] text-[22px] tracking-tight">TwelveMei</span>
        </Link>

        {/* Center Floating Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-white p-1.5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] gap-1"
        >
          <a
            href="#"
            className="bg-[#2A2B2D] text-white p-2.5 rounded-[16px] shadow-xs flex items-center justify-center transition-all"
          >
            <Grid className="size-[18px]" />
          </a>
          <a
            href="#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <Camera className="size-[18px]" />
          </a>
          <a
            href="#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <AtSign className="size-[18px]" />
          </a>
          <a
            href="#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <Hexagon className="size-[18px]" /> {/* Fallback for X icon */}
          </a>
          <a
            href="#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <User className="size-[18px]" />
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center">
          <Link
            href="/waitlist"
            className="px-5 py-3 rounded-xl text-[15px] font-semibold bg-white text-[#2A2B2D] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-zinc-50 transition-all"
          >
            Join to Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}


