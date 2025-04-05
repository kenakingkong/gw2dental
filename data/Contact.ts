namespace Contact {
  export const PHONE_NUMBER = {
    id: "phone-number",
    label: "(925) 803-8809",
    href: "tel:+19258038809",
    icon: "phone_enabled",
  };

  export const EMAIL = {
    id: "email",
    label: "smile@gw2dental.com",
    href: "mailto:smile@gw2dental.com",
    icon: "mail",
  };

  export const ADDRESS = {
    id: "address",
    label: [
      "2301 Camino Ramon, Suite 100",
      "Bishop Ranch 11",
      "San Ramon, CA 94583",
    ],
    href: "https://maps.app.goo.gl/sAXRdg8n8an7H2Hy9",
    icon: "location_on",
  };

  export const HOURS = {
    id: "hours",
    label: [
      ["Mon. - Thurs.", "9am - 6pm"],
      ["Fri.", "Appt. Only"],
      ["Sat. - Sun.", "Closed"],
    ],
    icon: "nest_clock_farsight_analog",
  };

  export const SOCIALS = {
    YELP: {
      id: "yelp",
      label: "Yelp",
      href: "https://www.yelp.com/biz/george-wong-dds-and-grace-wu-dds-san-ramon",
    },
    GOOGLE: {
      id: "google",
      label: "Google",
      href: "https://maps.app.goo.gl/sAXRdg8n8an7H2Hy9",
    },
  };

  export const DETAILS = [PHONE_NUMBER, EMAIL, HOURS, ADDRESS];
}

export default Contact;
