import{d as o}from"./createTheme-BTfVaJ7I.js";const e=o.div`
  position: relative;
  font-family: sans-serif;
  background-color: white;

  &.full {
    width: 100%;
  }

  p:not(:first-child) {
    position: absolute;
    left: -10px;
    bottom: -24px;
  }

  .MuiFormLabel-root,
  .MuiFormLabel-root,
  fieldset,
  input {
    ${({$iconInStart:t})=>t?"padding-left: 40px;":"padding-right: 40px;"};
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #d32f2f !important;
  }

  button {
    position: absolute;
    ${({$iconInStart:t})=>t?"left: 5px;":"right: 5px;"};
    top: 50%;
    transform: translateY(-50%);
    padding: 5px;
  }
`,r=o.div`
  position: absolute;
  bottom: -10px;
  transform: translateY(-50%);
  right: 6px;
  width: unset !important;

  &.error svg {
    color: red;
  }

  &.valid svg {
    color: green;
  }
`,n=o.div`
  position: absolute;
  top: 0px;
  right: 4px;
  z-index: 2;
  .btn--small {
    overflow: initial !important;
  }
`,p=o.div`
  width: max-content;
  font-size: 12px;
  color: #68707a;
  margin-top: 5px;
  margin-left: 5px;
  position: absolute;
  bottom: -20px;
  right: 6px;
`;o.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  min-height: 40px;
  outline: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  transition:
    border 0.3s ease-in,
    box-shadow 0.3s ease-in;

  &:focus {
    border: 1px solid #06c68f;
    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  }
`;o.textarea`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  min-height: 40px;
  resize: none;
  outline: none;
  padding: 10px;
  font-family: sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  transition:
    border 0.3s ease-in,
    box-shadow 0.3s ease-in;

  &:focus {
    border: 1px solid #06c68f;
    box-shadow: 0 1px 9px 5px rgb(0 0 0 / 3%);
  }
`;const s=o.p`
  font-size: 16px;
  font-weight: 550;
  padding-top: 0px;
  margin-bottom: 5px;
`;o.div`
  position: absolute;
  color: #f44336;
  bottom: -20px;
  left: 6px;
  font-size: 0.75rem;
`;const a=o.h2`
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 5px;

  ${({$required:t})=>t?`
    &::after {
      content: '*';
      color: red;
      margin-left: 3px;
    }
  `:""}
`;export{p as C,e as F,s as S,a as T,r as V,n as a};
