import styled, { css } from "styled-components";
import DropdownProps from "../Dropdown.props";

const StyledDropdown = styled.div<DropdownProps>`
  ${({ theme }) => `
  position: relative;
    cursor: pointer;
    &.open > .dropdown-menu {
        display: block;
    }
    .caret {
        display: inline-block;
        margin-left: 8px;
        margin-top: 4px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }
      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        display: none;
        float: left;
        min-width: 160px;
        padding: ${theme.padding.dropdown.container};
        margin: 2px 0 0;
        font-size: ${theme.fonts.text};
        text-align: left;
        list-style: none;
        background-color: ${theme.colors.light};
        border: 1px solid ${theme.colors.mono[300]};
        border-radius: ${theme.borders.radius};

        li {
          cursor: pointer;
          :hover {
            background: ${theme.colors.mono[300]};
          }
          & > a {
            display: block;
            padding: ${theme.padding.dropdown.links};
            color: ${theme.colors.mono[700]};
          }
        }
      }
  `}
`;

export default StyledDropdown;
