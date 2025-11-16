import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repoName = "my-portfolio"; // <-- lowercase!

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${repoName}/` : "/",
  server: { host: "::", port: 8080 },
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
