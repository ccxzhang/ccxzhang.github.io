import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "blog.html"),
        did: resolve(__dirname, "blog/CausalInference/DiD.html"),
        rdd: resolve(__dirname, "blog/CausalInference/RDDs.html"),
        selenium: resolve(__dirname, "blog/selenium_slides.html"),
        replication: resolve(__dirname, "blog/replication/index.html"),
        geospatial: resolve(__dirname, "blog/geospatial/index.html"),
        mapExamples: resolve(__dirname, "blog/map_examples/index.html"),
        notFound: resolve(__dirname, "404.html")
      }
    }
  }
});
