import { db } from "@/db";
import { users, sessions, resumes } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import bcrypt from "bcryptjs";

// Database-backed server-side store for authentication and user resumes

export async function getUserByEmail(email: string) {
  const result = await db.select().from(users).where(eq(users.email, email.toLowerCase().trim())).limit(1);
  if (!result || result.length === 0) return undefined;
  return result[0];
}

export async function getUserById(id: number) {
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0];
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

  const [newUser] = await db.insert(users).values({
    name: params.name.trim() || params.email.split("@")[0],
    email: emailKey,
    passwordHash,
    role: params.role || "Candidate",
    tier: "Pro",
    avatar: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 100)}?w=120&auto=format&fit=crop&q=80`,
  }).returning();

  return newUser;
}

export async function createSession(userId: number): Promise<string> {
  const token = "sess_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
  await db.insert(sessions).values({
    token,
    userId,
  });
  return token;
}

export async function getSessionUser(token: string) {
  if (!token) return null;
  const result = await db.select().from(sessions).where(eq(sessions.token, token)).limit(1);
  if (!result || result.length === 0) return null;
  const session = result[0];

  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  if (Date.now() - session.createdAt.getTime() > thirtyDays) {
    await db.delete(sessions).where(eq(sessions.token, token));
    return null;
  }

  return await getUserById(session.userId) || null;
}

export async function deleteSession(token: string) {
  if (token) {
    await db.delete(sessions).where(eq(sessions.token, token));
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
  }
) {
  const [newResume] = await db.insert(resumes).values({
    userId,
    fileName: resumeData.fileName || "Resume.pdf",
    targetRole: resumeData.targetRole,
    atsScore: resumeData.atsScore,
    tier: resumeData.tier,
    summary: resumeData.summary,
    analysis: resumeData.analysis,
  }).returning();
  
  return { ...newResume, id: newResume.id.toString() }; // format ID
}

export async function getUserResumes(userId: number) {
  const records = await db.select().from(resumes).where(eq(resumes.userId, userId)).orderBy(desc(resumes.createdAt));
  return records.map(r => ({ ...r, id: r.id.toString() }));
}

export async function deleteUserResume(userId: number, resumeId: number) {
  await db.delete(resumes).where(eq(resumes.id, resumeId));
  return true;
}
