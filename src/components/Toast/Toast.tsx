import * as React from "react";
import StyledToast, {
  ToastIconContainer,
  ToastContainer,
  ToastContent
} from "./styled/StyledToast";
import Icon from "../Icon";
import ToastProps from "./Toast.props";

const Toast: React.FC<ToastProps> = ({
  closeToast,
  icon = "",
  type,
  text,
  ...props
}) => (
  <ToastContainer type={type} {...props}>
    <StyledToast type={type}>
      <ToastIconContainer>
        <Icon src={icon} />
      </ToastIconContainer>
      <ToastContent>
        <h3>{type}</h3>
        <p>{text}</p>
      </ToastContent>
    </StyledToast>
    <Icon
      style={{ cursor: "pointer" }}
      onClick={closeToast}
      src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1.61714L14.3829 0L8 6.38286L1.61714 0L0 1.61714L6.38286 8L0 14.3829L1.61714 16L8 9.61714L14.3829 16L16 14.3829L9.61714 8L16 1.61714Z' fill='%23999999'/%3E%3C/svg%3E%0A"
    />
  </ToastContainer>
);

export default Toast;
