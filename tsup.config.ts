import { defineConfig } from 'tsup'

export default defineConfig({
  outDir: "libs",
  entry: ['addon/index.ts', "addon/addon.tsx", "addon/preview.tsx"],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["esm"],
})