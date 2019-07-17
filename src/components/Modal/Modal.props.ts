import ThemeProps from "../../theme/Theme.props";

export default interface ModalProps
  extends ThemeProps,
    React.HTMLAttributes<HTMLDivElement> {
  /** callback for toggling isOpen in the controlling component */
  toggle?: () => void;
  /** boolean to Modal or not */
  isOpen?: boolean;
  /** Modal Title */
  title?: string;
}
