import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist", // папка для сборки
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Имя файла для входных точек
        entryFileNames: "[name].js",
        // Имя файла для чанков
        chunkFileNames: "[name].js",
        // Имя файла для ассетов (CSS, изображения и т.д.)
        assetFileNames: "[name][extname]",
      },
    },
  },
});
