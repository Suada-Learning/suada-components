import styled from 'styled-components'
import { ButtonSizeEnum, ButtonTypeEnum, StyledButtonProps } from './Button.interface'

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
        `
      case ButtonSizeEnum.LG:
        return `
          width: 167px;
          height: 48px;
          padding: 12px;
        `
      default:
        return ''
    }
  }}

  ${({ theme, $type }): string => {
    switch ($type) {
      case ButtonTypeEnum.PRIMARY:
        return `
          color: ${theme.colors.neutral[100]};
          background-color: ${theme.colors.primary.main};

          & > svg > path {
            fill: ${theme.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${theme.colors.primary[700]};    
          }

          &:disabled {
            background: ${theme.colors.neutral[400]}; 
          }
        `
      case ButtonTypeEnum.SECONDARY:
        return `
          border: 1px solid ${theme.colors.primary.main}; 
          color: ${theme.colors.primary.main};

          & > svg > path {
            fill: ${theme.colors.primary.main};
          }

          &:not(:disabled):hover {
            border: 1px solid ${theme.colors.primary[700]};
            color: ${theme.colors.primary[700]};

            & > svg > path {
              fill: ${theme.colors.primary[700]};
            }
          }

          &:disabled {
            border: 1px solid ${theme.colors.neutral[400]}; 
            color: ${theme.colors.neutral[400]}; 

            & > svg > path {
              fill: ${theme.colors.neutral[400]};
            }
          }
        `
      case ButtonTypeEnum.GHOST:
        return `
          background-color: transparent;
          color: ${theme.colors.neutral[900]};

          & > svg > path {
            fill: ${theme.colors.neutral[900]};
          }

          &:not(:disabled):hover {
            background-color: ${theme.colors.neutral[300]};
          }

          &:disabled {
            color: ${theme.colors.neutral[400]}; 
            
            & > svg > path {
              fill: ${theme.colors.neutral[400]};
            }
          }
        `
      case ButtonTypeEnum.NEGATIVE:
        return `
          background-color: ${theme.colors.system.error.main};
          color: ${theme.colors.neutral[100]};

          & > svg > path {
            fill: ${theme.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${theme.colors.system.error[700]};
          }

          &:disabled {
            background: ${theme.colors.system.error[300]}; 
          }
        `
      case ButtonTypeEnum.POSITIVE:
        return `
          background-color: ${theme.colors.system.success.main};
          color: ${theme.colors.neutral[100]};

          & > svg > path {
            fill: ${theme.colors.neutral[100]};
          }

          &:not(:disabled):hover {
            background-color: ${theme.colors.system.success[700]};
          }

          &:disabled {
            background: ${theme.colors.system.success[300]}; 
          }
        `
      case ButtonTypeEnum.DARK:
        return `
          border: 1px solid ${theme.colors.neutral[900]}; 
          color: ${theme.colors.neutral[900]};

          & > svg > path {
            fill: ${theme.colors.neutral[900]};
          }

          &:not(:disabled):hover {
            opacity: 0.8;
          }

          &:disabled {
            border: 1px solid ${theme.colors.neutral[400]}; 
            color: ${theme.colors.neutral[400]}; 
          }
        `
      case ButtonTypeEnum.TEXT:
        return `
          border: none; 
          color: ${theme.colors.neutral[900]};
          padding-top: 0;
          padding-bottom: 0;
          width: fit-content;

          & > svg > path {
            fill: ${theme.colors.neutral[900]};
          }

          &:not(:disabled):hover {
           color: ${theme.colors.neutral[600]};
           
            & > svg > path {
              fill: ${theme.colors.neutral[600]};
            }
          }

          &:disabled {
            color: ${theme.colors.neutral[400]}; 

            & > svg > path {
              fill: ${theme.colors.neutral[400]};
            }
          }
        `
      default:
        return ''
    }
  }}
`
