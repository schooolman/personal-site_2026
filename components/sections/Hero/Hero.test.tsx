import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { Hero } from './Hero';

describe('Hero Component', () => {
  const defaultProps = {
    title: 'John Doe',
    subtitle: 'Software Engineer',
    description: 'Building amazing web applications.',
    imageSrc: '/profile.jpg',
    imageAlt: 'John Doe',
    primaryCTA: {
      text: 'Contact Me',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'View Work',
      href: '#work',
    },
  };

  describe('Rendering', () => {
    it('should render title', () => {
      render(<Hero {...defaultProps} />);
      expect(screen.getByRole('heading', { name: 'John Doe' })).toBeInTheDocument();
    });

    it('should render subtitle', () => {
      render(<Hero {...defaultProps} />);
      expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    });

    it('should render description', () => {
      render(<Hero {...defaultProps} />);
      expect(screen.getByText('Building amazing web applications.')).toBeInTheDocument();
    });

    it('should render profile image', () => {
      render(<Hero {...defaultProps} />);
      const img = screen.getByAltText('John Doe');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', expect.stringContaining('profile.jpg'));
    });

    it('should render primary CTA button', () => {
      render(<Hero {...defaultProps} />);
      expect(screen.getByRole('link', { name: 'Contact Me' })).toBeInTheDocument();
    });

    it('should render secondary CTA button', () => {
      render(<Hero {...defaultProps} />);
      expect(screen.getByRole('link', { name: 'View Work' })).toBeInTheDocument();
    });
  });

  describe('Section Structure', () => {
    it('should render as a section element', () => {
      const { container } = render(<Hero {...defaultProps} />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have minimum height styling', () => {
      const { container } = render(<Hero {...defaultProps} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('min-h-[90vh]');
    });

    it('should have dot pattern background', () => {
      const { container } = render(<Hero {...defaultProps} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('dot-pattern');
    });

    it('should have bottom border', () => {
      const { container } = render(<Hero {...defaultProps} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('border-b-4');
      expect(section?.className).toContain('border-white');
    });
  });

  describe('Layout', () => {
    it('should have two-column grid layout', () => {
      const { container } = render(<Hero {...defaultProps} />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
      expect(grid?.className).toContain('lg:grid-cols-2');
    });
  });

  describe('Optional Props', () => {
    it('should render without secondary CTA', () => {
      const propsWithoutSecondary = {
        ...defaultProps,
        secondaryCTA: undefined,
      };
      render(<Hero {...propsWithoutSecondary} />);
      expect(screen.getByRole('link', { name: 'Contact Me' })).toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'View Work' })).not.toBeInTheDocument();
    });

    it('should handle priority image loading', () => {
      render(<Hero {...defaultProps} imagePriority />);
      const img = screen.getByAltText('John Doe');
      expect(img).toBeInTheDocument();
    });
  });
});
