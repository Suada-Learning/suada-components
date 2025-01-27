import styled from "styled-components";
import {
  ButtonSizeEnum,
  ButtonTypeEnum,
  StyledButtonProps,
} from "./Button.interface";

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  text-transform: capitalize;
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  cursor: pointer;
  white-space: nowrap;

  & > svg > path {
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }

  &:disabled {
    cursor: not-allowed;
    transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);

    & > svg > path {
      transition: 0.1s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
  }

  ${({ $size }): string => {
    switch ($size) {
      case ButtonSizeEnum.SM:
        return `  
          width: 159px;
          height: 40px;
          padding: 8px; 
        `;
      case ButtonSizeEnum.LG:
        return `
          width: 167px;
          height: 48px;
          padding: 12px;
        `;
      default:
        return "";
    }
  }}

  ${({ $type }): string => {
    switch ($type) {
      case ButtonTypeEnum.PRIMARY:
        return `
          color: #FFFFFF;
          background-color: #08C694;

          & > svg > path {
            fill: #FFFFFF;
          }

          &:not(:disabled):hover {
            background-color: #12A37A;    
          }

          &:disabled {
            background: #B3B3B8; 
          }
        `;
      case ButtonTypeEnum.SECONDARY:
        return `
          border: 1px solid #08C694; 
          color: #08C694;

          & > svg > path {
            fill: #08C694;
          }

          &:not(:disabled):hover {
            border: 1px solid #12A37A;
            color: #12A37A;

            & > svg > path {
              fill: #12A37A;
            }
          }

          &:disabled {
            border: 1px solid #B3B3B8; 
            color: #B3B3B8; 

            & > svg > path {
              fill: #B3B3B8;
            }
          }
        `;
      case ButtonTypeEnum.GHOST:
        return `
          background-color: transparent;
          color: #020210;

          & > svg > path {
            fill: #020210;
          }

          &:not(:disabled):hover {
            background-color: #E7E9ED;
          }

          &:disabled {
            color: #B3B3B8; 
            
            & > svg > path {
              fill: #B3B3B8;
            }
          }
        `;
      case ButtonTypeEnum.NEGATIVE:
        return `
          background-color: #EA382A;
          color: #FFFFFF;

          & > svg > path {
            fill: #FFFFFF;
          }

          &:not(:disabled):hover {
            background-color: #C7493D;
          }

          &:disabled {
            background: #E5908A; 
          }
        `;
      case ButtonTypeEnum.POSITIVE:
        return `
          background-color: #00905E;
          color: #FFFFFF;

          & > svg > path {
            fill: #FFFFFF;
          }

          &:not(:disabled):hover {
            background-color: #12A37A;
          }

          &:disabled {
            background: #72C4AC; 
          }
        `;
      case ButtonTypeEnum.DARK:
        return `
          border: 1px solid #020210; 
          color: #020210;

          & > svg > path {
            fill: #020210;
          }

          &:not(:disabled):hover {
            opacity: 0.8;
          }

          &:disabled {
            border: 1px solid #B3B3B8; 
            color: #B3B3B8; 
          }
        `;
      case ButtonTypeEnum.TEXT:
        return `
          border: none; 
          color: #020210;
          padding-top: 0;
          padding-bottom: 0;
          width: fit-content;

          & > svg > path {
            fill: #020210;
          }

          &:not(:disabled):hover {
           color: #4F4E5B;
           
            & > svg > path {
              fill: #4F4E5B;
            }
          }

          &:disabled {
            color: #B3B3B8; 

            & > svg > path {
              fill: #B3B3B8;
            }
          }
        `;
      default:
        return "";
    }
  }}
`;
