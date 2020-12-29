import { createGlobalStyle } from 'styled-components';
import { Color } from 'styles/helpers/color';

export default createGlobalStyle`
html {
  font-size: 16px;
  background-color: ${Color.white};
}
body {
  color: #484848;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
}
`;
