import { Button } from '@/components/ui/Button';
import { ProfileImage } from '@/components/ProfileImage';

interface CTAButton {
  text: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  imagePriority?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryCTA,
  secondaryCTA,
  imagePriority = false,
}: HeroProps) {
  return (
    <section className="min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 bg-chicago-navy">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-chicago-cream leading-tight">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-chicago-sage font-light">
              {subtitle}
            </p>
            <p className="text-lg text-chicago-cream/80 leading-relaxed max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href={primaryCTA.href}>{primaryCTA.text}</Button>
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="secondary">
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>

          <ProfileImage src={imageSrc} alt={imageAlt} priority={imagePriority} />
        </div>
      </div>
    </section>
  );
}
