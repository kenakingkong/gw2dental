import svgLoader from "vite-svg-loader";
import { visualizer } from "rollup-plugin-visualizer";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:
        "GW2 Dental | Family Dentist, Maxillofacial Prosthodontics Treatment and Dental Implants in San Ramon, CA",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  vite: {
    plugins: [
      svgLoader(),
      visualizer({
        template: "flamegraph",
        // include: { file: "/.output/public/_nuxt/*" }, // only view client output, ignore server output
      }),
    ],
  },

  css: ["~/assets/css/main.css"],
});
