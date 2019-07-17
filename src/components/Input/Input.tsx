import * as React from "react";
import StyledInput from "./styled/StyledInput";
import InputProps from "./Input.props";

const Input: React.FC<InputProps> = ({ ...props }) => (
  <StyledInput {...props} />
);

export default Input;
