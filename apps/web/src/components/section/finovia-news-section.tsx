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
    <section id="news" className="py-24 sm:py-32 bg-[#111111] text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Heading Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-white tracking-tight leading-tight">
              Insights & Updates.
            </h2>
          </div>
          <div className="mb-2">
            <a
              href="#blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[16px] text-[13px] font-semibold bg-white/10 border border-white/10 text-white hover:bg-white/20 shadow-sm transition-all"
            >
              <span>View all</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-[32px] bg-white/5 border border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between p-8"
            >
              <div>
                <div className="inline-block px-2.5 py-1 mb-6 rounded-md bg-white/10 border border-white/5 text-[10px] font-bold tracking-wide uppercase text-white/60">
                   {article.category}
                </div>

                <div className="flex items-center gap-3 text-[11px] text-white/40 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" /> {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-[18px] font-semibold text-white leading-snug group-hover:text-[#7DA154] transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-[13px] text-white/60 font-normal leading-relaxed line-clamp-3 mb-8">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center text-[13px] font-semibold text-white group-hover:text-[#7DA154]">
                <span>Read Article</span>
                <ArrowRight className="size-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
