import { TRPCError } from "@trpc/server";
import { type } from "arktype";

import { db } from "./db";
import { exampleTable } from "./schema";

export const someQueryInput = type({
  message: "string>0",
});

export async function someQuery({ message }: typeof someQueryInput.infer) {
  await db.insert(exampleTable).values({ message });
  const firstRow = await db.query.exampleTable.findFirst();
  if (!firstRow) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Something went wrong",
    });
  }
  return firstRow.message;
}
