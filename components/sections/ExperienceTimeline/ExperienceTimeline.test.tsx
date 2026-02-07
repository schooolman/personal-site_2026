import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { ExperienceTimeline } from './ExperienceTimeline';
import type { ExperienceItem } from '@/data';

describe('ExperienceTimeline Component', () => {
  const mockExperiences: ExperienceItem[] = [
    {
      startYear: '2020',
      endYear: 'Present',
      title: 'Senior Developer',
      company: 'Tech Co',
      location: 'Chicago, IL',
      bullets: ['Led team', 'Built features'],
    },
    {
      startYear: '2018',
      endYear: '2020',
      title: 'Developer',
      company: 'Startup Inc',
      location: 'SF, CA',
      bullets: ['Coded stuff'],
    },
  ];

  describe('Rendering', () => {
    it('should render all experience items', () => {
      render(<ExperienceTimeline experiences={mockExperiences} />);
      expect(screen.getByText('Senior Developer')).toBeInTheDocument();
      expect(screen.getByText('Developer')).toBeInTheDocument();
    });

    it('should render default title', () => {
      render(<ExperienceTimeline experiences={mockExperiences} />);
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('should render custom title when provided', () => {
      render(<ExperienceTimeline experiences={mockExperiences} title="Work History" />);
      expect(screen.getByText('Work History')).toBeInTheDocument();
    });
  });

  describe('Section Structure', () => {
    it('should render as a section', () => {
      const { container } = render(<ExperienceTimeline experiences={mockExperiences} />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have black background', () => {
      const { container } = render(<ExperienceTimeline experiences={mockExperiences} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('bg-black');
    });

    it('should have top border', () => {
      const { container } = render(<ExperienceTimeline experiences={mockExperiences} />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('border-t-4');
    });

    it('should have id attribute when provided', () => {
      const { container } = render(<ExperienceTimeline experiences={mockExperiences} id="experience" />);
      const section = container.querySelector('section');
      expect(section?.id).toBe('experience');
    });
  });

  describe('Timeline Layout', () => {
    it('should have spacing between cards', () => {
      const { container } = render(<ExperienceTimeline experiences={mockExperiences} />);
      const timeline = container.querySelector('.space-y-8');
      expect(timeline).toBeInTheDocument();
    });

    it('should render correct number of cards', () => {
      render(<ExperienceTimeline experiences={mockExperiences} />);
      expect(screen.getByText(/Tech Co/)).toBeInTheDocument();
      expect(screen.getByText(/Startup Inc/)).toBeInTheDocument();
    });
  });

  describe('Scroll Reveal', () => {
    it('should wrap each card in a scroll reveal wrapper', () => {
      const { container } = render(<ExperienceTimeline experiences={mockExperiences} />);
      const wrappers = container.querySelectorAll('.scroll-reveal-hidden');
      expect(wrappers.length).toBe(mockExperiences.length);
    });

    it('should apply staggered delay to each card', () => {
      const { container } = render(<ExperienceTimeline experiences={mockExperiences} />);
      const wrappers = container.querySelectorAll('.scroll-reveal-hidden');
      // First card: delay 0 (no inline style)
      expect((wrappers[0] as HTMLElement).style.transitionDelay).toBe('');
      // Second card: delay 150ms
      expect((wrappers[1] as HTMLElement).style.transitionDelay).toBe('150ms');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty experiences array', () => {
      const { container } = render(<ExperienceTimeline experiences={[]} />);
      const timeline = container.querySelector('.space-y-8');
      expect(timeline).toBeInTheDocument();
      expect(timeline?.children.length).toBe(0);
    });

    it('should handle single experience', () => {
      render(<ExperienceTimeline experiences={[mockExperiences[0]]} />);
      expect(screen.getByText('Senior Developer')).toBeInTheDocument();
      expect(screen.queryByText('Developer')).not.toBeInTheDocument();
    });
  });
});
