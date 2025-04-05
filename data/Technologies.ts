namespace Technologies {
  export const THREE_D_CBT_MACHINE = {
    id: "3d-cbct-machine",
    name: "3D Cone Beam X-ray Machine",
    description:
      "Our office has the latest 3D imaging technology to acquire high quality images with lower radiation.  It allows us to view patients with higher diagnostic accuracy in multiple modes of view.  Images can also be captured in seconds due to the latest processing technology for increased patient comfort.",
    images: [
      {
        src: "/images/technologies/3d-cbct-machine-full.webp",
        caption: "3D Cone Beam X-ray Machine Full",
        alt: "3D Cone Beam X-ray Machine - Full Machine",
      },
      {
        src: " /images/technologies/3d-cbct-machine-head-part.webp",
        caption: "3D Cone Beam X-ray Machine",
        alt: "3D Cone Beam X-ray Machine - Head Part of Machine",
      },
      {
        src: "/images/technologies/3d-cbct-machine-scans.webp",
        caption: "3D Cone Beam X-ray Machine Scans",
        alt: "3D Cone Beam X-ray Machine - Scans",
      },
    ],
  };

  export const THREE_D_FACIAL_SCAN = {
    id: "3d-facial-scan",
    name: "3D Facial Scan",
    description:
      "By Appointment Only.  This technology allows us to create a 3D model of your face and allow our dentists and lab technicians to design, improve, and simulate a new smile prior to any cosmetic restorative treatment.  It offers personalized care and helps us achieve a natural and proportioned smile for your face.",
    images: [
      {
        src: "/images/technologies/3d-facial-scan-smile-design.webp",
        caption: "3D Facial Scan",
        alt: "3D Facial Scan - Smile Design",
      },
      {
        src: "/images/technologies/3d-facial-scan-smile-design-2.webp",
        caption: "3D Facial Scan",
        alt: "3D Facial Scan - Smile Design 2",
      },
    ],
  };

  export const DIGITAL_XRAY_SCANNER = {
    id: "digital-intraoral-xray",
    name: "Digital Intraoral X-Ray",
    description:
      "Digital x-ray sensors have replaced older film technology.  We have been using digital sensors in our office for 20 years and currently are using the latest HD sensors to further reduce radiation exposure.  Digital x-rays allow the doctors to use enhancing imaging of your teeth to give us more information to diagnoses any problems in your mouth.",
    images: [
      {
        src: "/images/technologies/digital-xray-unit.webp",
        caption: "Digital Intraoral X-Ray Unit",
        alt: "Digital Intraoral X-Ray Unit",
      },
      {
        src: "/images/technologies/digital-xray-scanners.webp",
        caption: "Digital Intraoral X-Ray Scanner",
        alt: "Digital Intraoral X-Ray Scanner",
      },
    ],
  };

  export const INTRAORAL_CAMERA = {
    id: "intraoral-camera",
    name: "IntraOral Camera",
    description:
      "Treatment is often prescribed to the patient but the patient cannot see inside of their mouth like a dentist does. Utilizing an HD camera in your mouth allows us to see your tooth in high magnification to better diagnosis problems.  The high-resolution camera also allows us to demonstrate problems you cannot see and feel so that patients would have a better understanding of their mouth and understands why treatment is recommended.",
    images: [
      {
        src: "/images/technologies/intraoral-camera-device.webp",
        caption: "IntraOral Camera Device",
        alt: "IntraOral Camera Device",
      },
      {
        src: "/images/technologies/intraoral-camera-old-filling.webp",
        caption: "Old Filling Snapshot",
        alt: "IntraOral Camera - Old Filling Snapshot",
      },
      {
        src: "/images/technologies/intraoral-camera-cracked-tooth-1.webp",
        caption: "Cracked Tooth Snapshot #1",
        alt: "IntraOral Camera - Cracked Tooth Snapshot",
      },
      {
        src: "/images/technologies/intraoral-camera-cracked-tooth-2.webp",
        caption: "Cracked Tooth Snapshot #2",
        alt: "IntraOral Camera - Cracked Tooth Snapshot",
      },
    ],
  };

  export const ITERO_3D_SCANNER = {
    id: "itero-3d-scanner",
    name: "iTero 3D Scanner",
    description:
      "In the past dentists had to take messy rubber molds of patient’s teeth to make models and to allow the dental laboratories to make restorations.  Our latest iTero 3D scanners allow us to scan your teeth for both Invisalign treatment, Diagnostic imaging, Restorative treatment, detect small cavities without x-rays, and measure wear of your teeth over multiple scans, to name a few of its functions.  With these digital scans we can simulate before and after results for Invisalign.  The scanner is capable of scanning at the micron level.  It allows our labs to design your perfect tooth and manufacture it by digital means such as computer aided machining.  This makes our, crowns for example, fit with a level of precision and lessens the amount of time need to fit/ adapt to the new crown.",
    images: [
      {
        src: "/images/technologies/itero-3d-scanner.webp",
        caption: "",
        alt: "iTero 3D Scanner Device",
      },
      {
        src: "/images/technologies/itero-3d-scanner-scan.webp",
        caption: "iTero 3D Ditigal Scan",
        alt: "iTero 3D Scanner - Digital Scan",
      },
    ],
  };

  export const REVERSE_OSMOSIS_MACHINE = {
    id: "reverse-osmosis-machine",
    name: "Reverse Osmosis Machine",
    description:
      "For your treatment in our office, every water supply line is connected to our reverse osmosis system to maintain a high level if clean water.  This keeps the treatment lines free of bacteria relieves the stress of wondering if the water is clean from the city water supply.  The system is digitally monitored and tested routinely for a second level of check.",
    images: [
      {
        src: "/images/technologies/reverse-osmosis-water-machine.webp",
        caption: "Reverse Osmosis Machine",
        alt: "Reverse Osmosis Machine",
      },
    ],
  };

  export const FEATURED = [
    {
      name: THREE_D_CBT_MACHINE.name,
      image: THREE_D_CBT_MACHINE.images[0],
    },
    {
      name: DIGITAL_XRAY_SCANNER.name,
      image: DIGITAL_XRAY_SCANNER.images[0],
    },
    {
      name: ITERO_3D_SCANNER.name,
      image: ITERO_3D_SCANNER.images[0],
    },
  ];

  export const ALL = [
    THREE_D_FACIAL_SCAN,
    INTRAORAL_CAMERA,
    THREE_D_CBT_MACHINE,
    DIGITAL_XRAY_SCANNER,
    ITERO_3D_SCANNER,
    REVERSE_OSMOSIS_MACHINE,
  ];
}

export default Technologies;
