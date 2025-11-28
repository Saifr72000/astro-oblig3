// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Build optimizations for CO2 reduction
  build: {
    inlineStylesheets: "auto",
  },
  // Enable compression
  compressHTML: true,
});
