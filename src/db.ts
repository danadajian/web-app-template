import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

export const pgClient = postgres(process.env.POSTGRES_URL, {
  max: 100,
  idle_timeout: 20,
  max_lifetime: 60 * 30,
});
export const db = drizzle(pgClient, { schema });
