import * as React from "react";
import { StyledFormLabel } from "./styled/StyledForm";

export interface FormLabelProps {
  children: React.ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({ children }) => (
  <StyledFormLabel>{children}</StyledFormLabel>
);

export default FormLabel;
