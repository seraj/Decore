import * as React from "react";
import StyledModal from "./styled/StyledModal";
import "../../assets/css/Modal.css";
interface ModalProps {
  /** callback for toggling isOpen in the controlling component */
  toggle: () => void;
  children: React.ReactNode;
  /** boolean to Modal or not */
  isOpen: boolean;
  /** Modal Title */
  title?: string;
  /** additional class */
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen = false,
  toggle,
  className
}) => (
  <StyledModal isOpen={isOpen} className={className}>
    {children}
  </StyledModal>
);

export default Modal;
