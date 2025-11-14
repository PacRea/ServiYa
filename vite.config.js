import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite acceso desde red local
    port: 3000, // o el puerto que uses
    proxy: {
      "/api": {
        target: "http://serviya.local",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});