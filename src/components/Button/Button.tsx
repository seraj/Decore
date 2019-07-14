import * as React from "react";
import StyledButton from "./styled/StyledButton";

export interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick?: () => void;
  children: React.ReactNode;
  /** Renders a disabled button and prevents onClick */
  disabled?: boolean;
  /** change the background of Button to our secondary Color */
  secondary?: boolean;
  /** change the button Radius */
  radius?: number;
  /** change font size of button */
  big?: boolean;
  /** Simple Button */
  simple?: boolean;
  /** additional class for button */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  secondary = false,
  big = false,
  radius = 0,
  simple = false
}) => (
  <StyledButton
    className={className}
    disabled={disabled}
    onClick={onClick}
    secondary={secondary}
    radius={radius}
    big={big}
    simple={simple}
  >
    {children}
  </StyledButton>
);

export default Button;
