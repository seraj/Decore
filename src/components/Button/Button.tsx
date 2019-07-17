import * as React from "react";
import { withTheme } from "styled-components";
import StyledButton from "./styled/StyledButton";
import ButtonProps from "./Button.props";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
