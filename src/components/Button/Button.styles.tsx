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
  ${{ fontStyle: "labelM" }}
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
          color: var(--neutral-colors-light);
          background-color: var(--brand-colors-accent);

          & > svg > path {
            fill: var(--neutral-colors-light);
          }

          &:not(:disabled):hover {
            background-color: var(--level-accent-700);    
          }

          &:disabled {
            background: var(--level-dark-300); 
          }
        `;
      case ButtonTypeEnum.SECONDARY:
        return `
          border: 1px solid var(--brand-colors-accent); 
          color: var(--brand-colors-accent);

          & > svg > path {
            fill: var(--brand-colors-accent);
          }

          &:not(:disabled):hover {
            border: 1px solid var(--level-accent-700);
            color: var(--level-accent-700);

            & > svg > path {
              fill: var(--level-accent-700);
            }
          }

          &:disabled {
            border: 1px solid var(--level-dark-300); 
            color: var(--level-dark-300); 

            & > svg > path {
              fill: var(--level-dark-300);
            }
          }
        `;
      case ButtonTypeEnum.GHOST:
        return `
          background-color: transparent;
          color: var(--neutral-colors-dark);

          & > svg > path {
            fill: var(--neutral-colors-dark);
          }

          &:not(:disabled):hover {
            background-color: var(--level-grey-100);
          }

          &:disabled {
            color: var(--level-dark-300); 
            
            & > svg > path {
              fill: var(--level-dark-300);
            }
          }
        `;
      case ButtonTypeEnum.NEGATIVE:
        return `
          background-color: var(--system-colors-negative);
          color: var(--neutral-colors-light);

          & > svg > path {
            fill: var(--neutral-colors-light);
          }

          &:not(:disabled):hover {
            background-color: var(--level-negative-700);
          }

          &:disabled {
            background: var(--level-negative-500); 
          }
        `;
      case ButtonTypeEnum.POSITIVE:
        return `
          background-color: var(--system-colors-positive);
          color: var(--neutral-colors-light);

          & > svg > path {
            fill: var(--neutral-colors-light);
          }

          &:not(:disabled):hover {
            background-color: var(--level-accent-700);
          }

          &:disabled {
            background: var(--level-accent-500); 
          }
        `;
      case ButtonTypeEnum.DARK:
        return `
          border: 1px solid var(--neutral-colors-dark); 
          color: var(--neutral-colors-dark));

          & > svg > path {
            fill: var(--neutral-colors-dark));
          }

          &:not(:disabled):hover {
            opacity: 0.8;
          }

          &:disabled {
            border: 1px solid var(--level-dark-300); 
            color: var(--level-dark-300); 
          }
        `;
      case ButtonTypeEnum.TEXT:
        return `
          border: none; 
          color: var(--neutral-colors-dark));
          padding-top: 0;
          padding-bottom: 0;
          width: fit-content;

          & > svg > path {
            fill: var(--neutral-colors-dark));
          }

          &:not(:disabled):hover {
           color: var(--level-dark-700, #4F4E5B);
           
            & > svg > path {
              fill: var(--level-dark-700, #4F4E5B);
            }
          }

          &:disabled {
            color: var(--level-dark-300); 

            & > svg > path {
              fill: var(--level-dark-300);
            }
          }
        `;
      default:
        return "";
    }
  }}
`;
