import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const InlineBlock = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  * {
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin-right: 8px;
`;

const RadioButton: FC<Props> = ({
  label,
  value,
  name,
  checked,
  onChange = () => {},
  className,
}) => {
  return (
    <InlineBlock className={className}>
      <Input
        value={value}
        type="radio"
        name={name}
        onChange={onChange}
        checked={checked}
        aria-label={label}
      />
      <label htmlFor={name}>{label}</label>
    </InlineBlock>
  );
};

export default RadioButton;
