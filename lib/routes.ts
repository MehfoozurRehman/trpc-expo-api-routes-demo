import actions from "@/actions";
import queries from "@/queries";
import { router } from "./trpc";

export const rootRouter = router({ ...queries, ...actions });

export type RootRouter = typeof rootRouter;
