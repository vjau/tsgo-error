import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { FastifyTRPCPluginOptions } from "@trpc/server/adapters/fastify";
import { AppRouter, appRouter } from "./router/index.js";

const server = fastify({
  logger: true,
});

server.register(fastifyTRPCPlugin, {
  prefix: "/fooApi",

  trpcOptions: {
    router: appRouter,
  } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    server.log.info(`Server listening on http://localhost:3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
