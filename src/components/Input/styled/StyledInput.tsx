import styled from "styled-components";
import InputProps from "../Input.props";

const StyledInput = styled.input<InputProps>`
  ${({ dark, success, fluid, error, theme }) => {
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
      border: ${theme.borders.width}px solid ${borderColor};
      background-color: ${backgroundColor};
      padding: ${theme.padding.input};
      height: 45px;
      border-radius: ${theme.borders.radius}px;
      color: ${textColor};
 ${
   fluid
     ? `
      display: block;
      width: 100%;`
     : ``
 }
      &:hover {
        border-color: ${borderColorHover};
      }

      &:disabled {
        background: ${theme.colors.mono[300]};
        color: ${theme.colors.mono[500]};
        cursor: not-allowed !important;
        pointer-events: none;
      }
  `;
  }}
`;

export default StyledInput;
