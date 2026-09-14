"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/section/use-scroll";
import { Grid } from "lucide-react";
import { useAuth } from "@/context/auth-context";

export function Header() {
  const scrolled = useScroll(10);
  const { user } = useAuth();

  return (
    <header
      className={cn(
        "absolute top-0 z-50 w-full transition-all duration-300 px-6 sm:px-10 py-6",
        scrolled ? "bg-white/50 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/#" className="flex items-center gap-2 group">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-tl-[3px] rounded-bl-[3px] rounded-tr-[1px] rounded-br-[1px]" />
            <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-tr-[3px] rounded-br-[3px] rounded-tl-[1px] rounded-bl-[1px]" />
            <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-bl-[3px] rounded-br-[1px] rounded-tl-[1px] rounded-tr-[3px]" />
            <div className="w-2.5 h-2.5 bg-[#1F2327] rounded-br-[3px] rounded-bl-[1px] rounded-tr-[1px] rounded-tl-[3px]" />
          </div>
          <span className="font-sans font-semibold text-[#1F2327] text-[22px] tracking-tight">
            TwelveMei
          </span>
        </Link>

        {/* Center Floating Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-white p-1.5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] gap-1"
        >
          <Link
            href="/#"
            className="p-2.5 rounded-[16px] text-[#58595B] bg-[#111111] text-white hover:bg-black/90 transition-colors flex items-center justify-center"
          >
            <Grid className="size-[16px]" />
          </Link>
          <Link
            href="/#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <svg
              className="size-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link
            href="/#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <svg
              className="size-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            </svg>
          </Link>
          <Link
            href="/#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <svg
              className="size-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l16 16" />
              <path d="M4 20L20 4" />
            </svg>
          </Link>
          <Link
            href="/#"
            className="p-2.5 rounded-[16px] text-[#58595B] hover:text-[#2A2B2D] hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            <svg
              className="size-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center">
          <Link
            href="/#"
            className="px-5 py-3 rounded-xl text-[14px] font-semibold bg-white text-[#2A2B2D] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-zinc-50 transition-all"
          >
            Join to Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
