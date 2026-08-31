import { ImpactMetric } from '../types';

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "projects",
    label: "Projects Developed",
    value: null, // Null indicates verified numbers will be published as projects mature
    description: "Multi-sector technology solutions actively being researched and prototyped.",
    status: "Developing",
  },
  {
    id: "milestones",
    label: "Innovation Milestones",
    value: null,
    description: "Core technological and research breakthroughs across healthcare, sustainability, and grassroots tech.",
    status: "Developing",
  },
  {
    id: "communities",
    label: "Communities Reached",
    value: null,
    description: "Grassroots populations engaged through practical education, first-aid tools, and digital initiatives.",
    status: "Framework",
  },
  {
    id: "research",
    label: "Research Initiatives",
    value: null,
    description: "Evidence-based problem exploration and clinical knowledge exchange frameworks.",
    status: "Framework",
  },
  {
    id: "partnerships",
    label: "Partnerships Built",
    value: null,
    description: "Institutional, research, and technical co-development alliances.",
    status: "Framework",
  },
];

export const IMPACT_NARRATIVE = {
  headline: "Evidence-Based, Grassroots-Centered Impact",
  paragraph1: "THE STRONGS approaches impact not through exaggerated metrics, but through rigorous research, human-centered technology, and sustainable practical deployment.",
  paragraph2: "As our ongoing prototypes—including StrongsConnect—progress into field trials and community partnerships, verified impact figures and field reports will be published directly within this framework.",
};
