import { css } from '@emotion/core';
import resetCss from './resetCss';


const baseCSS = css`
  * {
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
  }
  ${resetCss}
`;

export default baseCSS;