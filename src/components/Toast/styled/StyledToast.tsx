import styled from "styled-components";
import ToastProps from "../Toast.props";
import Icon from "../../Icon";

export const ToastContainer = styled.div<ToastProps>`
  ${({ theme, type }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 550px;
    padding: 0.5em 1em;
    background: ${theme.colors.light};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
    border-left: 4px solid ${theme.colors[type]};
  `}
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-self: flex-end;
  position: relative;
  margin: 5px 0;
  top: 5px;

  h3 {
    font-weight: 600;
    text-transform: capitalize;
  }
  p {
    font-weight: 500;
  }
`;

export const ToastIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const StyledToast = styled.div<ToastProps>`
  ${({ theme, type }) => `
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;

    ${ToastIconContainer} {
      span {
        width: auto;
      }
    }
  `}
`;

export default StyledToast;
