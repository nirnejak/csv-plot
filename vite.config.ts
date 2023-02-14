import { fileURLToPath, URL } from "url"

import react from "@vitejs/plugin-react-swc"
import { defineConfig, splitVendorChunkPlugin, loadEnv } from "vite"
import svgrPlugin from "vite-plugin-svgr"
import viteTsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default ({ mode }): any => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") }

  return defineConfig({
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // Object.assign(process.env, loadEnv(mode, process.cwd()));
    // now you can access config with process.env.{configName}
    build: {
      target: "esnext",
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgrPlugin(),
      splitVendorChunkPlugin(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
    },
  })
}
