/**
 * Central Configuration for THE STRONGS
 * Allows updating brand details, contact info, social handles, donation settings, and SEO defaults.
 */

export const SITE_CONFIG = {
  name: "THE STRONGS",
  fullName: "THE STRONGS Official Website",
  tagline: "Innovating for a Better Tomorrow",
  founded: 2026,
  location: {
    country: "Nigeria",
    state: "Lagos State",
    address: "Lagos State, Nigeria",
  },
  language: "British English",
  contact: {
    email: "thestrongsinitiatives@gmail.com",
    phone: null, // Editable placeholder
  },
  social: {
    instagram: {
      handle: "@the.strongs.initiatives",
      url: "https://www.instagram.com/the.strongs.initiatives?igsh=bXZvd2FwYnA3ZWM1",
    },
    youtube: {
      channel: "THE STRONGS",
      url: "https://youtube.com/@the.strongs.initiatives?si=I7qOqDAO7SODQf_X",
    },
    linkedin: {
      name: "THE STRONGS",
      handle: "THE STRONGS",
      url: "https://www.linkedin.com/company/thestrongsinitiatives",
      placeholder: "THE STRONGS on LinkedIn",
    },
  },
  logos: {
    primary: "https://drive.google.com/file/d/1dwLSRn1MTJtIzDfUYVVLlx2Ie1ilZh86/view?usp=drivesdk",
    strongsConnect: "/assets/branding/strongsconnect-logo.svg",
    profileImage: "https://i.postimg.cc/0jkFSsY3/file-00000000d35481f498e008356a18d52a.jpg",
  },
  donations: {
    enabled: true,
    bankName: "Sterling Bank",
    accountName: "OBALOLUWA OLADOSU",
    accountNumber: "0137805669",
    note: "Official organizational account for supporting THE STRONGS initiatives, research, and prototype development.",
  },
  seo: {
    defaultTitle: "THE STRONGS | Innovating for a Better Tomorrow",
    defaultDescription:
      "THE STRONGS drives innovation, research and practical technology solutions to address real-world challenges, improve everyday life and build a more sustainable future.",
    keywords: [
      "THE STRONGS",
      "innovation",
      "technology",
      "research",
      "sustainability",
      "Nigeria",
      "Lagos",
      "grassroots technology",
      "StrongsConnect",
      "HealthTech",
      "practical technology",
    ],
    siteUrl: "https://thestrongs.org",
  },
};
