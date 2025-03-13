namespace Contact {
  export const PHONE_NUMBER = {
    id: "phone-number",
    label: "(925) 803-8809",
    href: "tel:+19258038809",
    icon: "material-symbols:phone-enabled",
  };

  export const EMAIL = {
    id: "email",
    label: "smile@gw2dental.com",
    href: "mailto:smile@gw2dental.com",
    icon: "",
  };

  export const ADDRESS = {
    id: "address",
    label: [
      "2301 Camino Ramon, Suite 100",
      "Bishop Ranch 11",
      "San Ramon, CA 94583",
    ],
    href: "https://maps.app.goo.gl/sAXRdg8n8an7H2Hy9",
    icon: "",
  };

  export const HOURS = {
    id: "hours",
    label: [
      ["Mon. - Thurs.", "8am - 6pm"],
      ["Sat. - Sun.", "9am - 5pm"],
    ],
    icon: "",
  };

  export const SOCIALS = {
    YELP: {
      id: "yelp",
      label: "Yelp",
      to: "https://www.yelp.com/biz/george-wong-dds-and-grace-wu-dds-san-ramon",
      icon: "",
    },
    GOOGLE: {
      id: "google",
      label: "Google",
      to: "https://maps.app.goo.gl/sAXRdg8n8an7H2Hy9",
      icon: "",
    },
  };

  export const DETAILS = [PHONE_NUMBER, EMAIL, HOURS, ADDRESS];
}

export default Contact;
