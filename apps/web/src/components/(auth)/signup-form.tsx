"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export function SignupForm() {
  const router = useRouter();
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError(null);
    setLoading(true);
    try {
      await signup(email.split("@")[0] || "User", email, password);
      router.push("/#analyzer");
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Failed to create account.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex h-screen">
      {/* Left Column: Form */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col p-8 sm:p-12 relative bg-transparent">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#40351F]/70 hover:text-[#40351F] mb-12 lg:mb-auto transition-colors"
        >
          <ArrowLeft className="size-4" strokeWidth={2.5} />
          <span className="underline underline-offset-4 decoration-[#40351F]/30">
            Back to home
          </span>
        </Link>

        <div className="w-full max-w-[360px] mx-auto flex-1 flex flex-col justify-center">
          {/* Logo icon matching the image (arrows/corners) */}
          <div className="mb-6 flex justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="12" y="22" width="6" height="6" fill="#087D9D" />
              <path
                d="M22 18L28 12M28 12H22M28 12V18"
                stroke="#087D9D"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <rect x="24" y="24" width="4" height="4" fill="#087D9D" />
            </svg>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-[28px] font-extrabold tracking-tight text-[#40351F] mb-2">
              Create an account
            </h1>
            <p className="text-[13px] text-[#40351F]/60 font-medium">
              Join to evaluate your resume against top ATS algorithms
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50/80 border border-red-100 rounded-lg text-sm text-red-600 flex items-center gap-2">
              <AlertTriangle className="size-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-[#40351F]/10 text-[14px] text-[#40351F] placeholder:text-[#40351F]/40 focus:border-[#087D9D] focus:ring-1 focus:ring-[#087D9D] outline-none transition-all bg-white/50 backdrop-blur-sm"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a password"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-[#40351F]/10 text-[14px] text-[#40351F] placeholder:text-[#40351F]/40 focus:border-[#087D9D] focus:ring-1 focus:ring-[#087D9D] outline-none transition-all bg-white/50 backdrop-blur-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#087D9D] text-white text-[14px] font-bold hover:bg-[#06657e] transition-colors disabled:opacity-50 shadow-[0_10px_20px_rgba(8,125,157,0.2)]"
            >
              {loading ? "Creating..." : "Continue"}
            </button>
          </form>

          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[#40351F]/10"></div>
            <span className="px-4 text-[11px] text-[#40351F]/40 font-bold uppercase tracking-wider">
              OR
            </span>
            <div className="flex-1 border-t border-[#40351F]/10"></div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border border-[#40351F]/10 hover:bg-white/50 transition-colors text-[14px] font-bold text-[#40351F] bg-white/30 backdrop-blur-sm shadow-sm"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="size-5"
                alt="Google"
              />
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border border-[#40351F]/10 hover:bg-white/50 transition-colors text-[14px] font-bold text-[#40351F] bg-white/30 backdrop-blur-sm shadow-sm"
            >
              <img
                src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                className="size-5"
                alt="Discord"
              />
              Continue with Discord
            </button>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/sign-in"
              className="text-[13px] text-[#40351F]/60 font-medium hover:text-[#40351F] transition-colors"
            >
              Already have an account?{" "}
              <span className="underline underline-offset-4 decoration-[#40351F]/30">
                Sign in
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column: Bauhaus Geometric Art (Colorized to Brand) */}
      <div className="hidden lg:flex flex-1 p-6 pl-0 bg-transparent items-center justify-center">
        <div className="w-full h-full rounded-[24px] bg-[#087D9D] overflow-hidden flex flex-wrap border border-[#40351F]/5 shadow-inner">
          {/* A procedural grid of 5x5 blocks mimicking the design */}
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-0">
            {/* Row 1 */}
            <div className="bg-[#06657e] flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#40351F]"></div>
            </div>
            <div className="bg-[#DFA16C] rounded-br-full"></div>
            <div className="bg-[#FFF0C4] rounded-bl-full"></div>
            <div className="bg-[#40351F] flex items-center justify-center">
              <div className="w-full h-full rounded-tr-full bg-[#F3A33C]"></div>
            </div>
            <div className="bg-[#D98A12] flex items-center justify-center">
              <div className="w-32 h-64 bg-[#FFF0C4] transform rotate-45 translate-x-8"></div>
            </div>

            {/* Row 2 */}
            <div className="bg-[#D98A12] flex flex-wrap gap-2 p-6 items-center justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-[#FFF0C4]"
                ></div>
              ))}
            </div>
            <div className="bg-[#087D9D] flex items-center justify-center">
              <div className="w-16 h-16 bg-[#FFF0C4] rotate-45"></div>
            </div>
            <div className="bg-[#40351F]"></div>
            <div className="bg-[#D98A12] flex items-center justify-center">
              <div className="w-16 h-16 bg-[#087D9D] rotate-45 flex items-center justify-center">
                <div className="w-6 h-6 bg-[#D98A12] rotate-45"></div>
              </div>
            </div>
            <div className="bg-[#06657e]"></div>

            {/* Row 3 */}
            <div className="bg-[#F3A33C] [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
            <div className="bg-[#087D9D] flex gap-2 p-6 flex-wrap items-center justify-center">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-[#DFA16C]"
                ></div>
              ))}
            </div>
            <div className="bg-[#F3A33C] flex items-center justify-center relative">
              <div className="w-24 h-24 rounded-full border-[12px] border-[#DFA16C]"></div>
              <div className="absolute right-[-20%] w-32 h-32 rounded-full border-[12px] border-[#087D9D]"></div>
            </div>
            <div className="bg-[#40351F] flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-[#F3A33C] rotate-45"></div>
              <div className="w-8 h-8 bg-[#F3A33C] rotate-45"></div>
            </div>
            <div className="bg-[#06657e] flex items-center justify-center relative">
              <div className="w-16 h-16 rounded-full bg-[#087D9D] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#D98A12]"></div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="bg-[#40351F] [clip-path:polygon(100%_100%,0_100%,100%_0)] bg-[#FFF0C4]"></div>
            <div className="bg-[#06657e] rounded-tr-full"></div>
            <div className="bg-[#FFF0C4] flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 18L28 12M28 12H22M28 12V18"
                  stroke="#DFA16C"
                  strokeWidth="4"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
                <path
                  d="M18 22L12 28M12 28H18M12 28V22"
                  stroke="#DFA16C"
                  strokeWidth="4"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            </div>
            <div className="bg-[#40351F] flex items-center justify-center">
              <div className="w-16 h-16 bg-[#087D9D] rotate-[30deg] opacity-60"></div>
            </div>
            <div className="bg-[#D98A12] [clip-path:polygon(50%_0,100%_100%,0_100%)]"></div>

            {/* Row 5 */}
            <div className="bg-[#40351F] flex items-center justify-center">
              <div className="w-12 h-12 bg-[#FFF0C4]"></div>
            </div>
            <div className="bg-[#FFF0C4] flex items-end">
              <div className="w-16 h-16 bg-[#40351F] ml-4"></div>
            </div>
            <div className="bg-[#D98A12] [clip-path:polygon(100%_0,0_100%,100%_100%)] bg-[#FFF0C4]"></div>
            <div className="bg-[#40351F] flex flex-col gap-2 items-center justify-center">
              <div className="w-16 h-4 bg-[#FFF0C4] rounded-full [clip-path:polygon(0_0,100%_20%,100%_100%,0_80%)]"></div>
              <div className="w-16 h-4 bg-[#FFF0C4] rounded-full [clip-path:polygon(0_0,100%_20%,100%_100%,0_80%)]"></div>
            </div>
            <div className="bg-[#F3A33C] flex flex-wrap gap-2 p-6 items-center justify-center">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#40351F]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
