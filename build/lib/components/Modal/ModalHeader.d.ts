import * as React from "react";
export interface ModalHeaderProps {
    /** callback for toggling isOpen in the controlling component */
    toggle?: () => void;
    children: React.ReactNode;
}
declare const ModalHeader: React.FC<ModalHeaderProps>;
export default ModalHeader;
