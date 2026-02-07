import { Metadata } from "next";
import { profileData, experienceData, skillsData } from "@/data";
import { Hero } from "@/components/sections/Hero";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
      />

      {/* Hero Section */}
      <Hero
        title="Jake Schoolmeesters"
        subtitle="Senior Front End Developer"
        description="Front-end developer based in Chicago. Passionate about creating beautiful and functional user interfaces that help businesses connect with their audiences. Specializing in Adobe Experience Manager with 8+ years of experience."
        imageSrc="/jake_selfie_scotland_small.jpeg"
        imageAlt="Jake Schoolmeesters"
        primaryCTA={{
          text: "Get in Touch",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Experience",
          href: "#experience",
        }}
        imagePriority
      />

      {/* Experience Section */}
      <ExperienceTimeline experiences={experienceData} id="experience" />

      {/* Skills Section */}
      <SkillsGrid skills={skillsData} />

      {/* CTA Section */}
      <CTASection
        title="Let's Work Together"
        description="Interested in working together or have a question? I'd love to hear from you."
        buttonText="Contact Me"
        buttonHref="/contact"
      />
    </>
  );
}
