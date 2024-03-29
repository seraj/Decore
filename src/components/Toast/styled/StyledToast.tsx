import styled from "styled-components";
import ToastProps from "../Toast.props";
import Icon from "../../Icon";

export const ToastContainer = styled.div<ToastProps>`
  ${({ theme, type }) => {
    const toastType = type || "info";

    return `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 550px;
    height: 87px;
    padding: 0 1em;
    background: ${theme.colors.light};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
    border-left: 4px solid ${theme.colors[toastType]};
  `;
  }}
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-self: flex-end;
  position: relative;
  margin: 5px 0;
  top: 5px;

  h5 {
    font-weight: 600;
    text-transform: capitalize;
  }
  p {
    font-weight: 400;
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

    ${ToastContent} {
      h5 {
        font-size: ${theme.fonts.heading.h5};
      }
      p {
        font-size: ${theme.fonts.text};
        color: ${theme.colors.text.normal};
      }
    }

    ${ToastIconContainer} {
      span {
        width: auto;
      }
    }
  `}
`;

export default StyledToast;
