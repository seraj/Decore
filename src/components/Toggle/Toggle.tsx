import * as React from "react";
import StyledToggle from "./styled/StyledToggle";
import ToggleProps from "./Toggle.props";
import {
  HiddenCheckbox,
  CheckboxContainer
} from "../Checkbox/styled/StyledCheckbox";

const Toggle: React.FC<ToggleProps> = ({
  checked,
  disabled,
  className,
  children,
  ...props
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox
      {...props}
      type="checkbox"
      checked={checked}
      disabled={disabled}
    />
    <StyledToggle {...props} checked={checked} disabled={disabled} />
  </CheckboxContainer>
);

export default Toggle;
