import * as React from "react";
import StyledSelect from "./styled/StyledSelect";
import SelectProps from "./Select.props";

const Select: React.FC<SelectProps> = ({ children, ...props }) => (
  <StyledSelect {...props}>{children}</StyledSelect>
);

export default Select;
