import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import copy from "rollup-plugin-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copy({
      targets: [
        { src: "public/_redirects", dest: "dist" }  // ✅ Copies _redirects to the build output
      ],
      hook: "writeBundle",
    }),
  ],
});
