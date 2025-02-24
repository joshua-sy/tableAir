import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db"; // Adjust the import path as necessary
import { tables } from "~/server/db/schema"; // Adjust the import path as necessary
import { sql } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

export const tableRouter = createTRPCRouter({
  createTable: publicProcedure
    .input(
      z.object({
        baseID: z.number(),
        tableName: z.string().default("Table"),
      })
    )
    .mutation(async ({ input }) => {
      const newTableId = uuidv4();
      const table = await db.insert(tables).values({
        id: newTableId,
        baseID: input.baseID,
        tableName: input.tableName,
      }).returning({id: tables.id});
      console.log(table);
      if (!table[0]) {
        throw new Error("Failed to create table");
      }
      // Use the returned ID to create a new table with the specified columns
      await db.execute(sql`
        CREATE TABLE ${sql.identifier(table[0].id)} (
          name TEXT,
          notes TEXT
        )
      `);
      return table;
    }),
});