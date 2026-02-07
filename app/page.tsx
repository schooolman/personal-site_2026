import Image from "next/image";
import { Metadata } from "next";
import { profileData, experienceData, skillsData } from "@/data";
import { Button } from "@/components/ui/Button";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";

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

            <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl border-2 border-chicago-green/30">
                <Image
                  src="/jake_selfie_scotland_small.jpeg"
                  alt="Jake Schoolmeesters"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" background="cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Experience</SectionHeading>

          <div className="space-y-12">
            {experienceData.map((job) => (
              <div
                key={job.startYear + job.company}
                className="border-l-4 border-chicago-green pl-6"
              >
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-chicago-navy">
                    {job.title}
                  </h3>
                </div>
                <p className="text-chicago-blue font-medium mb-1">
                  {job.company} &middot; {job.location}
                </p>
                <p className="text-sm text-chicago-charcoal/60 mb-3">
                  {job.startYear} &ndash; {job.endYear}
                </p>
                <ul className="space-y-1.5 text-chicago-charcoal/80">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed">
                      <span className="text-chicago-green mt-1 shrink-0">&bull;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
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
      <Section background="green">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading color="cream" align="center" className="mb-4">
            Let&apos;s Work Together
          </SectionHeading>
          <p className="text-chicago-cream/80 mb-8 text-lg max-w-xl mx-auto">
            Interested in working together or have a question? I&apos;d love to
            hear from you.
          </p>
          <Button href="/contact" variant="outline" className="px-8 py-4">
            Contact Me
          </Button>
        </div>
      </Section>
    </>
  );
}
