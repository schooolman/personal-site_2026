import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { SkillsGrid } from './SkillsGrid';

describe('SkillsGrid Component', () => {
  const mockSkills = ['React', 'TypeScript', 'Next.js', 'CSS'];

  describe('Rendering', () => {
    it('should render all skills', () => {
      render(<SkillsGrid skills={mockSkills} />);
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('Next.js')).toBeInTheDocument();
      expect(screen.getByText('CSS')).toBeInTheDocument();
    });

    it('should render default title', () => {
      render(<SkillsGrid skills={mockSkills} />);
      expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
    });

    it('should render custom title when provided', () => {
      render(<SkillsGrid skills={mockSkills} title="My Skills" />);
      expect(screen.getByText('My Skills')).toBeInTheDocument();
    });
  });

  describe('Section Structure', () => {
    it('should render as a section', () => {
      const { container } = render(<SkillsGrid skills={mockSkills} />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have gradient background', () => {
      const { container } = render(<SkillsGrid skills={mockSkills} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('bg-gradient-to-r');
    });

    it('should have top border', () => {
      const { container } = render(<SkillsGrid skills={mockSkills} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('border-t-4');
    });
  });

  describe('Grid Layout', () => {
    it('should render skills in a grid', () => {
      const { container } = render(<SkillsGrid skills={mockSkills} />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });

    it('should have responsive grid columns', () => {
      const { container } = render(<SkillsGrid skills={mockSkills} />);
      const grid = container.querySelector('.grid-cols-2');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty skills array', () => {
      const { container } = render(<SkillsGrid skills={[]} />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
      expect(grid?.children.length).toBe(0);
    });

    it('should handle single skill', () => {
      render(<SkillsGrid skills={['JavaScript']} />);
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
    });

    it('should handle many skills', () => {
      const manySkills = Array(20).fill(null).map((_, i) => `Skill ${i + 1}`);
      const { container } = render(<SkillsGrid skills={manySkills} />);
      const grid = container.querySelector('.grid');
      expect(grid?.children.length).toBe(20);
    });
  });
});
