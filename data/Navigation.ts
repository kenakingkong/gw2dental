namespace Navigation {
  const LINKS = {
    home: {
      id: "home",
      label: "Home",
      to: "/",
      external: false,
    },
    about: {
      id: "about",
      label: "About Us",
      to: "/about-us",
      external: false,
    },
    services: {
      id: "services",
      label: "Our Services",
      to: "/services",
      external: false,
    },
    patientResources: {
      id: "patient-resources",
      label: "New Patients",
      to: "/patient-resources",
      external: false,
    },
    referralForm: {
      id: "referral-form",
      label: "Referral Form",
      to: "/george_wong_dds_doctor_referral_form.pdf",
      external: true,
    },
    payBill: {
      id: "pay-bill",
      label: "Pay your Bill",
      to: "https://georgefwongdds.securepayments.cardpointe.com",
      external: true,
    },
    technologies: {
      id: "technologies",
      label: "Technologies",
      to: "/technologies",
      external: false,
    },
    contact: {
      id: "contact",
      label: "Contact Us",
      to: "/contact",
      external: false,
    },
    covidPolicy: {
      id: "covid-policy",
      label: "COVID-19 Policy",
      to: "/covid",
      external: false,
    },
  };

  export const HEADER_LINKS = [
    LINKS.about,
    LINKS.services,
    LINKS.patientResources,
    LINKS.referralForm,
    LINKS.payBill,
  ];

  export const MOBILE_LINKS = [LINKS.home, ...HEADER_LINKS];

  export const FOOTER_LINKS = [
    LINKS.home,
    LINKS.about,
    LINKS.services,
    LINKS.patientResources,
    LINKS.referralForm,
    // LINKS.contact,
    LINKS.payBill,
    // LINKS.covidPolicy,
  ];
}

export default Navigation;
