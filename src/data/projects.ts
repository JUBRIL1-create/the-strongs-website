import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: "strongsconnect",
    title: "StrongsConnect",
    alternativeName: "THE STRONGS CONNECT APP",
    slug: "strongsconnect",
    category: "HealthTech",
    shortDescription: "An intelligent healthcare platform being developed to bridge important gaps in medicine safety, healthcare collaboration, first-aid preparedness, and access to trusted health information.",
    fullDescription: "StrongsConnect is an intelligent healthcare platform currently in development to address critical challenges in medicine safety, clinical knowledge exchange, emergency first-aid education, and verified healthcare information access through artificial intelligence and community-driven innovation.",
    problem: "Access to reliable healthcare information remains a significant challenge in Nigeria. Counterfeit medicines expose patients to ineffective or harmful treatments, healthcare professionals may have limited opportunities for timely clinical knowledge exchange, and many members of the public lack basic first-aid knowledge that could save lives during emergencies.",
    objectives: [
      "Bridge gaps in medicine safety through proposed AI-assisted verification workflows.",
      "Facilitate secure knowledge exchange among healthcare professionals and researchers.",
      "Empower communities with interactive, practical first-aid education modules.",
      "Provide a verified information layer for trusted health guidance and emergency preparedness."
    ],
    dateStarted: "May 2026",
    status: "Prototype",
    featured: true,
    components: [
      {
        name: "Smart Drug Verification (Proposed)",
        description: "A proposed system designed to allow users to scan medicine packaging, barcodes, and QR codes. AI models analyse packaging features and compare them against verified repository records to generate an authenticity assessment and risk score."
      },
      {
        name: "Clinical Insights & Research Exchange (Proposed)",
        description: "A proposed professional knowledge exchange platform where verified healthcare practitioners can share anonymised clinical cases, discuss treatment approaches, exchange research findings, and collaborate on emerging health challenges."
      },
      {
        name: "Interactive First Aid Education",
        description: "Interactive educational modules covering common life-saving emergency procedures, including choking intervention, severe bleeding management, burn care, fracture stabilization, and cardiopulmonary resuscitation (CPR)."
      },
      {
        name: "Healthcare Information Sharing (Proposed)",
        description: "A proposed information layer delivering trusted health guidance, educational resources, and relevant updates curated for healthcare professionals and the general public."
      }
    ],
    aiRole: [
      "Medicine verification analysis & packaging feature evaluation",
      "Knowledge organization & research paper indexing",
      "Context-aware related case recommendations for medical practitioners",
      "Personalized first-aid learning paths based on community context",
      "Community health trend identification"
    ],
    activities: "Ongoing prototype development, user experience testing, and architectural refinement.",
    results: null, // Clearly null as specified - no fake results
    impact: "Designed to elevate health literacy, improve emergency preparedness, and foster collaborative medical research across grassroots communities.",
    images: [],
    videos: [],
    partners: [],
    team: [
      "Olukolu Jubril",
      "Adigunsesan Akinola",
      "Oladosu Obaloluwa",
      "Awosanya Joshua",
      "Abiola Daniel",
      "Oyedele Fawas"
    ],
    testimonials: [],
    relatedLinks: [],
    createdAt: "2026-05-01T00:00:00.000Z",
    updatedAt: "2026-08-01T00:00:00.000Z"
  },
  {
    id: "grassroots-agrisense",
    title: "Grassroots AgriSense",
    alternativeName: "THE STRONGS SOIL & CROP INSIGHTS",
    slug: "grassroots-agrisense",
    category: "Agritech & Sustainability",
    shortDescription: "A proposed low-cost sensor and research initiative aimed at providing smallholder farming communities with localized soil health insights and sustainable crop recommendations.",
    fullDescription: "Grassroots AgriSense is an upcoming research and technological framework designed to bring soil analysis and agricultural intelligence directly to local farming communities, supporting food security and climate-resilient agriculture.",
    problem: "Smallholder farmers in many grassroots communities lack accessible, affordable tools to test soil fertility and moisture, leading to suboptimal crop yields and fertilizer waste.",
    objectives: [
      "Develop simple, affordable soil testing prototypes tailored for grassroots farming.",
      "Translate agricultural research data into actionable recommendations for local farmers.",
      "Promote sustainable land management practices."
    ],
    dateStarted: "Targeted Q4 2026",
    status: "Upcoming",
    featured: false,
    components: [
      {
        name: "Localized Soil Parameter Assessment",
        description: "Proposed handheld diagnostic tool measuring basic soil nutrients and pH."
      },
      {
        name: "Community Advisory Layer",
        description: "Simple mobile or SMS-based crop management guidance in local context."
      }
    ],
    aiRole: [
      "Soil parameter interpretation",
      "Crop yield pattern analysis"
    ],
    activities: "Conceptual research and preliminary hardware design.",
    results: null,
    impact: null,
    images: [],
    videos: [],
    partners: [],
    team: [],
    testimonials: [],
    relatedLinks: [],
    createdAt: "2026-07-15T00:00:00.000Z",
    updatedAt: "2026-07-15T00:00:00.000Z"
  }
];
