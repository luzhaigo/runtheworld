import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import Button from '..';

test('button in the document', () => {
  render(<Button>Amazing talker</Button>);

  expect(screen.getByText(/amazing talker/i)).toBeInTheDocument();
});

test('button can be clicked', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Amazing talker</Button>);

  const button = screen.getByText(/amazing talker/i);

  expect(onClick).toHaveBeenCalledTimes(0);

  userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});
