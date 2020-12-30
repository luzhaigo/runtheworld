import React, { FC, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'styles/helpers/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export type Props = RTW.Button<{
  loading?: boolean;
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

const Icon = styled(({ loading, ...rest }) => <FontAwesomeIcon {...rest} />)<{
  loading?: boolean;
}>`
  && {
    transition: width 0.5s, margin-right 0.5s;
    width: ${(props) => (props.loading ? undefined : '0')};
    margin-right: ${(props) => (props.loading ? '4px' : '0')};
    ${(props) =>
      props.loading === false &&
      css`
        path {
          display: none;
        }
      `}
  }
`;

const Button: FC<Props> = ({
  children,
  loading = false,
  disabled,
  innerRef,
  primary = false,
  ...rest
}) => {
  return (
    <Btn
      {...rest}
      ref={innerRef}
      disabled={loading || disabled}
      primary={primary}
    >
      <Icon icon={faSpinner} spin={loading} loading={loading} /> {children}
    </Btn>
  );
};

export default Button;
