export default interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick?: () => void;
  children?: React.ReactChild;
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

