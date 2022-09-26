import { css } from "styled-components";

// custom size: 30em = 480px
export const xs = (props) => {
  return css`
    @media screen and (max-width: 30em) {
      ${props}
    }
  `;
};

// custom size: 37.5em = 600px
export const mobile = (props) => {
  return css`
    @media screen and (max-width: 37.5em) {
      ${props}
    }
  `;
};

// 48em = 768px
export const tablet = (props) => {
  return css`
    @media screen and (max-width: 48em) {
      ${props}
    }
  `;
};

// 64em = 1024px
export const labtop = (props) => {
  return css`
    @media screen and (max-width: 64em) {
      ${props}
    }
  `;
};

// 75em = 1200px
export const desktop = (props) => {
  return css`
    @media screen and (max-width: 75em) {
      ${props}
    }
  `;
};

// +1200px
export const large = (props) => {
  return css`
    @media screen and (min-width: 76em) {
      ${props}
    }
  `;
};
