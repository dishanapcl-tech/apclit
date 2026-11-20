
// =====================================================
// APCL NEWS, EVENTS & INSIGHTS
// =====================================================
// Add or update content in this file.
// Images should be stored in /public/images.
// Use image paths beginning with /images/.
// =====================================================


// =====================================================
// 1. INSIGHTS
// =====================================================

export const insights = [
  {
  id: "mv-testing-inspection-insight",
  slug: "why-mv-testing-and-inspection-is-critical",
  category: "Technical Insight",
  date: "20.11.2026",
  title: "Why Medium Voltage Testing and Inspection Is Critical",
  summary:
    "A medium voltage installation that is operating normally is not necessarily healthy. This article explains how hidden defects develop, why untested protection is a risk, and why periodic testing and inspection is far less costly than failure.",

  cardImage: "/images/Insights/MV_testing.png",
  fullImage: "/images/Insights/mv-testing-full.jpg",
  galleryImages: ["/images/Insights/mv-testing-full.jpg"],
  image: "/images/Insights/mv-testing.jpg",
  fallbackImage:
    "https://images.unsplash.com/photo-1473341304170-971b4b8c5c4a?auto=format&fit=crop&w=1200&q=85",
  imageAlt: "Medium voltage switchgear installation",

  animation: "/animations/mv-test-inspect.html",

  author: "Amithi Power Consultants (Pvt) Ltd",
  readingTime: "5 min read",

  introduction:
    "Medium voltage (MV) switchgear, cables and protection systems are expected to operate quietly for years. Because they usually do, testing and inspection is often treated as an optional expense until a failure occurs. By then, the cost is no longer a matter of choice.",

  sections: [
    {
      heading: "A Working System Is Not Necessarily a Healthy System",
      paragraphs: [
        "Voltage, current and indicator lights can all appear normal while a defect is developing inside an MV installation. Normal operation only shows that the equipment has not yet failed. It does not show how close it is to failing.",
        "Most MV failures are the final stage of a gradual process that began months or years earlier and could not be seen from outside the panel."
      ]
    },
    {
      heading: "How Defects Develop Without Warning",
      paragraphs: [
        "Thermal cycling and vibration can loosen bolted connections, increasing contact resistance and causing localised heating. Voids, contamination and moisture in cable terminations and joints can initiate partial discharge, which progressively erodes insulation.",
        "Dust, humidity and ageing of insulating materials further reduce the margin between normal operation and breakdown. None of these conditions is visible during routine operation."
      ]
    },
    {
      heading: "Protection That Has Never Been Tested",
      paragraphs: [
        "A protection relay is only called upon when a fault occurs. If its settings, CT circuits, trip logic and breaker operation have not been verified, there is no assurance that it will clear the fault correctly and in time.",
        "A delayed or failed trip allows a local fault to escalate, increasing equipment damage, the extent of the outage and the arc flash hazard to personnel."
      ]
    },
    {
      heading: "The Real Cost of Run-to-Failure",
      paragraphs: [
        "The cost of a failure extends well beyond the repair itself. It includes unplanned downtime, damage to adjacent equipment, extended procurement lead times for spares, safety exposure for staff and possible consequences for insurance and compliance.",
        "The same defect, identified during a planned shutdown, is typically resolved in a shorter time, at lower cost and with no risk to people or production."
      ]
    },
    {
      heading: "What Comprehensive Inspection and Testing Covers",
      paragraphs: [
        "A comprehensive inspection of the MV installation according to the relevant standards examines the condition of switchgear, cable terminations, earthing, interlocks and documentation. Electrical tests may include insulation and contact resistance measurements, partial discharge assessment, breaker timing and thermographic survey.",
        "Protection relay testing verifies relay settings and operation through secondary injection, together with the associated CT and trip circuits. Findings are reported with priorities, allowing the owner to plan and budget corrective work."
      ]
    },
    {
      heading: "APCL Engineering Approach",
      paragraphs: [
        "Amithi Power Consultants (Pvt) Ltd carries out inspection of MV installations and protection relay testing to support the safe, reliable and predictable operation of electrical systems.",
        "Our approach is to convert unknown risk into documented condition, so that decisions on maintenance and investment are based on engineering evidence rather than on failure."
      ]
    }
  ],

  conclusion:
    "The relevant question is not whether testing and inspection is affordable, but whether an unplanned failure is. Periodic assessment identifies defects while they can still be corrected on the owner's schedule, protecting people, equipment and continuity of supply."
}
  // {
  //   id: "power-quality-insight",
  //   slug: "understanding-power-quality",

  //   category: "Technical Insight",
  //   date: "19.11.2026",

  //   title: "Understanding Power Quality in Electrical Systems",

  //   summary:
  //     "An overview of electrical power quality, common disturbances, their impact on electrical installations and the importance of systematic power quality assessments.",

  //   // Listing thumbnail and high-resolution detail image
  //   cardImage: "/images/Insights/power-quality-card.jpg",
  //   fullImage: "/images/Insights/power-quality-full.jpg",
  //   // Add more full-size images here; they auto-scroll on the article page.
  //   galleryImages: [
  //     "/images/Insights/power-quality-full.jpg",
  //     // "/images/Insights/power-quality-2.jpg",
  //     // "/images/Insights/power-quality-3.jpg",
  //   ],
  //   image: "/images/Insights/power-quality.jpg",

  //   fallbackImage:
  //     "https://images.unsplash.com/photo-1473341304170-971b4b8c5c4a?auto=format&fit=crop&w=1200&q=85",

  //   imageAlt: "Electrical power distribution infrastructure",

  //   author: "Amithi Power Consultants (Pvt) Ltd",
  //   readingTime: "6 min read",

  //   introduction:
  //     "Electrical power quality plays an important role in maintaining the reliable and efficient operation of modern electrical installations. Variations in voltage, frequency and waveform characteristics can affect the performance of electrical equipment, increase operational costs and contribute to premature equipment failure.",

  //   sections: [
  //     {
  //       heading: "What is Electrical Power Quality?",
  //       paragraphs: [
  //         "Power quality refers to the characteristics of electrical power supplied to and utilised by electrical equipment. A satisfactory power supply should maintain voltage and frequency within acceptable limits and provide a waveform suitable for connected loads.",
  //         "In modern installations, the increasing use of electronic equipment, variable frequency drives, UPS systems and other non-linear loads has made power quality assessment increasingly important."
  //       ]
  //     },
  //     {
  //       heading: "Common Power Quality Problems",
  //       paragraphs: [
  //         "Common power quality disturbances include voltage sags, voltage swells, interruptions, harmonics, voltage unbalance, flicker and transient overvoltages.",
  //         "These disturbances may result from network conditions, switching operations, fault conditions and the characteristics of connected electrical loads."
  //       ]
  //     },
  //     {
  //       heading: "Impact on Electrical Installations",
  //       paragraphs: [
  //         "Poor power quality can contribute to overheating of transformers, cables and motors, unexpected operation of protective devices, malfunctioning of sensitive electronic equipment and reduced equipment service life.",
  //         "Identifying the underlying causes is important to determine appropriate corrective measures."
  //       ]
  //     },
  //     {
  //       heading: "Importance of Power Quality Analysis",
  //       paragraphs: [
  //         "Power quality analysis provides information about the actual operating conditions of an electrical installation. Measurements can be carried out using suitable power quality analysers and data logging equipment.",
  //         "The assessment may include voltage and current measurements, harmonic analysis, voltage unbalance, power factor, frequency variation and load profile evaluation."
  //       ]
  //     },
  //     {
  //       heading: "APCL Engineering Approach",
  //       paragraphs: [
  //         "Amithi Power Consultants (Pvt) Ltd provides electrical assessment and power quality analysis services to support the safe, reliable and efficient operation of electrical installations.",
  //         "Through systematic measurements, technical evaluation and engineering recommendations, APCL assists clients in identifying electrical issues and developing appropriate improvement measures."
  //       ]
  //     }
  //   ],

  //   conclusion:
  //     "Maintaining satisfactory power quality is essential for the reliability, safety and performance of electrical installations. Periodic assessment and appropriate engineering intervention can help identify potential issues before they develop into significant operational problems."
  // }
];


