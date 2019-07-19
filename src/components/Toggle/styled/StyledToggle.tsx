import styled from "styled-components";
import ToggleProps from "../Toggle.props";
import { HiddenCheckbox } from "../../Checkbox/styled/StyledCheckbox";

const StyledToggle = styled.div<ToggleProps>`
  ${({ theme, checked, disabled }) => `
      display: inline-block;
      width: 58px;
      height: 29px;
      background: ${theme.colors.light};
      border-color: ${
        checked ? theme.colors.mono[700] : theme.colors.mono[500]
      };
      border-width: 1.5px;
      border-style: solid;
      position: relative;

      &:hover {
          border-color: ${theme.colors.mono[600]};
      }

      &::after {
        content: 'Off';
        font-size: 0.6em;
        font-weight: bold;
        line-height: 22px;
        color: ${theme.colors.text.light};
        text-align: center;
        text-transform: uppercase;
        background: ${theme.colors.mono[500]};
        width: 25px;
        height: 22px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: absolute;
        left: 2px;
        top: 2px;
        display: inline-block;
        transition: ${theme.animations.duration}ms;
      }

      ${
        checked
          ? `
        &::after {
          background: ${theme.colors.mono[700]};
          content: 'On';
          left: 27px;
        }
      `
          : ""
      }

      ${
        disabled
          ? `
        background: ${theme.colors.mono[300]};
        pointer-events: none;
        cursor: not-allowed;
      `
          : ""
      }
  `}
`;

export default StyledToggle;
