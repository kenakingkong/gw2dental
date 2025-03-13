namespace Navigation {
  const LINKS = {
    home: {
      id: "home",
      label: "Home",
      to: "/",
    },
    about: {
      id: "about",
      label: "About",
      to: "/about",
    },
    services: {
      id: "services",
      label: "Services",
      to: "/services",
    },
    patientResources: {
      id: "patient-resources",
      label: "New Patients",
      to: "/patient-resources",
    },
    payBill: {
      id: "pay-bill",
      label: "Pay your Bill",
      to: "https://makenakong.com",
    },
    contact: {
      id: "contact",
      label: "Contact",
      to: "/contact",
    },
    covidPolicy: {
      id: "covid-policy",
      label: "COVID-19 Policy",
      to: "/covid",
    },
  };

  export const HEADER_LINKS = [
    LINKS.about,
    LINKS.services,
    LINKS.patientResources,
    LINKS.payBill,
  ];

  export const MOBILE_LINKS = [LINKS.home, ...HEADER_LINKS];

  export const FOOTER_LINKS = [
    LINKS.home,
    LINKS.about,
    LINKS.services,
    LINKS.patientResources,
    LINKS.contact,
    LINKS.payBill,
    // LINKS.covidPolicy,
  ];
}

export default Navigation;
