import * as React from "react";
import StyledForm from "./styled/StyledForm";
import FormProps from "./Form.props";

const Form: React.FC<FormProps> = ({ children, ...props }) => (
  <StyledForm {...props}>{children}</StyledForm>
);
export default Form;
