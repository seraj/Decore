import styled from "styled-components";
import TextareaProps from "../Textarea.props";

const StyledTextarea = styled.textarea<TextareaProps>`
  ${({ theme, dark }) => {
    const backgroundColor = dark ? theme.colors.mono[200] : theme.colors.light;

    let textColor = theme.colors.mono[600];
    let borderColor = theme.colors.mono[500];
    let borderColorHover = theme.colors.mono[700];

    return `
      border: ${theme.borders.width}px solid ${borderColor};
      transition: 0.3s;
      background-color: ${backgroundColor};
      padding: ${theme.padding.input};
      height: 42px;
      border-radius: ${theme.borders.radius}px;
      padding: 0.6em 0.8em;
      color: ${theme.colors.text.dark};
      height: 72px;

    ${
      dark
        ? `
      background: ${theme.colors.mono[200]};
    `
        : ""
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

export default StyledTextarea;
