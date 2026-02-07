export interface ExperienceItem {
  startYear: string;
  endYear: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
}

export interface ProfileData {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  email: string;
  description: string;
  worksFor: Array<{
    '@type': string;
    name: string;
    startDate: string;
  }>;
  alumniOf: Array<{
    '@type': string;
    name: string;
  }>;
  knowsAbout: string[];
}
