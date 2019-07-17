import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import styled, { css } from "styled-components";
import ModalProps from "../Modal.props";

const ModalContent = css``;
const StyledModal = styled(Modal)<ModalProps>``;

export const StyledModalHeader = styled(ModalHeader)<ModalProps>``;

export const StyledModalBody = styled(ModalBody)``;
export default StyledModal;
