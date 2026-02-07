import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollReveal } from './useScrollReveal';

// Mock IntersectionObserver
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

describe('useScrollReveal', () => {
  it('should return isVisible as false initially', () => {
    const { result } = renderHook(() => useScrollReveal());
    expect(result.current.isVisible).toBe(false);
  });

  it('should return a ref', () => {
    const { result } = renderHook(() => useScrollReveal());
    expect(result.current.ref).toBeDefined();
  });

  it('should set isVisible to true when intersection fires', () => {
    const { result } = renderHook(() => useScrollReveal());

    // Simulate assigning the ref to a DOM element
    const element = document.createElement('div');
    act(() => {
      (result.current.ref as React.MutableRefObject<HTMLDivElement | null>).current = element;
    });

    // Simulate intersection
    act(() => {
      observerCallback(
        [{ isIntersecting: true, target: element } as IntersectionObserverEntry],
        mockObserverInstance as unknown as IntersectionObserver
      );
    });

    expect(result.current.isVisible).toBe(true);
  });

  it('should disconnect observer on unmount', () => {
    const { unmount } = renderHook(() => useScrollReveal());
    unmount();
    expect(mockObserverInstance.disconnect).toHaveBeenCalled();
  });

  it('should disconnect observer after first intersection when triggerOnce is true', () => {
    const { result } = renderHook(() =>
      useScrollReveal({ triggerOnce: true })
    );

    const element = document.createElement('div');
    act(() => {
      (result.current.ref as React.MutableRefObject<HTMLDivElement | null>).current = element;
    });

    act(() => {
      observerCallback(
        [{ isIntersecting: true, target: element } as IntersectionObserverEntry],
        mockObserverInstance as unknown as IntersectionObserver
      );
    });

    expect(result.current.isVisible).toBe(true);
    expect(mockObserverInstance.disconnect).toHaveBeenCalled();
  });

  it('should not disconnect observer after intersection when triggerOnce is false', () => {
    const { result } = renderHook(() =>
      useScrollReveal({ triggerOnce: false })
    );

    const element = document.createElement('div');
    act(() => {
      (result.current.ref as React.MutableRefObject<HTMLDivElement | null>).current = element;
    });

    act(() => {
      observerCallback(
        [{ isIntersecting: true, target: element } as IntersectionObserverEntry],
        mockObserverInstance as unknown as IntersectionObserver
      );
    });

    expect(result.current.isVisible).toBe(true);
    expect(mockObserverInstance.disconnect).not.toHaveBeenCalled();
  });

  it('should use default threshold of 0.5', () => {
    renderHook(() => useScrollReveal());
    expect(IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({ threshold: 0.5 })
    );
  });

  it('should accept custom threshold', () => {
    renderHook(() => useScrollReveal({ threshold: 0.5 }));
    expect(IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({ threshold: 0.5 })
    );
  });
});
