import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { Button } from './Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render with children text', () => {
      render(<Button href="/test">Click me</Button>);
      expect(screen.getByRole('link', { name: /click me/i })).toBeInTheDocument();
    });

    it('should render as a link when href is provided', () => {
      render(<Button href="/contact">Contact</Button>);
      const link = screen.getByRole('link', { name: /contact/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/contact');
    });

    it('should render as a button when href is not provided', () => {
      render(<Button>Submit</Button>);
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render primary variant', () => {
      render(<Button href="/test">Primary</Button>);
      const button = screen.getByRole('link');
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe('Primary');
    });

    it('should render secondary variant', () => {
      render(<Button href="/test" variant="secondary">Secondary</Button>);
      const button = screen.getByRole('link');
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe('Secondary');
    });

    it('should render outline variant', () => {
      render(<Button href="/test" variant="outline">Outline</Button>);
      const button = screen.getByRole('link');
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe('Outline');
    });
  });

  describe('Custom className', () => {
    it('should accept custom className', () => {
      render(<Button href="/test" className="custom-class">Test</Button>);
      const button = screen.getByRole('link');
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe('Test');
    });
  });

  describe('Accessibility', () => {
    it('should be keyboard accessible as a link', () => {
      render(<Button href="/test">Link Button</Button>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/test');
    });

    it('should be keyboard accessible as a button', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });
});
