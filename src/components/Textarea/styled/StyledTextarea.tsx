import styled from "styled-components";
import TextareaProps from "../Textarea.props";

const StyledTextarea = styled.textarea<TextareaProps>`
  ${({ theme, dark }) => `
    border: 1.5px solid ${theme.colors.mono[500]};

    padding: 0.6em 0.8em;

    color: ${theme.colors.text.dark};

    ${
      dark
        ? `
      background: ${theme.colors.mono[200]};
    `
        : ""
    }
  `}
`;

export default StyledTextarea;
