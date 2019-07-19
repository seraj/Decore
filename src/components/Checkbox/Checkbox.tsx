import * as React from "react";
import StyledCheckbox, {
  HiddenCheckbox,
  CheckboxContainer
} from "./styled/StyledCheckbox";
import CheckboxProps from "./Checkbox.props";
import Icon from "../Icon";
import InputProps from "../Input/Input.props";

const Checkbox: React.FC<CheckboxProps> = ({
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
    <StyledCheckbox checked={checked} disabled={disabled}>
      <Icon
        src={
          "data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.87216 0.936324L9.06101 0.058217C9.02874 0.0194056 8.97805 0 8.93196 0C8.88126 0 8.83517 0.0194056 8.80291 0.058217L3.18011 6.02062L1.13378 3.86659C1.09691 3.82777 1.05082 3.80837 1.00473 3.80837C0.958641 3.80837 0.912552 3.82777 0.875682 3.86659L0.0553062 4.73014C-0.0184354 4.80776 -0.0184354 4.92905 0.0553062 5.00667L2.63626 7.72347C2.80218 7.89812 3.00497 8 3.1755 8C3.41977 8 3.63178 7.81079 3.71013 7.73317C3.71013 7.73317 3.71013 7.73317 3.71474 7.73317L9.87677 1.21286C9.9413 1.13038 9.9413 1.0091 9.87216 0.936324Z' fill='%23333333'/%3E%3C/svg%3E"
        }
      ></Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
