import { createRequestHandler } from "@expo/server/adapter/vercel";
import { join } from "path";

export default createRequestHandler({
  build: join("./dist/server"),
});
