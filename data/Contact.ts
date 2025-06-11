namespace Contact {
  export const PHONE_NUMBER = {
    id: "phone-number",
    label: "(925) 830-8809",
    href: "tel:+19258308809",
    icon: "phone",
  };

  export const EMAIL = {
    id: "email",
    label: "smile@gw2dental.com",
    href: "mailto:smile@gw2dental.com",
    icon: "envelope",
  };

  export const ADDRESS = {
    id: "address",
    label: ["12677 Alcosta Blvd Suite 415", "San Ramon, CA 94583"],
    href: "https://maps.app.goo.gl/sAXRdg8n8an7H2Hy9",
    icon: "location-pin",
  };

  export const HOURS = {
    id: "hours",
    label: [
      ["Mon. - Thurs.", "9am - 6pm"],
      ["Fri.", "Appt. Only"],
      ["Sat. - Sun.", "Closed"],
    ],
    icon: "clock",
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
