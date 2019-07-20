import styled from "styled-components";
import CounterProps from "../Counter.props";
import Input from "../../Input";

export const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenInput = styled(Input)<CounterProps>`
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

const StyledCounter = styled.div<CounterProps>`
  ${({ disabled, value, min, max, theme }) => {
    const reachedMax = value !== undefined && max !== undefined && value >= max;
    const reachedMin = value !== undefined && min !== undefined && value <= min;

    return `
      display: inline-block;
      width: 78px;
      height: 29px;
      background: ${theme.colors.light};
      border-color: ${theme.colors.mono[500]};
      border-width: 1.5px;
      border-style: solid;
      position: relative;

      &:hover {
        border-color: ${theme.colors.mono[700]};
      }
      
      ${
        disabled
          ? `
        pointer-events: none;
        cursor: not-allowed;
        background: ${theme.colors.mono[300]};
        border-color: transparent;
      `
          : ""
      }

      .decore__value {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        line-height: 29px;
        color: ${theme.colors.text.normal};
        text-align: center;
        display: block;
        font-size: 0.8em;
      }

      .decore__minus, .decore__plus {
        position: absolute;
        width: 25px;
        text-align: center;
        top: 0;
        user-select: none;

        color: ${theme.colors.text.dark};
        cursor: pointer;

        z-index: 1;

        ${
          disabled
            ? `
          color: ${theme.colors.mono[500]};
        `
            : ""
        }
      }

      .decore__minus {
        left: 0;
        line-height: 26px;

        ${
          reachedMin
            ? `
          cursor: not-allowed;
          color: ${theme.colors.mono[500]} !important;
        `
            : `
          &:hover {
            background: ${theme.colors.mono[300]};
          }
        `
        }
      }

      .decore__plus {
        right: 0;
        line-height: 26px;

        ${
          reachedMax
            ? `
          cursor: not-allowed;
          color: ${theme.colors.mono[500]} !important;
        `
            : `
          &:hover {
            background: ${theme.colors.mono[300]};
          }
        `
        }
      }
  `;
  }}
`;

export default StyledCounter;
