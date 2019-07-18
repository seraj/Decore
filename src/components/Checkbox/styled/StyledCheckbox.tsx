import styled from "styled-components";
import Input from "../../Input";
import CheckboxProps from "../Checkbox.props";
import Icon from "../../Icon";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled(Input).attrs({ type: "checkbox" })<
  CheckboxProps
>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px !important;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px !important;
`;

export const StyledCheckbox = styled("div")<CheckboxProps>`
  ${({ checked }) => `
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #fff;
        border-color: ${checked ? "#333" : "#999"};
        border-width: 1.5px;
        border-style: solid;

        &:hover {
            border-color: #666;
        }

        ${HiddenCheckbox}:focus + & {
            box-shadow: 0 0 0 3px pink;
        }

        ${Icon} {
            position: relative;
            svg {
                visibility: ${checked ? "visible" : "hidden"};
                position: absolute;
                top: 5px;
                left: 3px;
            }
        }
    `}
`;

export default StyledCheckbox;
