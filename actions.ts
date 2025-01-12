import { procedure } from "@/lib/trpc";
import z from "zod";

const actions = {
  create: procedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      return input.name;
    }),
};

export default actions;
