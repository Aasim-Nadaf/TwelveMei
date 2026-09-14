import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgres://dummy_user:dummy_password@ep-dummy-endpoint.us-east-2.aws.neon.tech/neondb?sslmode=require",
  }
});
