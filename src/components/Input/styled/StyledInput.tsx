import styled from "styled-components";
import InputProps from "../Input.props";

const StyledInput = styled.input<InputProps>`
  ${({ dark, success, fluid, error, theme }) => {
    const backgroundColor = dark ? theme.colors.mono[200] : theme.colors.light;

    let textColor = theme.colors.mono[600];
    let borderColor = theme.colors.mono[500];
    let borderColorHover = theme.colors.mono[700];
    if (success) {
      borderColor = theme.colors.success.normal;
      borderColorHover = borderColor;
      textColor = borderColor;
    } else if (error) {
      borderColor = theme.colors.error;
      borderColorHover = borderColor;
      textColor = borderColor;
    }

    return `
      border: ${theme.borders.width}px solid ${borderColor};
      transition: 0.3s;
      background-color: ${backgroundColor};
      padding: ${theme.padding.input};
      height: 42px;
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
        color: ${textColor};
      }

      &:active {                
        color: ${borderColorHover};        
      }

      &:focus {              
        color: ${borderColorHover};
        border-color: ${theme.colors.light};
      }

      &:disabled {
        border: none;
        background: ${theme.colors.mono[300]};
        color: ${theme.colors.mono[500]};
        cursor: not-allowed !important;
        pointer-events: none;
      }
  `;
  }}
`;

export default StyledInput;
