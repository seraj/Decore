import * as React from "react";
import StyledButton from "./styled/StyledButton";
import { withTheme } from "styled-components";
import ButtonProps from "./Button.props"

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  secondary = false,
  big = false,
  radius = 0,
  simple = false
}) => (
  <StyledButton
    className={className}
    disabled={disabled}
    onClick={onClick}
    secondary={secondary}
    radius={radius}
    big={big}
    simple={simple}
  >
    {children}
  </StyledButton>
);

export default Button;