// =====================================================
// 2. GENERAL EVENTS
// =====================================================

export const events = [
  // Add general company events here.
  //
  // Example:
  //
  // {
  //   id: "engineering-seminar",
  //   slug: "engineering-seminar",
  //   category: "Company Event",
  //   date: "25.11.2026",
  //   title: "Electrical Engineering Seminar",
  //   summary: "An engineering knowledge-sharing event.",
  //   venue: "APCL Office Premises",
  //   cardImage: "/images/Events/seminar-card.jpg",
  //   fullImage: "/images/Events/seminar-full.jpg",
  //   image: "/images/Events/seminar.jpg",
  //   imageAlt: "Engineering seminar"
  // }
];


// =====================================================
// 3. NEWS & PROJECT UPDATES
// =====================================================

export const newsItems = [
  {
    id: "LV_Thermo_1",
    slug: "lv-thermography-survey-multinational-corporation",

    featured: true,
    category: "Completed Projects",
    date: "13.11.2026",

    title:
      "Project Completion – LV Thermography Survey for Multinational Corporation",

    summary:
      "Successful completion of a comprehensive LV thermography survey for electrical installations at a multinational corporation. This project involved inspection and analysis to support electrical safety and reliability.",

    content: [
      "Amithi Power Consultants (Pvt) Ltd successfully completed a comprehensive Low Voltage thermography survey for a multinational corporation.",
      "The project involved the inspection and thermal assessment of electrical installations to identify abnormal temperature conditions and potential electrical risks.",
      "The findings support improved electrical safety, system reliability and informed maintenance planning."
    ],

    // Listing thumbnail and high-resolution detail image
    cardImage: "/images/News/Thermo_2.png",
    fullImage: "/images/News/Thermo_1.png",
    galleryImages: [
      "/images/News/Thermo_3.jpeg",
      "/images/News/Thermo_1.png",
      // "/images/News/Thermo_2_Full_3.jpg",
    ],
    image: "/images/News/Thermo_2.png",

    fallbackImage:
      "https://images.unsplash.com/photo-1473341304170-971b4b8c5c4a?auto=format&fit=crop&w=900&q=80",

    imageAlt: "Electrical power infrastructure"
  },

  {
    id: "MV_T&C_1",
    slug: "mv-testing-commissioning-university",

    featured: true,
    category: "Completed Projects",
    date: "02.11.2026",

    title:
      "Project Completion – Medium Voltage Testing & Commissioning for University Complex",

    summary:
      "Successful completion of a comprehensive MV testing and commissioning project for a university Complex. The project involved inspection and testing to assess electrical system safety and operational readiness.",

    content: [
      "Amithi Power Consultants (Pvt) Ltd successfully completed a Medium Voltage testing and commissioning project for a university.",
      "The project involved inspection, testing and assessment of the relevant electrical systems to evaluate their condition and operational readiness.",
      "The work supports the safe and reliable operation of the university's electrical distribution system."
    ],

    // Listing thumbnail and high-resolution detail image
    cardImage: "/images/News/MV_T&C_1.jpg",
    fullImage: "/images/News/MV_T&C_1.jpg",
    galleryImages: [
      "/images/News/MV_T&C_1.jpg",
      // "/images/News/MV_TC_Full_2.jpg",
      // "/images/News/MV_TC_Full_3.jpg",
    ],
    image: "/images/News/MV_T&C_1.jpg",

    fallbackImage:
      "https://images.unsplash.com/photo-1473341304170-971b4b8c5c4a?auto=format&fit=crop&w=900&q=80",

    imageAlt: "Medium voltage electrical infrastructure"
  }

  // Add future project offers, awards and completions here.
];


