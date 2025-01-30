import styled from "styled-components";

export const Container = styled.div``;

export const ActionsContent = styled.div`
  padding: 5px;
`;
export const StyledIconButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: transparent !important;
  }
`;
export const Action = styled.div<{
  disabled?: boolean;
  $hoverColor?: string;
  hoverBackground?: string;
}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  transition: 0.3s ease;
  gap: 6px;
  border-radius: 5px;
  &:hover {
    /* background: ${({ hoverBackground }): string =>
      hoverBackground || "rgba(0, 0, 0, 0.1)"}; */
    ${({ $hoverColor }): string | undefined =>
      $hoverColor &&
      `svg path {
          fill: ${$hoverColor};
           }`}
  }
  svg {
    font-size: 1rem;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
