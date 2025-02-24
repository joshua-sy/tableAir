import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db"; // Adjust the import path as necessary
import { workspaces } from "~/server/db/schema"; // Adjust the import path as necessary
import { eq } from 'drizzle-orm';

export const workspaceRouter = createTRPCRouter({
  createWorkSpace: publicProcedure
    .input(
      z.object({
        userID: z.string(),
        workspaceName: z.string().default("Workspace"),
      })
    )
    .mutation(async ({ input }) => {
      const workspace = await db.insert(workspaces).values({
        userID: input.userID,
        workspaceName: input.workspaceName,
      }).returning();
      return workspace;
    }),
  getWorkspacesByUserID: publicProcedure
    .input(z.object({ userID: z.string() }))
    .query(async ({ input }) => {
      const userWorkspaces = await db.select().from(workspaces).where(eq(workspaces.userID, input.userID));
      return userWorkspaces;
    }),
});