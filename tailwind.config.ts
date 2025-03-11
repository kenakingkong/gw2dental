import Config from "@nuxtjs/tailwindcss";

export default <Partial<typeof Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#3F7286",
        secondary: "#6FB2C0",
      },
      fontFamily: {
        custom: ["Afacad"],
      },
    },
  },
};
