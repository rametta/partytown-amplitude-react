import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { partytownVite } from "@builder.io/partytown/utils";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: path.resolve(__dirname, "dist", "assets", "~partytown"),
      debug: process.env.NODE_ENV !== "production",
    }),
  ],
});
