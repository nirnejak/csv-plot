import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgrPlugin from "vite-plugin-svgr"
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    svgrPlugin(),
    viteTsconfigPaths(),
  ],
})
