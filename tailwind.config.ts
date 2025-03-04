import Config from "@nuxtjs/tailwindcss";

export default <Partial<typeof Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#02738A",
        secondary: "#D4E6EA",
      },
      fontFamily: {
        custom: ["Afacad"],
      },
    },
  },
};
