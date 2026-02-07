import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { SectionHeading } from './SectionHeading';

describe('SectionHeading Component', () => {
  describe('Rendering', () => {
    it('should render with children text', () => {
      render(<SectionHeading>My Heading</SectionHeading>);
      expect(screen.getByText('My Heading')).toBeInTheDocument();
    });

    it('should render as h2 by default', () => {
      render(<SectionHeading>Default Heading</SectionHeading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe('Default Heading');
    });

    it('should render as h1 when level is h1', () => {
      render(<SectionHeading level="h1">H1 Heading</SectionHeading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('should render as h3 when level is h3', () => {
      render(<SectionHeading level="h3">H3 Heading</SectionHeading>);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Alignment', () => {
    it('should apply left alignment by default', () => {
      render(<SectionHeading>Left Aligned</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('text-left');
    });

    it('should apply center alignment when specified', () => {
      render(<SectionHeading align="center">Centered</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('text-center');
    });
  });

  describe('Color Variants', () => {
    it('should apply white text by default (navy variant)', () => {
      render(<SectionHeading>Navy Heading</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('text-white');
    });

    it('should apply neon-lime text for cream variant', () => {
      render(<SectionHeading color="cream">Cream Heading</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('text-neon-lime');
    });

    it('should apply neon-lime text for lime variant', () => {
      render(<SectionHeading color="lime">Lime Heading</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('text-neon-lime');
    });

    it('should apply electric-blue text for blue variant', () => {
      render(<SectionHeading color="blue">Blue Heading</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('text-electric-blue');
    });

    it('should apply uppercase styling', () => {
      render(<SectionHeading>Uppercase Heading</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('uppercase');
    });
  });

  describe('Custom className', () => {
    it('should merge custom className with default styles', () => {
      render(<SectionHeading className="custom-heading">Custom</SectionHeading>);
      const heading = screen.getByRole('heading');
      expect(heading.className).toContain('custom-heading');
      expect(heading.className).toContain('font-bold');
    });
  });
});
