import { SignupForm } from "@/components/(auth)/signup-form";

export default function SignupPage() {
  return (
    <main className="relative min-h-screen bg-[#FFF0C4] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden z-0">
      {/* Landing Page Gradients */}
      <div className="absolute top-[-10%] left-[20%] w-[800px] h-[600px] bg-[#087D9D]/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#DFA16C]/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-[#F3A33C]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.15] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20z' fill='%2340351F' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-[1200px] bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[32px] shadow-[0_20px_80px_rgba(64,53,31,0.07)] min-h-[760px] flex overflow-hidden">
        <SignupForm />
      </div>
    </main>
  );
}
