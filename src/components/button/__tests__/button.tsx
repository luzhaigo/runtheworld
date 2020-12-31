import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import Button from '..';

test('button in the document', () => {
  render(<Button>Run The World</Button>);

  expect(screen.getByText(/run the world/i)).toBeInTheDocument();
});

test('button can be clicked', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Run The World</Button>);

  const button = screen.getByText(/run the world/i);

  expect(onClick).toHaveBeenCalledTimes(0);

  userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('button can not be clicked when it is disabled', () => {
  const onClick = jest.fn();
  render(
    <Button disabled onClick={onClick}>
      Run The World
    </Button>,
  );

  const button = screen.getByText(/run the world/i);

  expect(onClick).toHaveBeenCalledTimes(0);

  userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(0);
});

test('button can not be clicked when it is loading', () => {
  const onClick = jest.fn();
  render(
    <Button loading onClick={onClick}>
      Run The World
    </Button>,
  );

  const button = screen.getByText(/run the world/i);

  expect(onClick).toHaveBeenCalledTimes(0);

  userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(0);
});
