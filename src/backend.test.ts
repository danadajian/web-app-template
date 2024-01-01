import { afterAll, afterEach, beforeAll, describe, expect, it } from "bun:test";

import { someQuery } from "./backend";
import { db } from "./db";
import { exampleTable } from "./schema";

async function clearAllTables() {
  await db.delete(exampleTable);
}

describe("backend tests", () => {
  beforeAll(async () => {
    Bun.spawnSync(["bun", "drizzle"]);
    await clearAllTables();
  });

  afterEach(async () => {
    await clearAllTables();
  });

  afterAll(() => {
    process.exit(0);
  });

  it("test", async () => {
    await someQuery({
      message: "Hello world!",
    });
    const rows = await db.query.exampleTable.findMany();
    expect(rows.length).toBe(1);
    expect(rows[0]?.message).toBe("Hello world!");
  });
});
