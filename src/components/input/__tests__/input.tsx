import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import Input from '..';

test('aria-label prop', () => {
  render(<Input aria-label="123" />);

  expect(screen.getByLabelText('123')).toBeInTheDocument();
});

test('placeholder prop', () => {
  render(<Input placeholder="456" />);

  expect(screen.getByPlaceholderText('456')).toBeInTheDocument();
});

test('can type the text', () => {
  render(<Input placeholder="456" />);

  const input = screen.getByPlaceholderText('456');

  userEvent.type(input, '789');

  expect((input as HTMLInputElement).value).toBe('789');
});
