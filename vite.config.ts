import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: '/fashion-history-timeline/',
  plugins: [
    remix({
      basename: '/fashion-history-timeline/',
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/images/assets',
          dest: ''
        }
      ]
    })
  ],
  build: {
    outDir: 'build/client',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
