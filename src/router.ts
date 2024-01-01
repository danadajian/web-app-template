import { initTRPC } from "@trpc/server";

import { someQuery, someQueryInput } from "./backend";

const t = initTRPC.create();

export const appRouter = t.router({
  someQuery: t.procedure
    .input(someQueryInput.assert)
    .query(({ input }) => someQuery(input)),
});

export type AppRouter = typeof appRouter;
