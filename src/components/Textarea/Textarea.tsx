import * as React from "react";
import StyledTextarea from "./styled/StyledTextarea";
import TextareaProps from "./Textarea.props";

const Textarea: React.FC<TextareaProps> = ({ children, ...props }) => (
  <StyledTextarea {...props}>{children}</StyledTextarea>
);

export default Textarea;
