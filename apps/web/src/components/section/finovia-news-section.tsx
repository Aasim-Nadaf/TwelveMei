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
    title: "Mastering Customer Support at Scale",
    category: "Support",
    date: "Mar 12, 2026",
    readTime: "4 min read",
    summary:
      "Discover the modern frameworks used by high-growth startups to minimize ticket backlogs and maximize agent efficiency.",
  },
  {
    id: "2",
    title: "How AI Routing Eliminates Manual Triage",
    category: "AI & Tech",
    date: "Mar 08, 2026",
    readTime: "5 min read",
    summary:
      "Say goodbye to manual ticket assignments with automated intelligence routing across all your support channels.",
  },
  {
    id: "3",
    title: "Building an Unbreakable Customer Success Strategy",
    category: "Strategy",
    date: "Feb 28, 2026",
    readTime: "3 min read",
    summary:
      "A deep dive into proactive engagement, anomaly tracking, and preventing churn before it happens.",
  },
];

export function FinoviaNewsSection() {
  return (
    <section id="news" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Heading Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-serif text-[#111111] tracking-tight leading-tight">
              Insights & Updates.
            </h2>
          </div>
          <div className="mb-2">
            <a
              href="#blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[16px] text-[13px] font-semibold bg-[#F8F9F9] border border-black/5 text-[#111111] hover:bg-zinc-50 shadow-sm transition-all"
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
              className="rounded-[32px] bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between p-8"
            >
              <div>
                <div className="inline-block px-2.5 py-1 mb-6 rounded-md bg-[#F8F9F9] border border-black/5 text-[10px] font-bold tracking-wide uppercase text-[#A0A0A0]">
                   {article.category}
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#A0A0A0] mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" /> {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-[18px] font-semibold text-[#111111] leading-snug group-hover:text-[#7DA154] transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-[13px] text-[#888888] font-normal leading-relaxed line-clamp-3 mb-8">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 flex items-center text-[13px] font-semibold text-[#111111] group-hover:text-[#7DA154]">
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
