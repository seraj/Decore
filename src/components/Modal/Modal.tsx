import * as React from "react";
import StyledModal from "./styled/StyledModal";
import ModalProps from "./Modal.props";

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen = false,
  ...props
}) => (
  <StyledModal isOpen={isOpen} {...props}>
    {children}
  </StyledModal>
);

export default Modal;
