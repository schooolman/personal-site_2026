import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/Jake Schoolmeesters/i)).toBeInTheDocument();
  });

  it('displays current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('renders LinkedIn link with correct href', () => {
    render(<Footer />);
    const linkedInLink = screen.getByLabelText('LinkedIn');
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/jake-schoolmeesters/'
    );
  });

  it('renders GitHub link with correct href', () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/schooolman'
    );
  });

  it('renders Bluesky link with correct href', () => {
    render(<Footer />);
    const blueskyLink = screen.getByLabelText('Bluesky');
    expect(blueskyLink).toHaveAttribute(
      'href',
      'https://bsky.app/profile/jake.school'
    );
  });

  it('renders Email link with correct mailto href', () => {
    render(<Footer />);
    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:j.schoolmee@gmail.com'
    );
  });

  it('opens LinkedIn link in new tab with security attributes', () => {
    render(<Footer />);
    const linkedInLink = screen.getByLabelText('LinkedIn');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('opens GitHub link in new tab with security attributes', () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('opens Bluesky link in new tab with security attributes', () => {
    render(<Footer />);
    const blueskyLink = screen.getByLabelText('Bluesky');
    expect(blueskyLink).toHaveAttribute('target', '_blank');
    expect(blueskyLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('email link does not open in new tab', () => {
    render(<Footer />);
    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).not.toHaveAttribute('target');
  });

  it('renders contact page link', () => {
    render(<Footer />);
    const contactLink = screen.getByText('Get in touch');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('has proper aria-labels for all social links', () => {
    render(<Footer />);
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('Bluesky')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('includes copyright symbol', () => {
    render(<Footer />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });
});
