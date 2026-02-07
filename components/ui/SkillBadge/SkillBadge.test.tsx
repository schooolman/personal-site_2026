import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { SkillBadge } from './SkillBadge';

describe('SkillBadge Component', () => {
  describe('Rendering', () => {
    it('should render with skill label', () => {
      render(<SkillBadge label="React" />);
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('should render multiple badges', () => {
      render(
        <>
          <SkillBadge label="TypeScript" />
          <SkillBadge label="Next.js" />
        </>
      );
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('Next.js')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should apply default navy background styles', () => {
      render(<SkillBadge label="JavaScript" />);
      const badge = screen.getByText('JavaScript');
      expect(badge.className).toContain('bg-chicago-navy');
      expect(badge.className).toContain('border-chicago-sage/20');
    });

    it('should apply hover styles', () => {
      render(<SkillBadge label="CSS" />);
      const badge = screen.getByText('CSS');
      expect(badge.className).toContain('hover:border-chicago-sage/50');
    });
  });

  describe('Custom className', () => {
    it('should merge custom className with default styles', () => {
      render(<SkillBadge label="HTML" className="custom-badge" />);
      const badge = screen.getByText('HTML');
      expect(badge.className).toContain('custom-badge');
      expect(badge.className).toContain('bg-chicago-navy');
    });
  });

  describe('Accessibility', () => {
    it('should render as a div by default', () => {
      const { container } = render(<SkillBadge label="Git" />);
      const badge = container.querySelector('div');
      expect(badge).toBeInTheDocument();
      expect(badge?.textContent).toBe('Git');
    });
  });
});
