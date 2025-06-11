import Dentists from "./Dentists";

namespace Services {
  export const GENERAL_DENTISTRY = {
    id: "general-dentistry",
    title: "General Dentistry",
    description:
      "We provide a conservative and comprehensive approach to whole patient care for you and your family. You schedule a routine exam and cleaning every 6 months.",
    icon: "general-dentistry",
    callout: null,
  };

  export const INVISALIGN = {
    id: "invisalign",
    title: "Invisalign®",
    description:
      "Dr. Wu will take a 3D scan of your smile and map out the custom treatment plan of your new one and set you up with a new set of Invisalign Aligners.",
    icon: "general-dentistry",
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
      "Our office utilizes the latest 3D technologies and strongest cosmetic materials to customize and restore your smile. We work with local oral surgeons and periodontists to provide comprehensive care.",
    icon: "implant",
    callout: null,
  };

  export const PROSTHODONTICS = {
    id: "prosthodontics",
    title: "Prosthodontics",
    description:
      "Dr. Wong collaborates with external periodontists, oral surgeons, endodontists to provide the highest level of specialized care for complex reconstructions. Services include a combination of dental implants, crown & bridge, and removable dentures.",
    icon: "prosthodontic",
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
      "Patients undergoing cancer treatment can experience both short-term and long-term oral side effects. Dr. Wong takes a team approach with your oncologist, and head & neck surgeons to provide support for you before, during, and after treatment.",
    icon: undefined,
    callout: null,
  };

  export const COSMETIC_RECONSTRUCTION = {
    id: "cosmetic-reconstruction",
    title: "Cosmetic Reconstruction",
    description:
      "Cosmetic treatment can range from a single tooth fix or a full mouth reconstruction with crowns and veneers. We utilize facial scans with our local laboratory technician to craft the perfect smile.",
    icon: "reconstruction",
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
