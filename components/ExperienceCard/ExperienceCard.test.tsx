import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { ExperienceCard } from './ExperienceCard';
import type { ExperienceItem } from '@/data';

describe('ExperienceCard Component', () => {
  const mockJob: ExperienceItem = {
    startYear: '2020',
    endYear: 'Present',
    title: 'Senior Front End Developer',
    company: 'Tech Company',
    location: 'Chicago, IL',
    bullets: [
      'Led development initiatives',
      'Mentored junior developers',
      'Improved performance by 50%',
    ],
  };

  describe('Rendering', () => {
    it('should render job title', () => {
      render(<ExperienceCard job={mockJob} />);
      expect(screen.getByText('Senior Front End Developer')).toBeInTheDocument();
    });

    it('should render company and location', () => {
      render(<ExperienceCard job={mockJob} />);
      expect(screen.getByText(/Tech Company/)).toBeInTheDocument();
      expect(screen.getByText(/Chicago, IL/)).toBeInTheDocument();
    });

    it('should render date range', () => {
      render(<ExperienceCard job={mockJob} />);
      expect(screen.getByText(/2020/)).toBeInTheDocument();
      expect(screen.getByText(/Present/)).toBeInTheDocument();
    });

    it('should render all bullet points', () => {
      render(<ExperienceCard job={mockJob} />);
      expect(screen.getByText('Led development initiatives')).toBeInTheDocument();
      expect(screen.getByText('Mentored junior developers')).toBeInTheDocument();
      expect(screen.getByText('Improved performance by 50%')).toBeInTheDocument();
    });
  });

  describe('Semantic Structure', () => {
    it('should render title as h3 heading', () => {
      render(<ExperienceCard job={mockJob} />);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading.textContent).toBe('Senior Front End Developer');
    });

    it('should render bullets as list items', () => {
      const { container } = render(<ExperienceCard job={mockJob} />);
      const listItems = container.querySelectorAll('li');
      expect(listItems.length).toBe(3);
    });

    it('should have proper list structure', () => {
      const { container } = render(<ExperienceCard job={mockJob} />);
      const ul = container.querySelector('ul');
      expect(ul).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should apply border accent styles', () => {
      const { container } = render(<ExperienceCard job={mockJob} />);
      const card = container.querySelector('[class*="border-l-"]');
      expect(card).toBeInTheDocument();
      expect(card?.className).toContain('border-neon-lime');
    });
  });

  describe('Edge Cases', () => {
    it('should handle single bullet point', () => {
      const jobWithOneBullet: ExperienceItem = {
        ...mockJob,
        bullets: ['Single responsibility'],
      };
      render(<ExperienceCard job={jobWithOneBullet} />);
      expect(screen.getByText('Single responsibility')).toBeInTheDocument();
    });

    it('should handle many bullet points', () => {
      const jobWithManyBullets: ExperienceItem = {
        ...mockJob,
        bullets: Array(10).fill('Task item'),
      };
      const { container } = render(<ExperienceCard job={jobWithManyBullets} />);
      const listItems = container.querySelectorAll('li');
      expect(listItems.length).toBe(10);
    });
  });
});
