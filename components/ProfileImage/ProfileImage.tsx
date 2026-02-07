import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
}

export function ProfileImage({
  src,
  alt,
  size = 'md',
  priority = false,
}: ProfileImageProps) {
  const sizeStyles = {
    sm: 'max-w-xs',
    md: 'max-w-sm',
    lg: 'max-w-md',
  };

  return (
    <div className={`relative w-full ${sizeStyles[size]} mx-auto lg:max-w-md`}>
      <div className="aspect-square overflow-hidden shadow-2xl border-4 border-neon-lime hover:border-electric-blue transition-colors duration-300">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="object-cover w-full h-full"
          priority={priority}
        />
      </div>
    </div>
  );
}
