import svgLoader from "vite-svg-loader";
import { visualizer } from "rollup-plugin-visualizer";
import Meta from "./data/Meta";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: Meta.title,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "title", content: Meta.title },
        { name: "description", content: Meta.description },
        { name: "keywords", content: Meta.keywords },

        // Open Graph
        { property: "og:title", content: Meta.cardTitle },
        { property: "og:description", content: Meta.cartDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: Meta.url },
        { property: "og:image", content: Meta.image },
        { property: "og:site_name", content: Meta.sitename },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: Meta.cardTitle },
        { name: "twitter:description", content: Meta.cartDescription },
        { name: "twitter:image", content: Meta.image },
      ],
      link: [
        { rel: "canonical", href: Meta.url },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preload",
          href: "/fonts/Afacad-Regular.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Afacad-Italic.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Afacad-Medium.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Afacad-SemiBold.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Afacad-Bold.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
      ],
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
      }),
    ],
  },

  css: ["~/assets/css/main.css"],
});
