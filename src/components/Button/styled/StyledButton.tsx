import { darken } from "polished";
import styled from "styled-components";
import ButtonProps from "../Button.props";

const StyledButton = styled.button<ButtonProps>`
  ${({ disabled, secondary, radius, big, theme }) =>
        `
  display: flex;
  flex-direction: row;
  padding: 0.4rem 1.2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${big ? `20px` : `14px`};
  text-align: center;
  cursor: ${disabled ? `not-allowed` : `pointer`};
  transition: 0.3s;
  border-radius: ${`${radius}px` || "0"};
  background: ${
    disabled
        ? theme.colors.disabled
        : secondary
            ? theme.colors.secondary
            : theme.colors.primary
};
  color: ${disabled ? darken(0.3, theme.colors.disabled) : theme.colors.text};
  border: 1.5px solid
    ${
    disabled
        ? theme.colors.disabled
        : secondary
            ? theme.colors.secondary
            : theme.colors.primary
};

  svg {
    margin-right: 10px;
  }

  &.light {
    background: #f5f5f5;
    border-radius: 1px;
    color: #333;
    border: none;
  }

  ${
    disabled
        ? ``
        : `
    &:hover {
      text-decoration: none;
      color: ${theme.colors.text};
      border: 1.5px solid
        ${darken(
        0.2,
        secondary ? theme.colors.secondary : theme.colors.primary
    )};
      background-color: 
        ${darken(
        0.2,
        secondary ? theme.colors.secondary : theme.colors.primary
    )};
      svg {
        color: ${theme.colors.text};
      }
    }
    &:active {
      border: 1.5px solid
        ${darken(
        0.3,
        secondary ? theme.colors.secondary : theme.colors.primary
    )};
      background-color:
        ${darken(
        0.3,
        secondary ? theme.colors.secondary : theme.colors.primary
    )};
      box-shadow: none !important;
      svg {
        color: ${theme.colors.text};
      }
    }
  `
}
  `}
`;

export default StyledButton;
