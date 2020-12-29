import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioButton from '..';

test('radio button label exists', () => {
  render(
    <RadioButton
      label="English"
      name="English"
      value="English"
      checked={false}
    />,
  );
  expect(screen.getByText(/english/i)).toBeInTheDocument();
});

const Test = () => {
  const [checked, setChecked] = useState(false);
  return (
    <RadioButton
      label="English"
      name="English"
      value="English"
      checked={checked}
      onChange={() => setChecked(true)}
    />
  );
};

test('radio button can be clicked', () => {
  render(<Test />);

  const input = screen.getByLabelText(/english/i);

  expect(input).not.toBeChecked();

  userEvent.click(input);

  expect(input).toBeChecked();
});
