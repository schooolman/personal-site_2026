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
    <Section background="green">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading color="cream" align="center" className="mb-4">
          {title}
        </SectionHeading>
        <p className="text-chicago-cream/80 mb-8 text-lg max-w-xl mx-auto">
          {description}
        </p>
        <Button href={buttonHref} variant="outline" className="px-8 py-4">
          {buttonText}
        </Button>
      </div>
    </Section>
  );
}
