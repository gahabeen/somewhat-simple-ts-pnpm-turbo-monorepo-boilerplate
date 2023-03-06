import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ['src/**/*.ts'],
  format: ["cjs", 'esm', 'iife'],
  clean: true,
  sourcemaps: true,
  splitting: false,
  dts: true,
  ...options,
}));