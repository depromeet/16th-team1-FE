import GeneralSans from '@assets/fonts/GeneralSans-Variable.woff2';
import Pretendard from '@assets/fonts/PretendardVariable.woff2';
import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: GeneralSans;
    src: url(${GeneralSans}) format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }

  @font-face {
    font-family: Pretendard;
    src: url(${Pretendard}) format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  input,
  label {
    font-size: inherit;
    line-height: 1.1;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section,
  picture,
  source {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    font-weight: normal;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    vertical-align: bottom;
  }

  input,
  button {
    border-radius: 0;
  }

  input,
  textarea,
  select,
  button {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }

  button,
  input[type='button'],
  input[type='submit'] {
    cursor: pointer;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    text-size-adjust: none;
    font-family:
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Malgun Gothic',
      sans-serif;
  }
`;
