import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const exampleTable = pgTable("example", {
  id: uuid("id").primaryKey().defaultRandom(),
  message: varchar("message", { length: 256 }).notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});
