import styled from "../../../utils/styled-components";

const StyledInput = styled("input")<{
  disabled: boolean;
  radius: number;
  big: boolean;
  simple: boolean;
}>`
  ${({ disabled, radius, simple }) => 
    simple ?
      `` :
      `
        border: none;
        background-color: #eee;
        padding: 1.5rem 0.8rem;
        height: 45px;
        border-radius: ${`${radius}px` || "0"};

        ${disabled ?
          `&[disabled] {
            color: rgba(0, 0, 0, 0.25) !important;
            cursor: not-allowed !important;
            opacity: 0.5 !important;
          }` : ``
        }
      `
}
`;

export default StyledInput;
