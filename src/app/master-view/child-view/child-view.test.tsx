import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import ChildView from './child-view';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders ChildView component', () => {
  const wrapper = render(<ChildView />);
  expect(wrapper).toBeTruthy();
});