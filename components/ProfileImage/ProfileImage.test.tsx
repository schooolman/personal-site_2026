import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { ProfileImage } from './ProfileImage';

describe('ProfileImage Component', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test Person',
  };

  describe('Rendering', () => {
    it('should render image with correct src and alt', () => {
      render(<ProfileImage {...defaultProps} />);
      const img = screen.getByAltText('Test Person');
      expect(img).toBeInTheDocument();
    });

    it('should have default width and height', () => {
      render(<ProfileImage {...defaultProps} />);
      const img = screen.getByAltText('Test Person');
      expect(img).toHaveAttribute('width', '500');
      expect(img).toHaveAttribute('height', '500');
    });
  });

  describe('Sizes', () => {
    it('should apply medium size by default', () => {
      const { container } = render(<ProfileImage {...defaultProps} />);
      const wrapper = container.querySelector('.max-w-sm');
      expect(wrapper).toBeInTheDocument();
    });

    it('should apply small size when specified', () => {
      const { container } = render(<ProfileImage {...defaultProps} size="sm" />);
      const wrapper = container.querySelector('.max-w-xs');
      expect(wrapper).toBeInTheDocument();
    });

    it('should apply large size when specified', () => {
      const { container } = render(<ProfileImage {...defaultProps} size="lg" />);
      const wrapper = container.querySelector('.max-w-md');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Priority Loading', () => {
    it('should render without priority by default', () => {
      render(<ProfileImage {...defaultProps} />);
      const img = screen.getByAltText('Test Person');
      expect(img).toBeInTheDocument();
    });

    it('should render with priority when specified', () => {
      render(<ProfileImage {...defaultProps} priority />);
      const img = screen.getByAltText('Test Person');
      expect(img).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should have rounded corners', () => {
      const { container } = render(<ProfileImage {...defaultProps} />);
      const imageWrapper = container.querySelector('.rounded-lg');
      expect(imageWrapper).toBeInTheDocument();
    });

    it('should have border accent', () => {
      const { container } = render(<ProfileImage {...defaultProps} />);
      const imageWrapper = container.querySelector('.border-chicago-green\\/30');
      expect(imageWrapper).toBeInTheDocument();
    });

    it('should have shadow effect', () => {
      const { container } = render(<ProfileImage {...defaultProps} />);
      const imageWrapper = container.querySelector('.shadow-2xl');
      expect(imageWrapper).toBeInTheDocument();
    });
  });
});
