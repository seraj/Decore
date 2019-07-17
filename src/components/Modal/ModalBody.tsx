import * as React from "react";
import { StyledModalBody } from "./styled/StyledModal";

export interface ModalBodyProps {
    children: React.ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
    <StyledModalBody>{children}</StyledModalBody>
);

export default ModalBody;
