import styled from "styled-components";
import SVG from "react-inlinesvg";
import IconProps from "../Icon.props";

const StyledIcon = styled(SVG)<IconProps>`
  ${({ theme, light }) => `
    display: inline-block;
    fill: ${light ? theme.colors.text.onBackground : theme.colors.text.normal};
    width: ${theme.icons.size}px;
  `}
`;

export default StyledIcon;
