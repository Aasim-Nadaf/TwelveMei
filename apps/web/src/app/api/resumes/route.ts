import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  getSessionUser,
  saveResumeForUser,
  getUserResumes,
  deleteUserResume,
} from "@/lib/server-store";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("finovia_session")?.value;
    const user = token ? await getSessionUser(token) : null;

    if (!user) {
      return NextResponse.json({ resumes: [] });
    }

    const resumes = await getUserResumes(user.id);
    return NextResponse.json({ resumes });
  } catch (err: unknown) {
    console.error("Fetch resumes error:", err);
    return NextResponse.json({ resumes: [] });
  }
}

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("finovia_session")?.value;
    const user = token ? await getSessionUser(token) : null;

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const saved = await saveResumeForUser(user.id, {
      fileName: body.fileName || "Resume.pdf",
      targetRole: body.targetRole,
      atsScore: body.atsScore || 0,
      tier: body.tier || "Needs Optimization",
      summary: body.summary || "",
      analysis: body.analysis || {},
    });

    return NextResponse.json({ success: true, resume: saved });
  } catch (err: unknown) {
    console.error("Save resume error:", err);
    return NextResponse.json(
      { error: "Failed to save resume analysis." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("finovia_session")?.value;
    const user = token ? await getSessionUser(token) : null;

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const resumeId = searchParams.get("id");

    if (!resumeId) {
      return NextResponse.json({ error: "Missing resume id" }, { status: 400 });
    }

    const deleted = await deleteUserResume(user.id, parseInt(resumeId, 10));
    return NextResponse.json({ success: deleted });
  } catch (err: unknown) {
    console.error("Delete resume error:", err);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
