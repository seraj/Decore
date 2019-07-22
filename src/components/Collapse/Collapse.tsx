import * as React from "react";
import StyledCollapse from "./styled/StyledCollapse";
import CollapseProps from "./Collapse.props";

const Collapse: React.FC<CollapseProps> = ({ children, ...props }) => (
  <StyledCollapse {...props}>{children}</StyledCollapse>
);

export default Collapse;
