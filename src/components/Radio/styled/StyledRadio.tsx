import styled from "styled-components";
import Input from "../../Input";
import RadioProps from "../Radio.props";

export const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
`;

export const HiddenRadio = styled(Input).attrs({ type: "radio" })<RadioProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledRadio = styled("span")<RadioProps>`
  ${({ checked }) => `
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-radius: 0;
        border-width: 1.5px;
        border-style: solid;
        border-color: ${checked ? "#333" : "#999"};

        &:hover {
            border-color: #666;
        }

        &::after {
            content: '';
            position: absolute;
            display: ${checked ? "block" : "none"};
            top: 4.5px;
            left: 4.5px;
            width: 8px;
            height: 8px;
            background-color: #333;
        }
    `}
`;

export default StyledRadio;
