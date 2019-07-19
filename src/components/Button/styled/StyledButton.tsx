import { darken } from "polished";
import styled from "styled-components";
import ButtonProps from "../Button.props";
import { Size } from "../../../theme/Theme.props";
import Icon from "../../Icon/styled/StyledIcon";

const StyledButton = styled.button<ButtonProps>`
  ${({ disabled, secondary, outline, dSize, theme }) => {
    const color = secondary ? theme.colors.secondary : theme.colors.primary;
    const textColor = outline ? color.normal : theme.colors.text.light;
    const borderColor = outline ? color.normal : "transparent";
    const backgroundColor = outline ? color.light : color.normal;

    return `
  display: flex;
  flex-direction: row;
  padding: 0.4rem 1.2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${dSize == Size.big ? `20px` : `14px`};
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  border-radius: ${theme.borders.radius}px;
  border: 1.5px solid ${borderColor};

  background: ${backgroundColor};
  color: ${textColor};

  ${Icon} {
    margin-right: 0.5em;

    svg {
      width: 0.8em;
      fill: ${textColor};
    }
  }

  &:disabled {
    background: ${theme.colors.mono[300]}
    color: theme.colors.mono[500];
    cursor: not-allowed;
    pointer-events: none;
  }

  &.light {
    background: #f5f5f5;
    border-radius: 1px;
    color: #333;
    border: none;
  }

  &:hover {
    text-decoration: none;
    color: ${textColor};
    background-color: ${color.hover};
    ${Icon} svg {
      fill: ${textColor};
    }
  }

  &:active {
    background-color: ${color.active};
    box-shadow: none !important;
    ${Icon} svg {
      fill: ${textColor};
    }
  }
`;
  }}
`;

export default StyledButton;
