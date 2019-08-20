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

const StyledRadio = styled.span<RadioProps>`
  ${({ theme, checked, disabled }) => `
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        transition: 0.3s;
        background-color: ${theme.colors.light};
        border-radius: 10px;
        border: ${theme.borders.width}px solid ${
    checked ? theme.colors.mono[700] : theme.colors.mono[500]
  };

        &:hover {
            border-color: ${theme.colors.mono[600]};
        }

        ${
          !disabled && checked
            ? `
            border-color: ${theme.colors.mono[700]};
        `
            : ""
        }

        ${
          checked
            ? `
            &::after {
                content: '';
                position: absolute;
                display: block;
                top: 4.5px;
                left: 4.5px;
                width: 8px;
                height: 8px;
                border-radius: 10px;
                transition: 0.3s;
                background-color: ${theme.colors.mono[700]};
            }
        `
            : ""
        }

        ${
          disabled
            ? `
            background: ${theme.colors.mono[300]};
            border: none;
            pointer-events: none;
            cursor: not-allowed;

            &::after {
                content: '';
                position: absolute;
                display: block;
                top: 9px;
                left: 6px;
                width: 8px;
                height: 2px;                
                background-color: ${theme.colors.mono[500]};
            }
          `
            : ""
        }
        }
    `}
`;

export default StyledRadio;
