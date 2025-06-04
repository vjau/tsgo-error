import { publicProcedure, router } from "./trpc.js";

export const fooRouter = router({
  getFoo: publicProcedure.query(() => {
    return "foo";
  }),
});
