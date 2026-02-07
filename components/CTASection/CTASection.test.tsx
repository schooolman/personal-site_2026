import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { CTASection } from './CTASection';

describe('CTASection Component', () => {
  const defaultProps = {
    title: "Let's Work Together",
    description: 'Interested in working together? Get in touch.',
    buttonText: 'Contact Me',
    buttonHref: '/contact',
  };

  describe('Rendering', () => {
    it('should render title', () => {
      render(<CTASection {...defaultProps} />);
      expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
    });

    it('should render description', () => {
      render(<CTASection {...defaultProps} />);
      expect(screen.getByText('Interested in working together? Get in touch.')).toBeInTheDocument();
    });

    it('should render button with text', () => {
      render(<CTASection {...defaultProps} />);
      expect(screen.getByRole('link', { name: 'Contact Me' })).toBeInTheDocument();
    });

    it('should render button with correct href', () => {
      render(<CTASection {...defaultProps} />);
      const link = screen.getByRole('link', { name: 'Contact Me' });
      expect(link).toHaveAttribute('href', '/contact');
    });
  });

  describe('Semantic Structure', () => {
    it('should render title as a heading', () => {
      render(<CTASection {...defaultProps} />);
      const heading = screen.getByRole('heading', { name: "Let's Work Together" });
      expect(heading).toBeInTheDocument();
    });

    it('should wrap content in a section', () => {
      const { container } = render(<CTASection {...defaultProps} />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Layout', () => {
    it('should have centered content', () => {
      const { container } = render(<CTASection {...defaultProps} />);
      const centerDiv = container.querySelector('.text-center');
      expect(centerDiv).toBeInTheDocument();
    });

    it('should have max-width container', () => {
      const { container } = render(<CTASection {...defaultProps} />);
      const maxWidthDiv = container.querySelector('.max-w-4xl');
      expect(maxWidthDiv).toBeInTheDocument();
    });
  });

  describe('Background', () => {
    it('should apply green background by default', () => {
      const { container } = render(<CTASection {...defaultProps} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('bg-chicago-green');
    });
  });
});
