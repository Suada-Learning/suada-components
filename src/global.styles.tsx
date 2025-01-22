import { createGlobalStyle, css } from "styled-components";

export const Typography = ({
  fontStyle,
}: {
  fontStyle: keyof typeof theme.typography;
}): ReturnType<typeof css> => css`
  font-size: ${theme.typography[fontStyle].fontSize};
  line-height: ${theme.typography[fontStyle].lineHeight};
  font-weight: ${theme.typography[fontStyle].fontWeight};
`;

export const theme = {
  typography: {
    titleL: {
      fontSize: "32px",
      fontWeight: "700",
      lineHeight: "48px",
    },
    titleB: {
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "42px",
    },
    titleM: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "36px",
    },
    titleS: {
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "30px",
    },
    bodyB: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "27px",
    },
    bodyM: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
    },
    bodyS: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "21px",
    },
    labelL: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "27px",
    },
    labelM: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
    },
    labelS: {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "21px",
    },
    descriptor: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --brand-colors-accent: #08C694;
    --level-accent-900: #1F7A60;
    --level-accent-800: #218F6F;
    --level-accent-700: #12A37A;
    --level-accent-600: #51B89A;
    --level-accent-500: #72C4AC;
    --level-accent-400: #A4DFCE;
    --level-accent-300: #BEE4D9;
    --level-accent-200: #D3EEE6;
    --level-accent-100: #EAF5F2;
    --level-accent-50: #ECF9F5;
    --brand-colors-primary: #0074D9;
    --level-primary-900: #0D406E;
    --level-primary-800: #15568E;
    --level-primary-700: #1E76C3;
    --level-primary-600: #3C95E2;
    --level-primary-500: #8EB8DE;
    --level-primary-400: #B6D4EF;
    --level-primary-300: #D1E2F2;
    --level-primary-200: #E7F0F7;
    --level-primary-100: #F2F7FB;
    --level-primary-50: #F7FAFC;
    --brand-colors-secondary: #8438C6;
    --level-secondary-900: #562E7A;
    --level-secondary-800: #6B428F;
    --level-secondary-700: #8058A3;
    --level-secondary-600: #9671B8;
    --level-secondary-500: #AD8BCC;
    --level-secondary-400: #CEAFE8;
    --level-secondary-300: #DAC3EE;
    --level-secondary-200: #E6D7F4;
    --level-secondary-100: #F3EBF9;
    --level-secondary-50: #F5EFFA;
    --brand-colors-tertiary: #20A8C6;
    --level-tertiary-900: #206A7A;
    --level-tertiary-800: #337E8F;
    --level-tertiary-700: #4A93A3;
    --level-tertiary-600: #64A9B8;
    --level-tertiary-500: #80BECC;
    --level-tertiary-400: #A5DCE8;
    --level-tertiary-300: #BBE5EE;
    --level-tertiary-200: #D2EEF4;
    --level-tertiary-100: #E8F6F9;
    --level-tertiary-50: #EDF8FA;
    --neutral-colors-dark: #020210;
    --level-dark-900: #1C1B2C;
    --level-dark-800: #353543;
    --level-dark-700: #4F4E5B;
    --level-dark-600: #686772;
    --level-dark-500: #818089;
    --level-dark-400: #9A9AA1;
    --level-dark-300: #B3B3B8;
    --level-dark-200: #CDCCD0;
    --level-dark-100: #E6E6E7;
    --level-dark-50: #EBEBEC;
    --neutral-colors-light: #FFF;
    --neutral-colors-grey: #676F7A;
    --level-grey-900: #2F3237;
    --level-grey-800: #3E4147;
    --level-grey-700: #565A62;
    --level-grey-600: #6E707D;
    --level-grey-500: #888A96;
    --level-grey-400: #9CA1AB;
    --level-grey-300: #AEB5C1;
    --level-grey-200: #D6DAE0;
    --level-grey-100: #E7E9ED;
    --level-grey-50: #EDEEF2;
    --system-colors-negative: #EA382A;
    --level-negative-900: #691811;
    --level-negative-800: #97332B;
    --level-negative-700: #C7493D;
    --level-negative-600: #E9685D;
    --level-negative-500: #E5908A;
    --level-negative-400: #F7AFA9;
    --level-negative-300: #F9C3BF;
    --level-negative-200: #FBD7D4;
    --level-negative-100: #FDEBEA;
    --level-negative-50: #FDEFEE;
    --system-colors-notice: #F68524;
    --level-notice-900: #7A481D;
    --level-notice-800: #8F5A2E;
    --level-notice-700: #8F613A;
    --level-notice-600: #B8865B;
    --level-notice-500: #CC9E76;
    --level-notice-400: #FBCEA7;
    --level-notice-300: #FCDABD;
    --level-notice-200: #FDE7D3;
    --level-notice-100: #FEF3E9;
    --level-notice-50: #FEF5ED;
    --system-colors-positive: #00905E;
    --level-positive-900: #157A57;
    --level-positive-800: #2C8F6C;
    --level-positive-700: #47A383;
    --level-positive-600: #64B89A;
    --level-positive-500: #83CCB2;
    --level-positive-400: #99D2BE;
    --level-positive-300: #B2DDCE;
    --level-positive-200: #CCE9DF;
    --level-positive-100: #E5F4EF;
    --level-positive-50: #EBF6F2;
    --system-colors-informative: #3892F4;
    --level-informative-900: #264F7A;
    --level-informative-800: #38628F;
    --level-informative-700: #4D76A3;
    --level-informative-600: #658DB8;
    --level-informative-500: #7FA5CC;
    --level-informative-400: #AFD3FA;
    --level-informative-300: #C3DEFB;
    --level-informative-200: #D7E9FD;
    --level-informative-100: #EBF4FE;
    --level-informative-50: #EFF6FE;
    --more-colors-accent-light: #C2E6C6;
    --more-colors-primary-light: #CEDDF4;
    --more-colors-tertiary-light: #DAE7EB;
    --more-colors-secondary-light: #E2C4EC;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-size: 14px;
    line-height: 24px;
    color: var(--neutral-colors-light);
    font-family: 'Open Sans', sans-serif;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    ${localStorage.getItem("isRTLActive") === "true" && "direction: rtl;"}
  }
  ul,
  li,
  p,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  button,
  nav,
  a {
    padding: 0;
    margin: 0;
    list-style: none;
    font-weight: normal;
    text-decoration: none;
  }
  input,
  textarea {
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }

  .Toastify__toast-body {
    padding: 4px 16px 4px 8px !important;
    margin: 0 !important;
  }
  
  .Toastify__toast-container {
    width: fit-content !important;
    min-width: 320px !important;;
    max-width: 600px !important;;
  }
  
  .Toastify__toast {
    color: var(--neutral-colors-Light, #FFF) !important;
    align-items: center !important;
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 24px !important;
    min-height: auto !important;
  }

  .Toastify__toast-icon {
    margin-inline-end: 16px !important;
  }

  .notification-toast-icon-svg {    
    flex-shrink: 0;
    
    path {
      fill: var(--neutral-colors-light, '#FFF');
    }
  }
`;
