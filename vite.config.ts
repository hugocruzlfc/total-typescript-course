import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.{ts,tsx}"],
    setupFiles: [path.resolve(__dirname, "scripts/setup.ts")],
    passWithNoTests: true,
    environment: "jsdom",
  },
});
