import { Metadata } from "next";
import { profileData, experienceData, skillsData } from "@/data";
import { Button } from "@/components/ui/Button";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProfileImage } from "@/components/ProfileImage";
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
      <section className="min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 bg-chicago-navy">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-chicago-cream leading-tight">
                Jake Schoolmeesters
              </h1>
              <p className="text-xl sm:text-2xl text-chicago-sage font-light">
                Senior Front End Developer
              </p>
              <p className="text-lg text-chicago-cream/80 leading-relaxed max-w-xl">
                Front-end developer based in Chicago. Passionate about creating
                beautiful and functional user interfaces that help businesses
                connect with their audiences. Specializing in Adobe Experience
                Manager with 8+ years of experience.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button href="/contact">Get in Touch</Button>
                <Button href="#experience" variant="secondary">
                  View Experience
                </Button>
              </div>
            </div>

            <ProfileImage
              src="/jake_selfie_scotland_small.jpeg"
              alt="Jake Schoolmeesters"
              priority
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" background="cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Experience</SectionHeading>

          <div className="space-y-12">
            {experienceData.map((job) => (
              <ExperienceCard key={job.startYear + job.company} job={job} />
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section background="navy">
        <div className="max-w-4xl mx-auto">
          <SectionHeading color="cream">Skills &amp; Technologies</SectionHeading>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>
      </Section>

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
