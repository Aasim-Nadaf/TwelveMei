"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import {
  Upload,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Copy,
  RefreshCw,
  Printer,
  ChevronRight,
  User,
  Search,
  Check,
  Zap,
  Bookmark,
  Trash2,
  History,
  FileText,
  X,
} from "lucide-react";
import type { ResumeAnalysisResult } from "@/app/api/analyze-resume/route";

const SAMPLE_ENGINEER_RESUME = `Alex Morgan
alex.morgan@example.com | (555) 234-5678 | San Francisco, CA | linkedin.com/in/alexmorgan

SUMMARY
Full-stack software developer with 4 years of experience building web applications using React, JavaScript, and Node.js. Looking for a challenging senior engineering position.

WORK EXPERIENCE
Software Engineer | Apex FinTech Solutions | 2022 - Present
- Responsible for maintaining front-end web components and fixing bugs reported by QA.
- Worked with team members to create new user dashboard features using React.
- Helped with database queries and backend APIs in Node.js and PostgreSQL.
- Assisted with optimizing web application loading times.

Junior Web Developer | Nimbus Cloud Apps | 2020 - 2022
- Built landing pages using HTML, CSS, JavaScript, and Tailwind.
- Handled customer tickets and resolved minor styling issues across mobile views.
- Participated in weekly standups and agile sprint reviews.

EDUCATION
B.S. in Computer Science | University of California, Berkeley | 2020

SKILLS
JavaScript, TypeScript, React, HTML/CSS, Git, Node.js, Express, SQL`;

const SAMPLE_FINTECH_RESUME = `Jordan Vance
jordan.vance@fintech-exec.io | (415) 890-1234 | New York, NY

PROFESSIONAL SUMMARY
Results-driven Financial Analyst and Fintech Solutions Architect with 6+ years of experience leading cross-border treasury management, financial modeling, and automated ledger operations.

EXPERIENCE
Senior Financial Analyst | GlobalPay Capital | 2022 - Present
- Spearheaded treasury automation initiative, reducing daily reconciliation latency by 68% across 14 multi-currency banking rails.
- Managed $45M portfolio liquidity risk, optimizing overnight yield returns by 1.8% ($810K annualized profit).
- Designed interactive executive BI dashboards in SQL and Python, adopted by C-suite for quarterly earnings forecasts.

Fintech Operations Analyst | NovaBank International | 2019 - 2022
- Automated KYC/AML verification pipeline, decreasing customer onboarding turnaround time from 72 hours to 8 minutes.
- Audited 10,000+ high-volume transactions monthly with 99.98% accuracy, identifying and mitigating $1.2M in fraudulent chargebacks.

EDUCATION & CERTIFICATIONS
B.S. in Finance & Quantitative Economics | NYU Stern School of Business | 2019
CFA Charterholder (Level III Passed)

CORE COMPETENCIES
Financial Modeling, DCF Valuation, Treasury Operations, SQL, Python, Bloomberg Terminal, Risk Mitigation, AML/KYC Compliance`;

