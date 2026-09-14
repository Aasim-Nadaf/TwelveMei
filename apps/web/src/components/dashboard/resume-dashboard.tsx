"use client";

import { useState } from "react";
import { FileText, ArrowUpRight, Search, Filter, MoreHorizontal, CheckCircle2, Clock } from "lucide-react";
import { useAuth } from "@/context/auth-context";

interface AnalysisRecord {
  id: string;
  filename: string;
  date: string;
  score: number;
  status: "completed" | "processing";
  targetRole: string;
}

const mockHistory: AnalysisRecord[] = [
  {
    id: "scan-1",
    filename: "Alex_Morgan_Resume_v4.pdf",
    date: "Just now",
    score: 88,
    status: "completed",
    targetRole: "Product Manager",
  },
  {
    id: "scan-2",
    filename: "Alex_Morgan_Resume_Tech_v2.docx",
    date: "Oct 12, 2023",
    score: 72,
    status: "completed",
    targetRole: "Technical PM",
  },
  {
    id: "scan-3",
    filename: "Alex_M_Marketing_Draft.pdf",
    date: "Sep 28, 2023",
    score: 65,
    status: "completed",
    targetRole: "PMM",
  },
  {
    id: "scan-4",
    filename: "Alex_Morgan_2022.pdf",
    date: "Jan 15, 2023",
    score: 45,
    status: "completed",
    targetRole: "Associate PM",
  },
];

export function ResumeDashboard() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHistory = mockHistory.filter((item) =>
    item.filename.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.targetRole.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FBFBFC] pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-[2.5rem] font-serif text-[#111111] tracking-tight leading-tight mb-2">
              Welcome back{user ? `, ${user.name.split(" ")[0]}` : ""}
            </h1>
            <p className="text-[15px] text-[#888888]">
              Manage your saved resumes, ATS scores, and application history.
            </p>
          </div>
          <div>
            <a 
              href="#analyzer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[16px] text-[14px] font-semibold bg-[#111111] text-white hover:bg-[#2A2B2D] shadow-sm transition-all"
            >
              New Analysis
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-[24px] p-6 border border-black/5 shadow-sm">
             <div className="text-[12px] font-bold tracking-wider uppercase text-[#A0A0A0] mb-2">Avg. ATS Score</div>
             <div className="text-[32px] font-serif font-bold text-[#111111]">
                67.5<span className="text-[16px] text-[#888888] font-sans font-medium">/100</span>
             </div>
          </div>
          <div className="bg-white rounded-[24px] p-6 border border-black/5 shadow-sm">
             <div className="text-[12px] font-bold tracking-wider uppercase text-[#A0A0A0] mb-2">Resumes Analyzed</div>
             <div className="text-[32px] font-serif font-bold text-[#111111]">
                4
             </div>
          </div>
          <div className="bg-white rounded-[24px] p-6 border border-black/5 shadow-sm">
             <div className="text-[12px] font-bold tracking-wider uppercase text-[#A0A0A0] mb-2">Last Scan</div>
             <div className="text-[32px] font-serif font-bold text-[#111111]">
                Today
             </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
           <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#A0A0A0]" />
              <input
                type="text"
                placeholder="Search resumes or roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-black/5 rounded-[16px] py-3 pl-10 pr-4 text-[14px] outline-none focus:border-black/20 focus:ring-1 focus:ring-black/5 transition-all shadow-sm"
              />
           </div>
           <button className="inline-flex items-center gap-2 px-5 py-3 rounded-[16px] bg-white border border-black/5 text-[#555555] text-[13px] font-semibold hover:bg-zinc-50 shadow-sm transition-all">
              <Filter className="size-4" />
              <span>Filter</span>
           </button>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-[24px] border border-black/5 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/5 bg-[#F8F9F9]">
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">Resume File</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">Target Role</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">Date</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">ATS Score</th>
                  <th className="py-4 px-6 text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0] text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredHistory.map((item) => (
                  <tr key={item.id} className={`group border-b border-black/5 last:border-0 hover:bg-[#F8F9F9] transition-colors`}>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-[12px] bg-[#F8F9F9] border border-black/5 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                          <FileText className="size-4 text-[#888888]" />
                        </div>
                        <div>
                          <div className="text-[14px] font-semibold text-[#111111] truncate max-w-[200px] sm:max-w-xs">{item.filename}</div>
                          <div className="text-[12px] text-[#A0A0A0] flex items-center gap-1 mt-0.5">
                             {item.status === 'completed' ? (
                               <CheckCircle2 className="size-3 text-[#7DA154]" />
                             ) : (
                               <Clock className="size-3 text-amber-500" />
                             )}
                             <span className="capitalize">{item.status}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                       <span className="inline-flex items-center px-2.5 py-1 rounded-[8px] bg-white border border-black/5 text-[12px] font-medium text-[#555555]">
                          {item.targetRole}
                       </span>
                    </td>
                    <td className="py-5 px-6 text-[13px] text-[#888888]">
                      {item.date}
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                         <div className="w-16 h-1.5 bg-zinc-100 rounded-full overflow-hidden shrink-0">
                            <div 
                              className={`h-full rounded-full ${item.score >= 80 ? 'bg-[#7DA154]' : item.score >= 60 ? 'bg-amber-400' : 'bg-rose-400'}`} 
                              style={{ width: `${item.score}%` }} 
                            />
                         </div>
                         <span className="text-[13px] font-bold text-[#111111]">{item.score}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                       <div className="flex items-center justify-end gap-2">
                          <button className="p-2 rounded-full text-[#A0A0A0] hover:bg-white hover:text-[#111111] hover:shadow-sm transition-all border border-transparent hover:border-black/5">
                             <ArrowUpRight className="size-4" />
                          </button>
                          <button className="p-2 rounded-full text-[#A0A0A0] hover:bg-white hover:text-[#111111] hover:shadow-sm transition-all border border-transparent hover:border-black/5">
                             <MoreHorizontal className="size-4" />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
                {filteredHistory.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-[14px] text-[#888888]">
                      No resume analysis history found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
