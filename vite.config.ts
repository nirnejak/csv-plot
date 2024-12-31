import { fileURLToPath, URL } from "url"

import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import svgrPlugin from "vite-plugin-svgr"
import viteTsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), svgrPlugin(), viteTsconfigPaths()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
