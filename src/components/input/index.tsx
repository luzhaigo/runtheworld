import styled from 'styled-components';
import { Color } from 'styles/helpers/color';

const Input = styled.input`
  width: 100%;
  color: ${Color.charcoal};
  border-radius: 4px;
  border: 1px solid ${Color['dark-gray']};
  padding: 14px 12px;
  background: ${Color.white};
  &::placeholder {
    color: ${Color.silver};
  }
`;

export default Input;
