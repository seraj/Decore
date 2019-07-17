import * as React from "react";
import { ThemeContext } from "styled-components";
import StyledIcon from "./styled/StyledIcon";
import IconProps from "./Icon.props";

const Icon: React.FC<IconProps> = ({ children, ...props }) => (
  <StyledIcon {...props}>{children}</StyledIcon>
);

export default Icon;
