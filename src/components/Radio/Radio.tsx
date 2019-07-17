import * as React from "react";
import StyledRadio from "./styled/StyledRadio";
import RadioProps from "./Radio.props";

const Radio: React.FC<RadioProps> = ({ children, ...props }) => (
  <StyledRadio {...props} type="radio">
    {children}
  </StyledRadio>
);

export default Radio;
