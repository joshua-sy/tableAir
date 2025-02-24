import { postRouter } from "~/server/api/routers/post";
import { baseRouter } from "~/server/api/routers/base";
import { workspaceRouter } from "~/server/api/routers/workspace";
import { tableRouter } from "~/server/api/routers/table";

import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  base: baseRouter,
  workspace: workspaceRouter,
  table: tableRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
