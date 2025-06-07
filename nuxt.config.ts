// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "GW2 Dental | Family Dentist, Maxillofacial Prosthodontics Treatment and Dental Implants in San Ramon, CA",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
});
