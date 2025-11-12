import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
   // Production is a user site (DriraRayen.github.io) so use root base
   // Use "/" for both dev and production so asset URLs point to the repo root
   base: "/",
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
