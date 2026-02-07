import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@/test/utils';
import { ScrollReveal } from './ScrollReveal';

let observerCallback: IntersectionObserverCallback;
let mockObserverInstance: {
  observe: ReturnType<typeof vi.fn>;
  unobserve: ReturnType<typeof vi.fn>;
  disconnect: ReturnType<typeof vi.fn>;
};

beforeEach(() => {
  mockObserverInstance = {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };

  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn((callback: IntersectionObserverCallback) => {
      observerCallback = callback;
      return mockObserverInstance;
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('ScrollReveal Component', () => {
  it('should render children', () => {
    render(
      <ScrollReveal>
        <p>Hello World</p>
      </ScrollReveal>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should start with hidden class', () => {
    const { container } = render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('scroll-reveal-hidden');
    expect(wrapper).not.toHaveClass('scroll-reveal-visible');
  });

  it('should add visible class when intersecting', () => {
    const { container } = render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild;

    act(() => {
      observerCallback(
        [{ isIntersecting: true, target: wrapper } as IntersectionObserverEntry],
        mockObserverInstance as unknown as IntersectionObserver
      );
    });

    expect(wrapper).toHaveClass('scroll-reveal-visible');
    expect(wrapper).not.toHaveClass('scroll-reveal-hidden');
  });

  it('should apply transition-delay from delay prop', () => {
    const { container } = render(
      <ScrollReveal delay={300}>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.transitionDelay).toBe('300ms');
  });

  it('should not apply transition-delay when delay is 0', () => {
    const { container } = render(
      <ScrollReveal delay={0}>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.style.transitionDelay).toBe('');
  });

  it('should pass through className', () => {
    const { container } = render(
      <ScrollReveal className="my-custom-class">
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('my-custom-class');
  });
});
