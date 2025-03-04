namespace Navigation {
  const LINKS = {
    home: {
      id: "home",
      label: "Home",
      to: "/",
    },
    about: {
      id: "about",
      label: "About Us",
      to: "/about",
    },
    services: {
      id: "services",
      label: "Our Services",
      to: "/services",
    },
    patientResources: {
      id: "patient-resources",
      label: "Patient Resources",
      to: "/patient-resources",
    },
    payBill: {
      id: "pay-bill",
      label: "Pay your Bill",
      to: "https://makenakong.com",
    },
    contact: {
      id: "contact",
      label: "Contact Us",
      to: "/contact",
    },
  };

  export const PHONE_NUMBER = {
    id: "phone-number",
    label: "(925) 803-8809",
    href: "tel:+19258038809",
  };

  export const SOCIALS = {
    YELP: {
      id: "yelp",
      label: "Yelp",
      icon: "",
      to: "https://www.yelp.com/biz/george-wong-dds-and-grace-wu-dds-san-ramon",
    },
    GOOGLE: {
      id: "google",
      label: "Google",
      icon: "",
      to: "",
    },
  };

  export const HEADER_LINKS = [
    LINKS.about,
    LINKS.services,
    LINKS.patientResources,
    LINKS.payBill,
  ];

  export const FOOTER_LINKS = [
    LINKS.home,
    LINKS.about,
    LINKS.services,
    LINKS.patientResources,
    LINKS.payBill,
  ];

  export const MOBILE_LINKS = FOOTER_LINKS;
}

export default Navigation;
