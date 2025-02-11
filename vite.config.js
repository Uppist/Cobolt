/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Cobolt/",
  server: {
    historyApiFallback: true,
    open: true,
  },

  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  preview: {
    port: 4173,
    strictPort: true,
    historyApiFallback: true,
  },
});
