import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    port: 5173,

    proxy: {
      "/predict": {
        target: "http://52.78.106.64:8000",
        changeOrigin: true,
      },
    },
  },
});