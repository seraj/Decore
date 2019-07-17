export default interface ModalProps {
  /** callback for toggling isOpen in the controlling component */
  toggle?: () => void;
  children?: React.ReactNode;
  /** boolean to Modal or not */
  isOpen?: boolean;
  /** Modal Title */
  title?: string;
  /** additional class */
  className?: string;
}
