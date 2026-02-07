import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <Section background="green" border>
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading color="lime" align="center" className="mb-4">
          {title}
        </SectionHeading>
        <p className="text-white/90 mb-8 text-base sm:text-lg lg:text-xl max-w-xl mx-auto font-bold">
          {description}
        </p>
        <Button href={buttonHref} variant="outline" className="sm:px-10 sm:py-5 sm:text-lg">
          {buttonText}
        </Button>
      </div>
    </Section>
  );
}
