
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./server/db/schema/expenses.ts",
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
