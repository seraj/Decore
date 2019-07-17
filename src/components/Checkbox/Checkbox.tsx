import * as React from "react";
import StyledCheckbox from "./styled/StyledCheckbox";
import CheckboxProps from "./Checkbox.props";
import InputProps from "../Input/Input.props";

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => (
  <StyledCheckbox {...props} type="checkbox" />
);

export default Checkbox;
