// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "index.ts",
      name: "SuadaComponents",
      fileName: (format) => `suada-components.${format}.js`,
    },
    rollupOptions: {
      // Ensure to externalize dependencies that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
