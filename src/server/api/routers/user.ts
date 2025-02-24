// import { z } from "zod";
// import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// import { db } from "~/server/db"; // Adjust the import path as necessary
// import { users } from "~/server/db/schema"; // Adjust the import path as necessary

// export const userRouter = createTRPCRouter({
//   createUser: publicProcedure
//     .input(
//       z.object({
//         name: z.string(),
//         email: z.string().email(),
//       })
//     )
//     .mutation(async ({ input }) => {
//       const user = await db.insert(users).values({
//         name: input.name,
//         email: input.email,
//       }).returning();
//       return user;
//     }),
// });