"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "The 2026 Guide to Beating ATS Algorithms",
    category: "Job Search",
    date: "Mar 12, 2026",
    readTime: "4 min read",
    summary:
      "Discover the exact keywords and formatting rules Applicant Tracking Systems look for when parsing resumes in 2026.",
  },
  {
    id: "2",
    title: "Why Your Bullet Points Are Failing You",
    category: "Resume Tips",
    date: "Mar 08, 2026",
    readTime: "5 min read",
    summary:
      "Stop writing descriptions and start writing achievements. Learn how to quantify your impact for recruiters.",
  },
  {
    id: "3",
    title: "Mastering the Keyword Gap Analysis",
    category: "Strategy",
    date: "Feb 28, 2026",
    readTime: "3 min read",
    summary:
      "A deep dive into aligning your resume with the job description to instantly boost your callback rate.",
  },
];

export function FinoviaNewsSection() {
  return (
    <section id="news" className="py-24 sm:py-32 bg-[#FFF0C4] text-[#40351F]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Heading Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-[#40351F] tracking-tight leading-tight">
              Insights & Updates.
            </h2>
          </div>
          <div className="mb-2">
            <a
              href="#blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[16px] text-[13px] font-semibold bg-white border border-[#40351F]/10 text-[#40351F] hover:bg-white/80 shadow-sm transition-all"
            >
              <span>View all</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`rounded-[32px] bg-white border border-[#40351F]/10 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(64,53,31,0.15)] transition-all group flex flex-col justify-between ${index === 0 ? "md:col-span-12 p-8 md:p-12 md:flex-row md:items-center gap-8" : "md:col-span-6 p-8"}`}
            >
              <div className={index === 0 ? "md:w-1/2" : ""}>
                <div className="inline-block px-3 py-1 mb-6 rounded-[8px] bg-[#F3A33C]/10 border border-[#F3A33C]/20 text-[10px] font-bold tracking-wide uppercase text-[#D98A12]">
                  {article.category}
                </div>

                <div
                  className={`flex items-center gap-3 text-[12px] text-[#40351F]/50 mb-4`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" /> {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {article.readTime}
                  </span>
                </div>

                <h3
                  className={`font-serif font-bold text-[#40351F] leading-snug group-hover:text-[#087D9D] transition-colors mb-3 line-clamp-2 ${index === 0 ? "text-[28px] sm:text-[32px]" : "text-[20px]"}`}
                >
                  {article.title}
                </h3>

                <p
                  className={`text-[#40351F]/70 font-normal leading-relaxed line-clamp-3 ${index === 0 ? "mb-0" : "mb-8 text-[14px]"}`}
                >
                  {article.summary}
                </p>
              </div>

              <div
                className={`${index === 0 ? "md:w-1/3 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[#40351F]/10 md:pl-12 flex flex-col justify-center" : "pt-6 border-t border-[#40351F]/10 flex items-center"}`}
              >
                <div
                  className={`flex items-center font-semibold text-[#40351F] group-hover:text-[#087D9D] cursor-pointer ${index === 0 ? "text-[15px]" : "text-[13px]"}`}
                >
                  <span>Read Article</span>
                  <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
