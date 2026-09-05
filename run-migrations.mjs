// One-off migration runner: applies all SQL files in migrations/ to the
// database pointed to by DATABASE_URL in .env
import { neon } from "@neondatabase/serverless";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const env = readFileSync(".env", "utf8");
const databaseUrl = env.match(/DATABASE_URL=["']?([^"'\r\n]+)["']?/)?.[1];
if (!databaseUrl) {
  console.error("DATABASE_URL not found in .env");
  process.exit(1);
}

const sql = neon(databaseUrl);
const files = readdirSync("migrations").filter((f) => f.endsWith(".sql")).sort();

for (const file of files) {
  console.log(`Applying ${file}...`);
  const statements = readFileSync(join("migrations", file), "utf8")
    .split(/;\s*$/m)
    .map((s) => s.trim())
    .filter(Boolean);
  for (const statement of statements) {
    await sql.query(statement);
  }
  console.log(`  done`);
}

// Verify tables exist
const tables = await sql`
  select table_name from information_schema.tables
  where table_schema = 'public' order by table_name
`;
console.log("Tables in database:", tables.map((t) => t.table_name).join(", "));
