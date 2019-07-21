import * as React from "react";
import { StyledFormGroup } from "./styled/StyledForm";

export interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ children }) => (
  <StyledFormGroup>{children}</StyledFormGroup>
);

export default FormGroup;
