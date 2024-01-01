import { db } from "../src/db";
import { exampleTable } from "../src/schema";

await db.delete(exampleTable);
process.exit(0);
