import Dentists from "./Dentists";

namespace Services {
  export const GENERAL_DENTISTRY = {
    id: "general-dentistry",
    title: "General Dentistry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales dapibus erat eget vestibulum. Maecenas ut porttitor arcu. Etiam dapibus eros quis eros vestibulum mollis. Nam lobortis placerat elit, quis semper erat facilisis aliquam. Phasellus vitae magna id magna pulvinar porta. Sed pulvinar porta eleifend. Mauris posuere massa a tempor gravida.",
    image: "/svgs/general-dentistry.svg?inline",
    callout: null,
  };

  export const INVISALIGN = {
    id: "invisalign",
    title: "Invisalign",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales dapibus erat eget vestibulum. Maecenas ut porttitor arcu. Etiam dapibus eros quis eros vestibulum mollis. Nam lobortis placerat elit, quis semper erat facilisis aliquam. Phasellus vitae magna id magna pulvinar porta. Sed pulvinar porta eleifend. Mauris posuere massa a tempor gravida.",
    image: "/svgs/general-dentistry.svg?inline",
    callout: {
      body: "Dr. Grace Wu has been a premier provider of Invisalign since 2000.",
      image: Dentists.WU.imageUrls.thumbnail,
      align: "right",
    },
  };

  export const DENTAL_IMPLANTS = {
    id: "dental-implants",
    title: "Dental Implants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales dapibus erat eget vestibulum. Maecenas ut porttitor arcu. Etiam dapibus eros quis eros vestibulum mollis. Nam lobortis placerat elit, quis semper erat facilisis aliquam. Phasellus vitae magna id magna pulvinar porta. Sed pulvinar porta eleifend. Mauris posuere massa a tempor gravida.",
    image: "/svgs/implant.svg?inline",
    callout: null,
  };

  export const PROSTHODONTICS = {
    id: "prosthodontics",
    title: "Prosthodontics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales dapibus erat eget vestibulum. Maecenas ut porttitor arcu. Etiam dapibus eros quis eros vestibulum mollis. Nam lobortis placerat elit, quis semper erat facilisis aliquam. Phasellus vitae magna id magna pulvinar porta. Sed pulvinar porta eleifend. Mauris posuere massa a tempor gravida.",
    image: "/svgs/prosthodontic.svg?inline",
    callout: {
      body: "Dr. George Wong specialized in Maxillofacial Prosthodontics at the Memorial Sloan Kettering Cancer Center in NYC. He worked directly with cancer patients and patients suffering from trauma losses in the head and neck region.",
      image: Dentists.WONG.imageUrls.thumbnail,
      align: "right",
    },
  };

  export const MAX_PROSTHODONTICS = {
    id: "maxillofacial-prosthodontics",
    title: "Maxillofacial Prosthodontics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales dapibus erat eget vestibulum. Maecenas ut porttitor arcu. Etiam dapibus eros quis eros vestibulum mollis. Nam lobortis placerat elit, quis semper erat facilisis aliquam. Phasellus vitae magna id magna pulvinar porta. Sed pulvinar porta eleifend. Mauris posuere massa a tempor gravida.",
    image: "",
    callout: null,
  };

  export const COSMETIC_RECONSTRUCTION = {
    id: "cosmetic-reconstruction",
    title: "Cosmetic Reconstruction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales dapibus erat eget vestibulum. Maecenas ut porttitor arcu. Etiam dapibus eros quis eros vestibulum mollis. Nam lobortis placerat elit, quis semper erat facilisis aliquam. Phasellus vitae magna id magna pulvinar porta. Sed pulvinar porta eleifend. Mauris posuere massa a tempor gravida.",
    image: "/svgs/reconstruction.svg?inline",
    callout: {
      body: "Not all cosmetic treatments are covered by dental insurance. Bleaching and some limited restorations can achieve similar results.",
      image: "",
      align: "bottom",
    },
  };

  export const GENERAL_DENTISTRY_TREATMENTS = [
    "Cleanings",
    "Crowns",
    "Fillings",
  ];
}

export default Services;
