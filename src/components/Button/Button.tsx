import * as React from "react";
import { withTheme } from "styled-components";
import StyledButton from "./styled/StyledButton";
import ButtonProps from "./Button.props";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  secondary = false,
  big = false,
  radius = 0
}) => (
  <StyledButton
    className={className}
    disabled={disabled}
    onClick={onClick}
    secondary={secondary}
    radius={radius}
    big={big}
  >
    {children}
  </StyledButton>
);

export default Button;
