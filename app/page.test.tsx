import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import Home from './page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Jake Schoolmeesters')).toBeInTheDocument();
  });

  describe('Hero Section', () => {
    it('displays main heading with correct level', () => {
      render(<Home />);
      const heading = screen.getByRole('heading', {
        level: 1,
        name: 'Jake Schoolmeesters',
      });
      expect(heading).toBeInTheDocument();
    });

    it('displays subtitle tagline', () => {
      render(<Home />);
      expect(screen.getByText(/Chicago.*Code.*Cycling/)).toBeInTheDocument();
    });

    it('renders profile image with correct alt text', () => {
      render(<Home />);
      const image = screen.getByAltText('Jake Schoolmeesters');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/jake_selfie_scotland_small.jpeg');
    });

    it('displays introduction text', () => {
      render(<Home />);
      expect(screen.getByText(/Welcome to my small space on the internet/i)).toBeInTheDocument();
    });

    it('displays Get in Touch CTA button', () => {
      render(<Home />);
      const ctaButton = screen.getByRole('link', { name: /get in touch/i });
      expect(ctaButton).toHaveAttribute('href', '/contact');
    });

    it('displays View Experience anchor link', () => {
      render(<Home />);
      const experienceLink = screen.getByRole('link', { name: /view experience/i });
      expect(experienceLink).toHaveAttribute('href', '#experience');
    });
  });

  describe('Experience Section', () => {
    it('displays Experience section heading', () => {
      render(<Home />);
      expect(
        screen.getByRole('heading', { level: 2, name: 'Experience' })
      ).toBeInTheDocument();
    });

    it('displays all companies', () => {
      render(<Home />);
      expect(screen.getAllByText(/Subway/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Bounteous/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/ICF Next/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/SportsEngine/).length).toBeGreaterThan(0);
    });

    it('displays current position at Subway', () => {
      render(<Home />);
      expect(screen.getAllByText('Senior AEM Software Engineer').length).toBeGreaterThan(0);
      expect(screen.getAllByText(/2025/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Present/).length).toBeGreaterThan(0);
    });

    it('displays previous position at ICF Next', () => {
      render(<Home />);
      expect(screen.getByText('Front End Developer AEM')).toBeInTheDocument();
      expect(screen.getAllByText(/2018/).length).toBeGreaterThan(0);
    });

    it('displays first position at SportsEngine', () => {
      render(<Home />);
      expect(screen.getByText('Front End Developer')).toBeInTheDocument();
      expect(screen.getAllByText(/2016/).length).toBeGreaterThan(0);
    });

    it('displays location for all positions', () => {
      render(<Home />);
      expect(screen.getAllByText(/Chicago, IL/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Minneapolis, MN/).length).toBeGreaterThan(0);
    });
  });

  describe('Skills Section', () => {
    it('displays Skills section heading', () => {
      render(<Home />);
      expect(
        screen.getByRole('heading', { level: 2, name: /Skills & Technologies/i })
      ).toBeInTheDocument();
    });

    it('displays AEMaaCS skill', () => {
      render(<Home />);
      expect(screen.getByText('AEMaaCS')).toBeInTheDocument();
    });

    it('displays React skill', () => {
      render(<Home />);
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('displays Next.js skill', () => {
      render(<Home />);
      expect(screen.getByText('Next.js')).toBeInTheDocument();
    });

    it('displays TypeScript skill', () => {
      render(<Home />);
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });

    it('displays JavaScript skill', () => {
      render(<Home />);
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
    });

    it('displays HTML skill', () => {
      render(<Home />);
      expect(screen.getByText('HTML')).toBeInTheDocument();
    });

    it('displays CSS skill', () => {
      render(<Home />);
      expect(screen.getByText('CSS / SCSS')).toBeInTheDocument();
    });

    it('displays Accessibility skill', () => {
      render(<Home />);
      expect(screen.getByText('Accessibility (WCAG)')).toBeInTheDocument();
    });
  });

  describe('Call to Action Section', () => {
    it('displays CTA heading', () => {
      render(<Home />);
      expect(
        screen.getByRole('heading', { level: 2, name: /Let's Work Together/i })
      ).toBeInTheDocument();
    });

    it('displays CTA description', () => {
      render(<Home />);
      expect(screen.getByText(/Interested in working together/i)).toBeInTheDocument();
    });

    it('displays Contact Me button', () => {
      render(<Home />);
      const contactButton = screen.getByRole('link', { name: /contact me/i });
      expect(contactButton).toHaveAttribute('href', '/contact');
    });
  });

  describe('Structured Data', () => {
    it('includes JSON-LD structured data', () => {
      const { container } = render(<Home />);
      const script = container.querySelector('script[type="application/ld+json"]');
      expect(script).toBeInTheDocument();

      if (script?.textContent) {
        const jsonLd = JSON.parse(script.textContent);
        expect(jsonLd['@type']).toBe('Person');
        expect(jsonLd.name).toBe('Jake Schoolmeesters');
        expect(jsonLd.jobTitle).toBe('Senior AEM Software Engineer');
        expect(jsonLd.email).toBe('j.schoolmee@gmail.com');
      }
    });

    it('includes social media links in structured data', () => {
      const { container } = render(<Home />);
      const script = container.querySelector('script[type="application/ld+json"]');

      if (script?.textContent) {
        const jsonLd = JSON.parse(script.textContent);
        expect(jsonLd.sameAs).toContain('https://www.linkedin.com/in/jake-schoolmeesters/');
        expect(jsonLd.sameAs).toContain('https://github.com/schooolman');
        expect(jsonLd.sameAs).toContain('https://bsky.app/profile/jake.school');
      }
    });

    it('includes address in structured data', () => {
      const { container } = render(<Home />);
      const script = container.querySelector('script[type="application/ld+json"]');

      if (script?.textContent) {
        const jsonLd = JSON.parse(script.textContent);
        expect(jsonLd.address['@type']).toBe('PostalAddress');
        expect(jsonLd.address.addressLocality).toBe('Chicago');
        expect(jsonLd.address.addressRegion).toBe('IL');
        expect(jsonLd.address.addressCountry).toBe('US');
      }
    });

    it('includes skills in structured data', () => {
      const { container } = render(<Home />);
      const script = container.querySelector('script[type="application/ld+json"]');

      if (script?.textContent) {
        const jsonLd = JSON.parse(script.textContent);
        expect(jsonLd.knowsAbout).toContain('Adobe Experience Manager');
        expect(jsonLd.knowsAbout).toContain('React');
        expect(jsonLd.knowsAbout).toContain('Next.js');
        expect(jsonLd.knowsAbout).toContain('TypeScript');
      }
    });
  });

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<Home />);
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2s = screen.getAllByRole('heading', { level: 2 });

      expect(h1).toBeInTheDocument();
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('has descriptive link text', () => {
      render(<Home />);
      // No generic "click here" or "read more" links
      expect(screen.queryByText(/click here/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/read more/i)).not.toBeInTheDocument();
    });
  });
});
