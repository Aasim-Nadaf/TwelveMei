import { Header } from "@/components/section/header";
import { Footer } from "@/components/section/footer";
import { PageRouter } from "@/components/page-router";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#F2F2F2] p-4 sm:p-6 lg:p-8 flex flex-col font-sans selection:bg-[#E5ECE0] selection:text-[#111111]">
      <div className="relative flex-grow bg-white rounded-[40px] overflow-hidden flex flex-col shadow-sm border border-black/5">
        <Header />
        <main className="grow relative z-10">
          <PageRouter />
        </main>
        <Footer />
      </div>
    </div>
  );
}

