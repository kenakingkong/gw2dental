namespace CaseStudies {
  const COSMETIC_RECONSTRUCTION = {
    id: "patient-1",
    patient: "Patient 1",
    treatment: "Cosmetic Reconstruction",
    images: [
      {
        src: "/images/case-studies/patient-1-before.webp",
        alt: "Cosmetic Reconstruction Before",
        caption: "Before",
      },
      {
        src: "/images/case-studies/patient-1-after.webp",
        alt: "Cosmetic Reconstruction After",
        caption: "After",
      },
    ],
  };

  const DENTURES = {
    id: "patient-2",
    patient: "Patient 2",
    treatment: "Crowns and Bridges with Dentures",
    images: [
      {
        src: "/images/case-studies/patient-2-mold.webp",
        alt: "Crowns and Bridges with Dentures - Mold",
        caption: "Mold",
      },
      {
        src: "/images/case-studies/patient-2-construction.webp",
        alt: "Crowns and Bridges with Dentures - Construction",
        caption: "Construction",
      },
      {
        src: "/images/case-studies/patient-2-fitting.webp",
        alt: "Crowns and Bridges with Dentures - Fitting",
        caption: "Fitting",
      },
      {
        src: "/images/case-studies/patient-2-after.webp",
        alt: "Crowns and Bridges with Dentures - After",
        caption: "After",
      },
    ],
  };

  const IMPLANTS = {
    id: "patient-3",
    patient: "Patient 3",
    treatment: "Removable & Fixed Implants",
    images: [
      {
        src: "/images/case-studies/patient-3-mold.webp",
        alt: "Removable & Fixed Implants - Mold",
        caption: "Mold",
      },
      {
        src: "/images/case-studies/patient-3-construction.webp",
        alt: "Removable & Fixed Implants - Construction",
        caption: "Construction",
      },
      {
        src: "/images/case-studies/patient-3-after.webp",
        alt: "Removable & Fixed Implants - After",
        caption: "After",
      },
    ],
  };

  const IMMEDIATE_IMPLANTS = {
    id: "patient-4",
    patient: "Patient 4",
    treatment: "Immediate Implant Treatment",
    images: [
      {
        src: "/images/case-studies/patient-4-before.webp",
        alt: "Immediate Implant Treatment - Before",
        caption: "Before",
      },
      {
        src: "/images/case-studies/patient-4-after.webp",
        alt: "Immediate Implant Treatment - After",
        caption: "After",
      },
    ],
  };

  export const ALL = [
    COSMETIC_RECONSTRUCTION,
    DENTURES,
    IMPLANTS,
    IMMEDIATE_IMPLANTS,
  ];
}

export default CaseStudies;
