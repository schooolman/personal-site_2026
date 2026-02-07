import { ProfileData } from './types';

export const profileData: ProfileData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jake Schoolmeesters",
  jobTitle: "Senior Front End Developer - Adobe Experience Manager",
  url: "https://jake.school",
  sameAs: [
    "https://www.linkedin.com/in/jake-schoolmeesters/",
    "https://github.com/schooolman",
    "https://bsky.app/profile/jake.school",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  email: "j.schoolmee@gmail.com",
  description:
    "Front-end developer based in Chicago specializing in Adobe Experience Manager with 8+ years of experience.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Bounteous",
      startDate: "2020-07",
    },
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Prime Digital Academy" },
    { "@type": "EducationalOrganization", name: "Metropolitan State University" },
  ],
  knowsAbout: [
    "Adobe Experience Manager",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Front End Development",
  ],
};
