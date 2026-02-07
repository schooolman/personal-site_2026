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
    <section className="min-h-[90vh] flex items-center pt-12 sm:pt-0 px-4 sm:px-6 lg:px-8 bg-black dot-pattern border-b-4 border-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-stagger">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase">
              {title}
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-neon-lime font-bold uppercase tracking-wide">
              {subtitle}
            </p>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
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

          <div className="pb-8 sm:pb-0">
            <ProfileImage src={imageSrc} alt={imageAlt} priority={imagePriority} />
          </div>
        </div>
      </div>
    </section>
  );
}
