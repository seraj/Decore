import { darken } from "polished";
import styled from "../../../utils/styled-components";

const StyledButton = styled("button")<{
disabled: boolean;
secondary: boolean;
radius: number;
big: boolean;
simple: boolean;
}>`
  ${({ disabled, secondary, radius, big, simple }) =>
        simple
            ? ``
            : `
  display: flex;
  flex-direction: row;
  padding: 0.4rem 1.2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${big ? `20px` : `14px`};
  text-align: center;
  cursor: ${disabled ? `not-allowed` : `pointer`};
  transition: 0.3s;
  border-radius: ${`${radius}px` || "0"};
  background: ${disabled ? "#bdc3c7" : secondary ? "#ff8686" : "#3abf7c"};
  color: ${disabled ? darken(0.3, "#bdc3c7") : "#fff"};
  border: 1.5px solid
    ${disabled ? "#bdc3c7" : secondary ? "#ff8686" : "#3abf7c"};

  svg {
    margin-right: 10px;
  }
  &:hover {
    text-decoration: none;
    color: ${disabled ? darken(0.3, "#bdc3c7") : "#fff"};
    border: 1.5px solid
      ${disabled ? "#bdc3c7" : darken(0.2, secondary ? "#ff8686" : "#3abf7c")};
    background-color: ${
    disabled ? "#bdc3c7" : darken(0.2, secondary ? "#ff8686" : "#3abf7c")
};
    svg {
      color: ${disabled ? "#bdc3c7" : "#fff"};
    }
  }
  &:active {
    border: 1.5px solid
      ${darken(0.3, secondary ? "#ff8686" : "#3abf7c")};
    background-color: ${
    disabled ? "#bdc3c7" : darken(0.3, secondary ? "#ff8686" : "#3abf7c")
};
    box-shadow: none !important;
    svg {
      color: ${"#fff"};
    }
  }
  &.light {
    background: #f5f5f5;
    border-radius: 1px;
    color: #333;
    border: none;
  }
  `}
`;

export default StyledButton;
