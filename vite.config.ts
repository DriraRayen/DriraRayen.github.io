import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
   // Use "/" for dev, "/lands-between-portfolio/" for production
   base: command === "serve" ? "/" : "/lands-between-portfolio/",
   server: {
      host: "::",
      port: 8080,
   },
   plugins: [react()],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src"),
      },
   },
}));
