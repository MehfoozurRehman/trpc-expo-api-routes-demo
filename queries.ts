import { procedure } from "@/lib/trpc";
import { z } from "zod";

const queries = {
  hello: procedure.input(z.object({ id: z.string() })).query(async () => {
    console.log("hello");
    return "hello";
  }),
};

export default queries;
