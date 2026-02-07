import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import Contact from './page';

describe('Contact Page', () => {
  it('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  describe('Page Structure', () => {
    it('has main heading', () => {
      render(<Contact />);
      const heading = screen.getByRole('heading', { level: 1, name: 'Get in Touch' });
      expect(heading).toBeInTheDocument();
    });

    it('displays introduction text', () => {
      render(<Contact />);
      expect(screen.getByText(/Have a project in mind/i)).toBeInTheDocument();
    });

    it('has proper heading hierarchy', () => {
      render(<Contact />);
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2s = screen.getAllByRole('heading', { level: 2 });

      expect(h1).toBeInTheDocument();
      expect(h2s.length).toBeGreaterThanOrEqual(3); // Email, Location, Find Me Online
    });
  });

  describe('Contact Information', () => {
    it('displays Email section heading', () => {
      render(<Contact />);
      expect(screen.getByRole('heading', { level: 2, name: 'Email' })).toBeInTheDocument();
    });

    it('displays email address as clickable mailto link', () => {
      render(<Contact />);
      const emailLink = screen.getByText('j.schoolmee@gmail.com');
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', 'mailto:j.schoolmee@gmail.com');
    });

    it('displays Location section heading', () => {
      render(<Contact />);
      expect(screen.getByRole('heading', { level: 2, name: 'Location' })).toBeInTheDocument();
    });

    it('displays location', () => {
      render(<Contact />);
      expect(screen.getByText('Chicago, IL')).toBeInTheDocument();
    });
  });

  describe('Social Media Links', () => {
    it('displays Find Me Online section heading', () => {
      render(<Contact />);
      expect(
        screen.getByRole('heading', { level: 2, name: 'Find Me Online' })
      ).toBeInTheDocument();
    });

    it('displays LinkedIn link', () => {
      render(<Contact />);
      const linkedInLink = screen.getByText('LinkedIn').closest('a');
      expect(linkedInLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/jake-schoolmeesters/'
      );
    });

    it('displays GitHub link', () => {
      render(<Contact />);
      const githubLink = screen.getByText('GitHub').closest('a');
      expect(githubLink).toHaveAttribute('href', 'https://github.com/schooolman');
    });

    it('displays Bluesky link', () => {
      render(<Contact />);
      const blueskyLink = screen.getByText('Bluesky').closest('a');
      expect(blueskyLink).toHaveAttribute('href', 'https://bsky.app/profile/jake.school');
    });

    it('opens LinkedIn link in new tab with security attributes', () => {
      render(<Contact />);
      const linkedInLink = screen.getByText('LinkedIn').closest('a');
      expect(linkedInLink).toHaveAttribute('target', '_blank');
      expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('opens GitHub link in new tab with security attributes', () => {
      render(<Contact />);
      const githubLink = screen.getByText('GitHub').closest('a');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('opens Bluesky link in new tab with security attributes', () => {
      render(<Contact />);
      const blueskyLink = screen.getByText('Bluesky').closest('a');
      expect(blueskyLink).toHaveAttribute('target', '_blank');
      expect(blueskyLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders social media icons', () => {
      render(<Contact />);
      const linkedInLink = screen.getByText('LinkedIn').closest('a');
      const githubLink = screen.getByText('GitHub').closest('a');
      const blueskyLink = screen.getByText('Bluesky').closest('a');

      expect(linkedInLink?.querySelector('svg')).toBeInTheDocument();
      expect(githubLink?.querySelector('svg')).toBeInTheDocument();
      expect(blueskyLink?.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('email link does not open in new tab', () => {
      render(<Contact />);
      const emailLink = screen.getByText('j.schoolmee@gmail.com');
      expect(emailLink).not.toHaveAttribute('target');
    });

    it('all section headings use proper semantic markup', () => {
      render(<Contact />);
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThanOrEqual(3);
    });

    it('has descriptive link text', () => {
      render(<Contact />);
      // Social links use descriptive names, not generic text
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText('GitHub')).toBeInTheDocument();
      expect(screen.getByText('Bluesky')).toBeInTheDocument();

      // No generic "click here" text
      expect(screen.queryByText(/click here/i)).not.toBeInTheDocument();
    });
  });
});