// =====================================================
// 4. CPD PROGRAMMES
// =====================================================

export const cpdEvents = [
  {
    id: "mv-training-1-cpd",
    slug: "medium-voltage-switchgear-operation-maintenance",

    category: "CPD Programme",

    date: "22nd & 23rd November 2026",

    registrationDeadline: "2026-11-20",

    venue: "Amithi Power Consultants Office Premises",

    title:
      "CPD Workshop: Medium Voltage Switchgear Operation & Maintenance",

    shortTitle:
      "Medium Voltage Switchgear Operation & Maintenance",

    summary:
      "From theory to practical application for safer and more reliable MV systems.",

    content: [
      "Amithi Power Consultants (Pvt) Ltd is organising a Continuing Professional Development (CPD) workshop on Medium Voltage Switchgear Operation and Maintenance.",
      "The programme is designed to develop practical understanding of medium voltage switchgear systems, their operation, inspection and maintenance.",
      "The workshop aims to support safer working practices and improve the reliability of medium voltage electrical installations."
    ],

    objectives: [
      "Understand the fundamental principles of medium voltage switchgear operation.",
      "Develop awareness of inspection and maintenance requirements.",
      "Identify common operational issues and potential equipment failures.",
      "Improve understanding of electrical safety practices associated with MV systems."
    ],

    audience:
      "Electrical engineers, maintenance engineers, facility management professionals and other relevant technical personnel.",

    // Listing thumbnail and high-resolution detail image
    cardImage: "/images/CPD/MV_CPD_Card.jpg",
    fullImage: "/images/CPD/MV_CPD_Full.jpg",
    galleryImages: [
      "/images/CPD/MV_CPD_Full.jpg",
      // "/images/CPD/MV_CPD_Full_2.jpg",
      // "/images/CPD/MV_CPD_Full_3.jpg",
    ],
    image: "/images/CPD/MV_CPD.png",

    fallbackImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",

    imageAlt: "Professional engineering workshop"
  }
];


// =====================================================
// 5. REGISTRATION STATUS
// =====================================================

export function isRegistrationOpen(deadline) {
  if (!deadline || typeof deadline !== "string") {
    return false;
  }

  const parts = deadline.split("-").map(Number);

  if (
    parts.length !== 3 ||
    parts.some((value) => !Number.isFinite(value))
  ) {
    return false;
  }

  const [year, month, day] = parts;

  if (
    !year ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadlineDate = new Date(year, month - 1, day);
  deadlineDate.setHours(0, 0, 0, 0);

  return today <= deadlineDate;
}


// =====================================================
// 6. FORMAT REGISTRATION DEADLINE
// =====================================================

export function formatDeadline(deadline) {
  if (!deadline || typeof deadline !== "string") {
    return "";
  }

  const parts = deadline.split("-").map(Number);

  if (
    parts.length !== 3 ||
    parts.some((value) => !Number.isFinite(value))
  ) {
    return deadline;
  }

  const [year, month, day] = parts;

  return new Date(year, month - 1, day).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );
}
