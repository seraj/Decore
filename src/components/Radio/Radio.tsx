import * as React from "react";
import StyledRadio, { HiddenRadio, RadioContainer } from "./styled/StyledRadio";
import RadioProps from "./Radio.props";

const Radio: React.FC<RadioProps> = ({
  className,
  checked,
  children,
  ...props
}) => (
  <RadioContainer className={className}>
    <HiddenRadio {...props} checked={checked} type="radio" />
    <StyledRadio checked={checked} />
  </RadioContainer>
);

export default Radio;
