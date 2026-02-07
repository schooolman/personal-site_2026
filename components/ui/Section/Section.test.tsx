import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { Section } from './Section';

describe('Section Component', () => {
  describe('Rendering', () => {
    it('should render with children content', () => {
      render(
        <Section>
          <p>Section content</p>
        </Section>
      );
      expect(screen.getByText('Section content')).toBeInTheDocument();
    });

    it('should render as a section element', () => {
      const { container } = render(<Section>Content</Section>);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Background Variants', () => {
    it('should apply navy background by default', () => {
      const { container } = render(<Section>Content</Section>);
      const section = container.querySelector('section');
      expect(section?.className).toContain('bg-chicago-navy');
    });

    it('should apply cream background when specified', () => {
      const { container } = render(<Section background="cream">Content</Section>);
      const section = container.querySelector('section');
      expect(section?.className).toContain('bg-chicago-cream');
    });

    it('should apply green background when specified', () => {
      const { container } = render(<Section background="green">Content</Section>);
      const section = container.querySelector('section');
      expect(section?.className).toContain('bg-chicago-green');
    });
  });

  describe('ID attribute', () => {
    it('should apply id when provided', () => {
      const { container } = render(<Section id="experience">Content</Section>);
      const section = container.querySelector('section');
      expect(section?.id).toBe('experience');
    });

    it('should not have id attribute when not provided', () => {
      const { container } = render(<Section>Content</Section>);
      const section = container.querySelector('section');
      expect(section?.id).toBe('');
    });
  });

  describe('Container Styles', () => {
    it('should apply default padding and responsive styles', () => {
      const { container } = render(<Section>Content</Section>);
      const section = container.querySelector('section');
      expect(section?.className).toContain('py-20');
      expect(section?.className).toContain('px-4');
    });
  });

  describe('Custom className', () => {
    it('should merge custom className with default styles', () => {
      const { container } = render(<Section className="custom-section">Content</Section>);
      const section = container.querySelector('section');
      expect(section?.className).toContain('custom-section');
      expect(section?.className).toContain('py-20');
    });
  });
});
