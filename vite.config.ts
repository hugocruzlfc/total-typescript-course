import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["src/**/*.{ts,tsx}"],
    setupFiles: [path.resolve(__dirname, "scripts/setup.ts")],
    passWithNoTests: true,
    environment: "jsdom",
  },
});
