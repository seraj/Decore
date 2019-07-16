import * as React from "react";
import { StyledModalHeader } from "./styled/StyledModal";

export interface ModalHeaderProps {
  /** callback for toggling isOpen in the controlling component */
  toggle?: () => void;
  children: React.ReactNode;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, toggle }) => (
  <StyledModalHeader toggle={toggle}>{children}</StyledModalHeader>
);

export default ModalHeader;
