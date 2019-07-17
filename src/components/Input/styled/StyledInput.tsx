import styled from "styled-components";
import InputProps from "../Input.props";

const StyledInput = styled.input<InputProps>`
  ${({ radius }) => `
    border: none;
    background-color: #eee;
    padding: 1.5rem 0.8rem;
    height: 45px;
    border-radius: ${`${radius}px` || "0"};

    &[disabled] {
      color: rgba(0, 0, 0, 0.25) !important;
      cursor: not-allowed !important;
      opacity: 0.5 !important;
    }
  `}
`;

export default StyledInput;
