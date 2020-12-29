import React, { FC, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'styles/helpers/color';

export type Props = AT.Button<{
  primary?: boolean;
  innerRef?: RefObject<HTMLButtonElement>;
}>;

const Btn = styled.button<{ primary?: boolean }>`
  &,
  &:focus {
    outline: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  ${(props) =>
    props.primary
      ? css`
          border: 1px solid ${Color.primary};
          background-color: ${Color.primary};
          color: ${Color.white};
        `
      : css`
          border: 1px solid ${Color['dim-gray']};
          background-color: ${Color.white};
          color: ${Color['dim-gray']};
        `}
  font-weight: 500;
  &:disabled {
    cursor: not-allowed;
    background-color: ${Color.disabled};
    background-image: none;
    border: 1px solid ${Color.disabled};
    color: ${Color.white};
  }
`;

const Button: FC<Props> = ({
  children,
  disabled,
  innerRef,
  primary = false,
  ...rest
}) => {
  return (
    <Btn {...rest} ref={innerRef} disabled={disabled} primary={primary}>
      {children}
    </Btn>
  );
};

export default Button;
