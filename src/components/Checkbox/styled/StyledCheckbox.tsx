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

export const StyledCheckbox = styled.div<CheckboxProps>`
  ${({ checked, theme }) => `
        display: inline-block;
        width: 20px;
        height: 20px;
        background: ${theme.colors.light};
        border-color: ${
          checked ? theme.colors.mono[700] : theme.colors.mono[500]
        };
        border-width: 1.5px;
        border-style: solid;

        &:hover {
            border-color: ${theme.colors.mono[600]};
        }

        &[disabled] {
            background: ${theme.colors.mono[300]};
            border-color: ${theme.colors.mono[300]};
            pointer-events: none;

            svg * {
              fill: ${theme.colors.mono[500]};
            }
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
