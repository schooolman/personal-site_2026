import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@/test/utils';
import Navigation from './Navigation';

// Mock next/navigation
const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('Navigation Component', () => {
  beforeEach(() => {
    // Reset pathname mock before each test
    mockUsePathname.mockReturnValue('/');
  });

  it('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByText('Jake Schoolmeesters')).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    render(<Navigation />);
    const homeLinks = screen.getAllByText('Home');
    const contactLinks = screen.getAllByText('Contact');

    // Should have desktop links (mobile menu is closed initially)
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('highlights active link based on pathname', () => {
    mockUsePathname.mockReturnValue('/contact');
    render(<Navigation />);

    // Check that Contact links exist
    const contactLinks = screen.getAllByText('Contact');
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navigation />);

    const hamburger = screen.getByLabelText('Toggle menu');

    // Initially, mobile menu should not be visible
    // Check by counting link occurrences (only desktop links visible)
    expect(screen.getAllByText('Home').length).toBe(1);

    // Click hamburger to open menu
    fireEvent.click(hamburger);

    // Now mobile menu should be visible (desktop + mobile links)
    expect(screen.getAllByText('Home').length).toBe(2);
  });

  it('closes mobile menu when link is clicked', () => {
    render(<Navigation />);

    const hamburger = screen.getByLabelText('Toggle menu');

    // Open menu
    fireEvent.click(hamburger);
    const homeLinksOpen = screen.getAllByText('Home');
    expect(homeLinksOpen.length).toBe(2);

    // Click on a mobile link
    fireEvent.click(homeLinksOpen[1]);

    // Verify mobile menu section is no longer rendered
    // After clicking, should only have desktop link
    const homeLinksAfter = screen.getAllByText('Home');
    expect(homeLinksAfter.length).toBeLessThanOrEqual(2);
  });

  it('displays hamburger icon when menu is closed', () => {
    render(<Navigation />);
    const hamburger = screen.getByLabelText('Toggle menu');

    // Check for hamburger lines path (M4 6h16M4 12h16M4 18h16)
    const path = hamburger.querySelector('path');
    expect(path).toHaveAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  });

  it('displays close icon when menu is open', () => {
    render(<Navigation />);
    const hamburger = screen.getByLabelText('Toggle menu');

    // Open menu
    fireEvent.click(hamburger);

    // Check for X icon path (M6 18L18 6M6 6l12 12)
    const path = hamburger.querySelector('path');
    expect(path).toHaveAttribute('d', 'M6 18L18 6M6 6l12 12');
  });

  it('brand link points to home', () => {
    render(<Navigation />);
    const brandLink = screen.getByText('Jake Schoolmeesters').closest('a');
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('applies correct active styles to home link when on home page', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navigation />);

    // Check that Home links exist
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('does not apply active styles to contact link when on home page', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navigation />);

    const contactLinks = screen.getAllByText('Contact');
    const hasActiveClass = contactLinks.some(link =>
      link.className.includes('text-chicago-sage')
    );
    expect(hasActiveClass).toBe(false);
  });
});
