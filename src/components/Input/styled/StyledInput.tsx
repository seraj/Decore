import styled from "styled-components";
import InputProps from "../Input.props";

const StyledInput = styled.input<InputProps>`
  ${({ dark, success, error, theme }) => {
    const backgroundColor = dark ? theme.colors.mono[200] : theme.colors.white;

    let textColor = theme.colors.text.dark;
    let borderColor = theme.colors.mono[500];
    let borderColorHover = theme.colors.mono[700];
    if (success) {
      borderColor = theme.colors.success;
      borderColorHover = borderColor;
      textColor = borderColor;
    } else if (error) {
      borderColor = theme.colors.error;
      borderColorHover = borderColor;
      textColor = borderColor;
    }

    return `
      border: 1.5px solid ${borderColor};
      background-color: ${backgroundColor};
      padding: 1rem 0.8rem;
      height: 45px;
      border-radius: ${theme.borders.radius}px;
      color: ${textColor};

      &:hover {
        border-color: ${borderColorHover};
      }

      &:disabled {
        background: ${theme.colors.mono[300]};
        color: ${theme.colors.mono[500]};
        cursor: not-allowed !important;
      }
  `;
  }}
`;

export default StyledInput;
