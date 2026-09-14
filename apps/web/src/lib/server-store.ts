import { prisma } from "@repo/db";
import bcrypt from "bcryptjs";

// Database-backed server-side store for authentication and user resumes

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() },
  });
  return user || undefined;
}

export async function getUserById(id: number) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user || undefined;
}

export async function registerUser(params: {
  name: string;
  email: string;
  password?: string;
  role?: string;
}) {
  const emailKey = params.email.toLowerCase().trim();
  const existing = await getUserByEmail(emailKey);
  if (existing) {
    throw new Error("An account with this email address already exists.");
  }

  const passwordHash = await bcrypt.hash(params.password || "password123", 10);

  const newUser = await prisma.user.create({
    data: {
      name: params.name.trim() || params.email.split("@")[0],
      email: emailKey,
      passwordHash,
      role: params.role || "Candidate",
      tier: "Pro",
      avatar: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 100)}?w=120&auto=format&fit=crop&q=80`,
    },
  });

  return newUser;
}

export async function createSession(userId: number): Promise<string> {
  const token =
    "sess_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
  await prisma.session.create({
    data: {
      token,
      userId,
    },
  });
  return token;
}

export async function getSessionUser(token: string) {
  if (!token) return null;
  const session = await prisma.session.findUnique({
    where: { token },
  });
  if (!session) return null;

  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  if (Date.now() - session.createdAt.getTime() > thirtyDays) {
    await prisma.session.delete({
      where: { token },
    });
    return null;
  }

  return (await getUserById(session.userId)) || null;
}

export async function deleteSession(token: string) {
  if (token) {
    try {
      await prisma.session.delete({
        where: { token },
      });
    } catch {
      // Ignore if session already deleted or doesn't exist
    }
  }
}

export function sanitizeUser(user: any) {
  return {
    id: user.id.toString(), // string for client compatibility
    email: user.email,
    name: user.name,
    role: user.role,
    createdAt: user.createdAt,
  };
}

export async function saveResumeForUser(
  userId: number,
  resumeData: {
    fileName: string;
    targetRole?: string;
    atsScore: number;
    tier: string;
    summary: string;
    analysis: any;
  },
) {
  const newResume = await prisma.resume.create({
    data: {
      userId,
      fileName: resumeData.fileName || "Resume.pdf",
      targetRole: resumeData.targetRole,
      atsScore: resumeData.atsScore,
      tier: resumeData.tier,
      summary: resumeData.summary,
      analysis: resumeData.analysis,
    },
  });

  return { ...newResume, id: newResume.id.toString() }; // format ID
}

export async function getUserResumes(userId: number) {
  const records = await prisma.resume.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  return records.map((r) => ({ ...r, id: r.id.toString() }));
}

export async function deleteUserResume(userId: number, resumeId: number) {
  try {
    await prisma.resume.delete({
      where: { id: resumeId, userId },
    });
  } catch {
    // Ignore if not found
  }
  return true;
}
