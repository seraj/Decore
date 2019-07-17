import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import styled, { css } from "styled-components";
import ModalProps from "../Modal.props";

const ModalContent = css`
  .modal-content {
    position: fixed;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    height: min-content !important;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 15px;
    border: none;
    background: white;
    border-radius: 5px;

    .close {
      position: absolute !important;
      right: 13px;
      z-index: 1;
      font-weight: normal;
      font-size: 40px !important;
      top: 5px;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`;
const StyledModal = styled(Modal)<ModalProps>`
  height: 100%;
  ${ModalContent}
`;

export const StyledModalHeader = styled(ModalHeader)<ModalProps>`
  border: none !important;
  text-align: center !important;
  display: block !important;
  position: relative;
  color: #000;

  &.no-padding {
    padding: 0 !important;
  }
`;

export const StyledModalBody = styled(ModalBody)``;
export default StyledModal;
