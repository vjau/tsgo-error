import { fooRouter } from "./fooRouter.js";
import { router } from "./trpc.js";

export const appRouter = router({
  foo: fooRouter,
});
export type AppRouter = typeof appRouter;