export function ResumeAnalyzer() {
  const { user, isAuthenticated } = useAuth();
  const [activeInputTab, setActiveInputTab] = useState<"upload" | "paste">(
    "upload",
  );
  const [resumeText, setResumeText] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [fileMimeType, setFileMimeType] = useState<string | null>(null);
  const [fileSizeStr, setFileSizeStr] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [targetRole, setTargetRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [showJobDetails, setShowJobDetails] = useState(false);

  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Full-stack saved scans state
  const [savedScans, setSavedScans] = useState<any[]>([]);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [isSavingScan, setIsSavingScan] = useState(false);
  const [hasSavedCurrent, setHasSavedCurrent] = useState(false);

  // Result view state
  const [activeResultTab, setActiveResultTab] = useState<
    "flaws" | "improvements" | "keywords" | "breakdown" | "profile"
  >("flaws");
  const [flawFilter, setFlawFilter] = useState<
    "all" | "high" | "medium" | "low"
  >("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchSavedScans = async () => {
    try {
      const res = await fetch("/api/resumes");
      if (res.ok) {
        const data = await res.json();
        setSavedScans(data.resumes || []);
      }
    } catch (err) {
      console.error("Failed to load saved scans:", err);
    }
  };

  useEffect(() => {
    fetchSavedScans();
  }, [user]);

  const processFile = (file: File) => {
    if (!file) return;

    setUploadedFile(file);
    setFileName(file.name);
    setFileSizeStr((file.size / 1024).toFixed(1) + " KB");
    setError(null);
    setHasSavedCurrent(false);

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");
    const mime = isPdf ? "application/pdf" : file.type || "text/plain";
    setFileMimeType(mime);

    // Read as Data URL for fallback transmission
    const base64Reader = new FileReader();
    base64Reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setFileBase64(dataUrl);
      }
    };
    base64Reader.readAsDataURL(file);

    // For plain text files, read text
    if (
      !isPdf &&
      (file.type.startsWith("text/") ||
        file.name.endsWith(".txt") ||
        file.name.endsWith(".md") ||
        file.name.endsWith(".rtf"))
    ) {
      const textReader = new FileReader();
      textReader.onload = (e) => {
        const content = e.target?.result as string;
        setResumeText(content || "");
      };
      textReader.readAsText(file);
    } else {
      // For PDF / other binary formats, extract readable text snippets as preview fallback
      const textReader = new FileReader();
      textReader.onload = (e) => {
        const raw = e.target?.result as string;
        if (raw) {
          const asciiMatches = raw.match(/[a-zA-Z0-9\s.,;:()\-/@%]{4,}/g);
          if (asciiMatches && asciiMatches.length > 10) {
            setResumeText(asciiMatches.join(" ").slice(0, 8000));
          } else {
            setResumeText(`[Document File: ${file.name}]`);
          }
        }
      };
      textReader.readAsText(file);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
    // Reset value so user can re-upload same file if desired
    if (e.target) {
      e.target.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const loadSample = (type: "engineer" | "fintech") => {
    const sample =
      type === "engineer" ? SAMPLE_ENGINEER_RESUME : SAMPLE_FINTECH_RESUME;
    setResumeText(sample);
    setUploadedFile(null);
    setFileBase64(null);
    setFileMimeType("text/plain");
    setFileSizeStr("2.4 KB");
    setFileName(
      type === "engineer"
        ? "sample_software_engineer_resume.txt"
        : "sample_fintech_analyst_resume.txt",
    );
    setTargetRole(
      type === "engineer"
        ? "Senior Full-Stack Software Engineer"
        : "Senior Financial Analyst",
    );
  };

  const saveCurrentScan = async (overrideResult?: ResumeAnalysisResult) => {
    const toSave = overrideResult || result;
    if (!toSave) return;
    setIsSavingScan(true);
    try {
      const res = await fetch("/api/resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: fileName || "Resume.pdf",
          targetRole: targetRole || undefined,
          atsScore: toSave.atsScore,
          tier: toSave.tier,
          summary: toSave.summary,
          analysis: toSave,
        }),
      });
      if (res.ok) {
        setHasSavedCurrent(true);
        fetchSavedScans();
      }
    } catch (err) {
      console.error("Save scan failed:", err);
    } finally {
      setIsSavingScan(false);
    }
  };

  const deleteSavedScan = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch(`/api/resumes?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setSavedScans((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error("Delete scan failed:", err);
    }
  };

  const loadSavedScan = (saved: any) => {
    setResult(saved.analysis);
    setFileName(saved.fileName);
    setTargetRole(saved.targetRole || "");
    setHasSavedCurrent(true);
    setShowSavedModal(false);
  };

  const runAnalysis = async () => {
    if (!resumeText.trim() && !uploadedFile && !fileBase64) {
      setError("Please upload a resume file or paste resume text first.");
      return;
    }

    setError(null);
    setIsAnalyzing(true);
    setAnalysisStep(1);

    // Simulate animated step progression while API executes
    const stepInterval = setInterval(() => {
      setAnalysisStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 900);

    try {
      // Use FormData for standard full-stack binary upload
      const formData = new FormData();
      if (uploadedFile) {
        formData.append("file", uploadedFile);
      }
      if (resumeText.trim()) {
        formData.append("resumeText", resumeText.trim());
      }
      if (fileBase64) {
        formData.append("fileBase64", fileBase64);
        formData.append("fileMimeType", fileMimeType || "application/pdf");
      }
      if (fileName) {
        formData.append("fileName", fileName);
      }
      if (targetRole.trim()) {
        formData.append("targetRole", targetRole.trim());
      }
      if (jobDescription.trim()) {
        formData.append("jobDescription", jobDescription.trim());
      }

      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errJson = await response
          .json()
          .catch(() => ({ error: "Analysis failed" }));
        throw new Error(
          errJson.error ||
            "Analysis failed. Please check your resume and try again.",
        );
      }

      const data: ResumeAnalysisResult = await response.json();
      setResult(data);
      // Automatically persist scan to backend database
      saveCurrentScan(data);
    } catch (err: unknown) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Failed to analyze resume.",
      );
    } finally {
      clearInterval(stepInterval);
      setIsAnalyzing(false);
    }
  };

  const handleCopyRewrite = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    setResult(null);
    setResumeText("");
    setFileName(null);
    setUploadedFile(null);
    setFileBase64(null);
    setFileMimeType(null);
    setFileSizeStr(null);
    setError(null);
    setHasSavedCurrent(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const filteredFlaws =
    result?.flaws.filter((f) =>
      flawFilter === "all" ? true : f.severity === flawFilter,
    ) || [];

  return (
    <section
      id="analyzer"
      className="py-24 sm:py-32 border-t border-[#40351F]/10 bg-[#FFF0C4]/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Centered Section Header */}
        {!result && (
          <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
            <h2 className="text-[3rem] sm:text-[4rem] font-serif text-[#40351F] tracking-tight leading-[1.1] mb-6">
              Ready for your next role?
            </h2>
            <p className="text-[18px] text-[#40351F]/70 font-normal leading-relaxed">
              Paste your resume below or upload a document to get an instant
              AI-powered ATS analysis.
            </p>
            {isAuthenticated && user && (
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-[16px] bg-white border border-[#40351F]/10 text-[13px] font-medium text-[#40351F]/70 shadow-sm">
                <span className="size-2 rounded-full bg-[#087D9D] animate-pulse" />
                <span>
                  Analyzing as <strong>{user.name}</strong> ({user.role})
                </span>
              </div>
            )}
          </div>
        )}

        {!result ? (
          <div className="w-full max-w-4xl mx-auto">
            {/* Unified Smart Input Block */}
            <div className="rounded-[40px] bg-white border border-[#40351F]/10 shadow-[0_20px_60px_-15px_rgba(64,53,31,0.1)] flex flex-col overflow-hidden relative">
              {/* Unified Smart Input Block Content */}
              <div className="relative">
                <textarea
                  rows={10}
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your resume text here..."
                  className="w-full bg-transparent border-none p-10 sm:p-14 text-lg sm:text-2xl font-serif resize-none focus:ring-0 placeholder:text-[#40351F]/30 text-[#40351F] leading-relaxed outline-none"
                />

                {/* Floating Quick Actions (Top Right) */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  {savedScans.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowSavedModal(true)}
                      className="px-4 py-2 rounded-full bg-[#FFF0C4] text-[#40351F] hover:bg-[#FFF0C4]/80 text-[13px] font-bold transition flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      <History className="size-4 text-[#D98A12]" />
                      Saved Scans
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => loadSample("engineer")}
                    className="hidden sm:block px-4 py-2 rounded-full bg-[#40351F]/5 text-[#40351F]/60 hover:text-[#40351F] hover:bg-[#40351F]/10 text-[13px] font-bold transition cursor-pointer"
                  >
                    Load Sample
                  </button>
                </div>

                {/* Character Count */}
                <div className="absolute bottom-6 right-6 text-xs text-[#40351F]/30 font-medium">
                  {resumeText.length} characters
                </div>
              </div>

              {/* Hidden Input */}
              <input
                id="resume-file-input"
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.txt,.md,application/pdf,text/plain"
                onChange={handleFileUpload}
                className="hidden"
                tabIndex={-1}
                aria-hidden="true"
              />

              {/* Optional Target Job Settings Accordion */}
              <div className="px-10 sm:px-14 pb-6">
                <button
                  type="button"
                  onClick={() => setShowJobDetails(!showJobDetails)}
                  className="flex items-center gap-2 text-[13px] font-bold text-[#40351F]/60 hover:text-[#087D9D] transition cursor-pointer"
                >
                  <ChevronRight
                    className={`size-4 transition-transform ${
                      showJobDetails ? "rotate-90" : ""
                    }`}
                  />
                  <span>Target Role Settings (Optional for precision)</span>
                </button>

                {showJobDetails && (
                  <div className="mt-4 space-y-4 pt-4 border-t border-[#40351F]/10 animate-in fade-in slide-in-from-top-2">
                    <div>
                      <label className="block text-[13px] font-bold text-[#40351F] mb-1.5">
                        Target Job Title
                      </label>
                      <input
                        type="text"
                        value={targetRole}
                        onChange={(e) => setTargetRole(e.target.value)}
                        placeholder="e.g. Senior Full-Stack Engineer"
                        className="w-full px-4 py-3 rounded-2xl border border-[#40351F]/10 text-[14px] text-[#40351F] placeholder:text-[#40351F]/30 focus:outline-hidden focus:border-[#087D9D] focus:ring-1 focus:ring-[#087D9D] bg-[#F8F9F9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#40351F] mb-1.5">
                        Job Description Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste must-have skills from job post..."
                        className="w-full px-4 py-3 rounded-2xl border border-[#40351F]/10 text-[14px] text-[#40351F] placeholder:text-[#40351F]/30 focus:outline-hidden focus:border-[#087D9D] focus:ring-1 focus:ring-[#087D9D] bg-[#F8F9F9] resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Error Callout */}
              {error && (
                <div className="mx-10 sm:mx-14 mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-[13px] font-medium flex items-center gap-3">
                  <AlertTriangle className="size-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Action Bar (Bottom) */}
              <div className="bg-[#FFF0C4]/60 border-t border-[#40351F]/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-[24px] bg-white text-[#40351F] hover:bg-white/80 font-bold transition shadow-sm text-[14px] cursor-pointer"
                  >
                    <Upload className="size-5 text-[#DFA16C]" />
                    Upload File Instead
                  </button>

                  {fileName && (
                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/50 rounded-[16px] border border-[#40351F]/10 shadow-sm">
                      <FileText className="size-4 text-[#087D9D]" />
                      <span className="text-[13px] font-semibold text-[#40351F] max-w-[120px] truncate">
                        {fileName}
                      </span>
                      <button
                        onClick={handleReset}
                        className="text-[#40351F]/40 hover:text-rose-500 ml-1 transition cursor-pointer"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={runAnalysis}
                  disabled={
                    isAnalyzing ||
                    (!resumeText.trim() && !uploadedFile && !fileBase64)
                  }
                  className="w-full sm:w-auto flex-1 sm:flex-none py-4 px-8 rounded-[24px] text-[15px] font-bold bg-[#087D9D] text-white hover:bg-[#06657e] disabled:opacity-50 transition shadow-[0_10px_20px_rgba(8,125,157,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="size-5 animate-spin text-[#F3A33C]" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-5 text-[#F3A33C]" />
                      <span>Analyze Now</span>
                      <ArrowRight className="size-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Progress Steps during Analysis */}
              {isAnalyzing && (
                <div className="mt-6 p-4 rounded-2xl bg-[#111111]/[0.03] border border-black/[0.06] space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111111]">
                    <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>AI Parsing Pipeline Active</span>
                  </div>
                  {[
                    "Extracting document syntax and structural sections",
                    "Evaluating ATS parseability and keyword density",
                    "Auditing passive phrasing and missing quantitative metrics",
                    "Synthesizing high-impact rewrites and ATS score tier",
                  ].map((stepText, idx) => (
                    <div
                      key={stepText}
                      className={`flex items-center gap-2 text-xs ${
                        analysisStep > idx
                          ? "text-emerald-700 font-semibold"
                          : analysisStep === idx + 1
                            ? "text-[#111111] font-medium"
                            : "text-zinc-400"
                      }`}
                    >
                      <span className="flex size-4 items-center justify-center rounded-full bg-black/[0.06] text-[10px]">
                        {analysisStep > idx ? "✓" : idx + 1}
                      </span>
                      <span>{stepText}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* SHOWCASE OF RESULTS */
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Score Banner Card */}
            <div className="rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-[0_16px_50px_rgb(0,0,0,0.06)] relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Score Gauge */}
                <div className="flex items-center gap-6">
                  <div className="relative size-32 sm:size-36 flex items-center justify-center shrink-0">
                    <svg className="size-full -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        stroke="#f1f5f9"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        stroke={
                          result.atsScore >= 80
                            ? "#84cc16"
                            : result.atsScore >= 65
                              ? "#eab308"
                              : "#f43f5e"
                        }
                        strokeWidth="12"
                        strokeDasharray={326.7}
                        strokeDashoffset={
                          326.7 - (326.7 * result.atsScore) / 100
                        }
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-3xl sm:text-4xl font-black text-[#111111]">
                        {result.atsScore}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        ATS Score
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F9F9] border border-[#7DA154] text-xs font-bold text-[#111111] mb-2">
                      <Zap className="size-3 fill-current" />
                      <span>{result.tier} Tier</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                      {result.parsedData.candidateName || "Candidate Profile"}
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium mt-0.5">
                      Target Role:{" "}
                      <strong>{result.parsedData.detectedRole}</strong> •{" "}
                      {result.parsedData.yearsExperience}
                    </p>
                  </div>
                </div>

                {/* Summary & Actions */}
                <div className="lg:max-w-md flex-1">
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                    {result.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => saveCurrentScan()}
                      disabled={isSavingScan}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition cursor-pointer ${
                        hasSavedCurrent
                          ? "bg-[#F8F9F9] border-[#7DA154] text-[#111111]"
                          : "bg-white border-black/[0.1] text-[#111111] hover:bg-zinc-50"
                      }`}
                    >
                      <Bookmark
                        className={`size-3.5 ${hasSavedCurrent ? "fill-current text-emerald-700" : ""}`}
                      />
                      <span>
                        {hasSavedCurrent
                          ? "Saved to Profile"
                          : isSavingScan
                            ? "Saving..."
                            : "Save Scan"}
                      </span>
                    </button>
                    {savedScans.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setShowSavedModal(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-100 border border-zinc-200 text-zinc-800 hover:bg-zinc-200 transition cursor-pointer"
                      >
                        <History className="size-3.5 text-zinc-600" />
                        <span>History ({savedScans.length})</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-black/[0.1] text-[#111111] hover:bg-zinc-50 transition cursor-pointer"
                    >
                      <Printer className="size-3.5" />
                      <span>Print Report</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-[#2A2B2D] transition cursor-pointer"
                    >
                      <RefreshCw className="size-3.5" />
                      <span>Analyze Another Resume</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stat Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-100">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400 font-medium">
                    Critical Flaws
                  </span>
                  <span className="text-xl font-bold text-rose-600">
                    {result.flaws.length} detected
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400 font-medium">
                    Quantified Rewrites
                  </span>
                  <span className="text-xl font-bold text-[#111111]">
                    {result.improvements.length} ready
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400 font-medium">
                    Matched Keywords
                  </span>
                  <span className="text-xl font-bold text-emerald-700">
                    {result.atsKeywords.matched.length} verified
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400 font-medium">
                    Missing Keywords
                  </span>
                  <span className="text-xl font-bold text-amber-600">
                    {result.atsKeywords.missing.length} suggested
                  </span>
                </div>
              </div>
            </div>

            {/* SHOWCASE TABS */}
            <div className="rounded-3xl bg-white border border-black/[0.06] shadow-[0_12px_40px_rgb(0,0,0,0.04)] overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex items-center overflow-x-auto border-b border-black/[0.06] bg-black/[0.01] p-2 gap-1">
                {[
                  {
                    id: "flaws",
                    label: `Flaws & Issues (${result.flaws.length})`,
                    icon: AlertTriangle,
                  },
                  {
                    id: "improvements",
                    label: `Rewrites & Fixes (${result.improvements.length})`,
                    icon: Sparkles,
                  },
                  {
                    id: "keywords",
                    label: "ATS Keyword Matcher",
                    icon: Search,
                  },
                  {
                    id: "breakdown",
                    label: "Category Scoring",
                    icon: CheckCircle2,
                  },
                  {
                    id: "profile",
                    label: "Parsed Resume Data",
                    icon: User,
                  },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeResultTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() =>
                        setActiveResultTab(tab.id as typeof activeResultTab)
                      }
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#111111] text-white shadow-xs"
                          : "text-zinc-600 hover:text-black hover:bg-black/[0.03]"
                      }`}
                    >
                      <Icon
                        className={`size-3.5 ${isActive ? "text-[#7DA154]" : ""}`}
                      />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Area */}
              <div className="p-6 sm:p-8">
                {/* TAB 1: FLAWS */}
                {activeResultTab === "flaws" && (
                  <div className="space-y-6">
                    {/* Severity Filter */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-zinc-500">
                        Filter by severity:
                      </span>
                      {(["all", "high", "medium", "low"] as const).map(
                        (sev) => (
                          <button
                            key={sev}
                            type="button"
                            onClick={() => setFlawFilter(sev)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition ${
                              flawFilter === sev
                                ? "bg-[#111111] text-white"
                                : "bg-black/[0.04] text-zinc-600 hover:bg-black/[0.08]"
                            }`}
                          >
                            {sev}
                          </button>
                        ),
                      )}
                    </div>

                    {/* Flaws List */}
                    <div className="grid grid-cols-1 gap-4">
                      {filteredFlaws.map((flaw) => (
                        <div
                          key={flaw.id}
                          className="rounded-2xl border border-black/[0.06] p-5 bg-white shadow-2xs space-y-3"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                                  flaw.severity === "high"
                                    ? "bg-rose-100 text-rose-800 border border-rose-200"
                                    : flaw.severity === "medium"
                                      ? "bg-amber-100 text-amber-800 border border-amber-200"
                                      : "bg-blue-100 text-blue-800 border border-blue-200"
                                }`}
                              >
                                {flaw.severity} severity
                              </span>
                              <span className="text-xs font-mono text-zinc-400">
                                {flaw.location}
                              </span>
                            </div>
                          </div>

                          <h4 className="text-base font-bold text-[#111111]">
                            {flaw.title}
                          </h4>
                          <p className="text-xs text-zinc-600 leading-relaxed">
                            {flaw.issue}
                          </p>

                          <div className="rounded-xl bg-amber-500/[0.06] border border-amber-500/20 p-3 text-xs text-amber-900">
                            <strong>Why recruiters & ATS flag this: </strong>
                            {flaw.whyItMatters}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: IMPROVEMENTS & REWRITES */}
                {activeResultTab === "improvements" && (
                  <div className="space-y-6">
                    <div className="text-xs text-zinc-500">
                      These bullet points were transformed using the Google XYZ
                      formula and quantified action verbs to maximize interview
                      callbacks.
                    </div>

                    <div className="space-y-5">
                      {result.improvements.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-2xl border border-black/[0.06] p-5 sm:p-6 bg-white shadow-2xs space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-bold text-[#111111]">
                              {item.title}
                            </h4>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E5ECE0] text-[#111111]">
                              {item.impact} impact
                            </span>
                          </div>

                          <p className="text-xs text-zinc-600">
                            {item.recommendation}
                          </p>

                          {/* Before & After Comparison */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Before */}
                            <div className="rounded-xl bg-rose-50/70 border border-rose-200 p-4 space-y-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
                                ❌ Original Weak Excerpt
                              </span>
                              <p className="text-xs text-zinc-700 italic font-mono">
                                &ldquo;{item.beforeExcerpt}&rdquo;
                              </p>
                            </div>

                            {/* After */}
                            <div className="rounded-xl bg-[#F8F9F9] border border-[#7DA154] p-4 space-y-2 relative">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                                  ✅ High-Impact ATS Rewrite
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopyRewrite(
                                      item.id,
                                      item.afterExample,
                                    )
                                  }
                                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#111111] hover:text-emerald-800 transition cursor-pointer"
                                >
                                  {copiedId === item.id ? (
                                    <>
                                      <Check className="size-3 text-emerald-700" />
                                      <span className="text-emerald-700">
                                        Copied!
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="size-3" />
                                      <span>Copy</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <p className="text-xs font-semibold text-[#111111] leading-relaxed">
                                &ldquo;{item.afterExample}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: KEYWORDS */}
                {activeResultTab === "keywords" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-[#111111] mb-1">
                        ATS Keyword Density & Gap Analysis
                      </h4>
                      <p className="text-xs text-zinc-500">
                        {result.atsKeywords.recommendedAction}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Matched */}
                      <div className="rounded-2xl border border-black/[0.06] p-5 bg-white shadow-2xs space-y-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600" />
                          <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                            Verified Keywords (
                            {result.atsKeywords.matched.length})
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {result.atsKeywords.matched.map((kw) => (
                            <span
                              key={kw}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-[#F8F9F9] border border-[#7DA154] text-[#111111]"
                            >
                              {kw} ✓
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Missing */}
                      <div className="rounded-2xl border border-black/[0.06] p-5 bg-white shadow-2xs space-y-3">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="size-4 text-amber-500" />
                          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800">
                            Missing Role Keywords (
                            {result.atsKeywords.missing.length})
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {result.atsKeywords.missing.map((kw) => (
                            <span
                              key={kw}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 border border-dashed border-amber-300 text-amber-900"
                            >
                              + Add {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: CATEGORY BREAKDOWN */}
                {activeResultTab === "breakdown" && (
                  <div className="space-y-5">
                    {Object.entries(result.categoryScores).map(([key, cat]) => {
                      const labels: Record<string, string> = {
                        keywordMatch: "Keyword Match & Density",
                        formattingAndATS:
                          "Formatting & Structure Compatibility",
                        impactAndMetrics:
                          "Quantified Metrics & Business Impact",
                        experienceRelevance: "Work History & Career Narrative",
                        skillsDistribution:
                          "Technical & Core Competency Hierarchy",
                      };

                      return (
                        <div
                          key={key}
                          className="rounded-2xl border border-black/[0.06] p-5 bg-white shadow-2xs space-y-2.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-[#111111]">
                              {labels[key] || key}
                            </span>
                            <span className="text-sm font-extrabold text-[#111111]">
                              {cat.score} / 100
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="h-2.5 w-full rounded-full bg-zinc-100 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${
                                cat.score >= 80
                                  ? "bg-[#84cc16]"
                                  : cat.score >= 65
                                    ? "bg-amber-400"
                                    : "bg-rose-500"
                              }`}
                              style={{ width: `${cat.score}%` }}
                            />
                          </div>

                          <p className="text-xs text-zinc-500">
                            {cat.feedback}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* TAB 5: PARSED RESUME PROFILE */}
                {activeResultTab === "profile" && (
                  <div className="space-y-5">
                    <div className="rounded-2xl border border-black/[0.06] p-6 bg-white shadow-2xs space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <span className="text-[11px] text-zinc-400 font-medium block">
                            Candidate Name
                          </span>
                          <span className="text-sm font-bold text-[#111111]">
                            {result.parsedData.candidateName || "Not specified"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-zinc-400 font-medium block">
                            Contact Email
                          </span>
                          <span className="text-sm font-mono text-[#111111]">
                            {result.parsedData.email || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-zinc-400 font-medium block">
                            Phone Number
                          </span>
                          <span className="text-sm font-mono text-[#111111]">
                            {result.parsedData.phone || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-zinc-400 font-medium block">
                            Primary Profession
                          </span>
                          <span className="text-sm font-bold text-emerald-800">
                            {result.parsedData.detectedRole}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-zinc-400 font-medium block">
                            Experience Tenure
                          </span>
                          <span className="text-sm font-semibold text-[#111111]">
                            {result.parsedData.yearsExperience}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-100">
                        <span className="text-xs font-bold text-[#111111] block mb-2">
                          Extracted Core Proficiencies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {result.parsedData.topSkills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-lg text-xs font-medium bg-black/[0.04] text-[#111111]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* SAVED SCANS MODAL */}
        {showSavedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-black/[0.08] overflow-hidden">
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-xl bg-[#F8F9F9] text-[#111111] border border-[#7DA154] flex items-center justify-center">
                    <History className="size-4.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111111]">
                      Saved Resume Scans
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {savedScans.length} analysis reports stored in your
                      full-stack account
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSavedModal(false)}
                  className="size-8 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-3.5 flex-1">
                {savedScans.length === 0 ? (
                  <div className="py-12 text-center">
                    <FileText className="size-10 text-zinc-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-zinc-600">
                      No saved scans found
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      Upload or paste your resume and run an analysis to save it
                      to your account.
                    </p>
                  </div>
                ) : (
                  savedScans.map((scan) => (
                    <div
                      key={scan.id}
                      onClick={() => loadSavedScan(scan)}
                      className="group p-4 rounded-2xl border border-zinc-200 hover:border-[#111111] bg-zinc-50/50 hover:bg-white transition-all cursor-pointer shadow-2xs hover:shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#111111] truncate">
                            {scan.fileName}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F8F9F9] text-[#111111] border border-[#7DA154] font-semibold shrink-0">
                            {scan.tier}
                          </span>
                        </div>
                        {scan.targetRole && (
                          <p className="text-xs text-zinc-500 truncate">
                            Role: {scan.targetRole}
                          </p>
                        )}
                        <p className="text-[11px] text-zinc-400">
                          {new Date(scan.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                            },
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="flex flex-col items-center justify-center px-3 py-1.5 rounded-xl bg-white border border-zinc-200">
                          <span className="text-lg font-black text-[#111111]">
                            {scan.atsScore}
                          </span>
                          <span className="text-[9px] font-bold text-zinc-400 uppercase">
                            ATS Score
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => deleteSavedScan(scan.id, e)}
                          title="Delete saved scan"
                          className="size-8 rounded-lg hover:bg-rose-50 text-zinc-400 hover:text-rose-600 flex items-center justify-center transition cursor-pointer"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50/50 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowSavedModal(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
