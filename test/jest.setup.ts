import '@testing-library/jest-dom';

// @radix-ui/react-popover uses resizeobserver, which is not supported in jsdom.
// This is a simple mock to not break the tests.
class ResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}
window.ResizeObserver = ResizeObserver;
