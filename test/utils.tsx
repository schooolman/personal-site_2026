import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Custom render function with common providers (if needed in future)
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  // Future: Add providers here (ThemeProvider, etc.)
  return render(ui, { ...options });
};

export * from '@testing-library/react';
export { customRender as render };
