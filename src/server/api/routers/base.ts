import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db"; // Adjust the import path as necessary
import { bases } from "~/server/db/schema"; // Adjust the import path as necessary
import { eq } from 'drizzle-orm';


export const baseRouter = createTRPCRouter({
  createBase: publicProcedure
    .input(
      z.object({
        workspaceID: z.number(),
        baseName: z.string().default("untitled base"),
      })
    )
    .mutation(async ({ input }) => {
      const base = await db.insert(bases).values({
        workspaceID: input.workspaceID,
        baseName: input.baseName,
      }).returning();
      return base;
    }),
    getBasesByWorkspaceID: publicProcedure
    .input(z.object({ workspaceID: z.number() }))
    .query(async ({ input }) => {
      const workspaceBases = await db.select().from(bases).where(eq(bases.workspaceID, input.workspaceID));
      return workspaceBases;
    }),
});