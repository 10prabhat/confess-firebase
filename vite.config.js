import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  resolve: {
    mainFields: [],
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
