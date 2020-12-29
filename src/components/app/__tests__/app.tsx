import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import App from '..';

test('can see Available times text', () => {
  render(<App />);
  const el = screen.getByText(/Available times/i);
  expect(el).toBeInTheDocument();
});

test('switch to zh-tw locale', () => {
  render(<App />);

  const zhTWRadio = screen.getByLabelText('繁體中文');
  const enRadio = screen.getByLabelText('English');

  expect(zhTWRadio).toBeInTheDocument();
  expect(enRadio).toBeInTheDocument();

  userEvent.click(zhTWRadio);

  expect(screen.getByText(/授課時間/)).toBeInTheDocument();

  userEvent.click(enRadio);

  expect(screen.getByText(/Available times/)).toBeInTheDocument();
});
