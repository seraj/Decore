import * as React from "react";
import StyledRadio, { HiddenRadio, RadioContainer } from "./styled/StyledRadio";
import RadioProps from "./Radio.props";

const Radio: React.FC<RadioProps> = ({
  className,
  checked,
  children,
  disabled,
  ...props
}) => (
  <RadioContainer className={className}>
    <HiddenRadio
      {...props}
      checked={checked}
      disabled={disabled}
      type="radio"
    />
    <StyledRadio checked={checked} disabled={disabled} />
  </RadioContainer>
);

export default Radio;
