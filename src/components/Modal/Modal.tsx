import * as React from "react";
import StyledModal from "./styled/StyledModal";
import "../../assets/css/Modal.css";
import ModalProps from "./Modal.props";

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
