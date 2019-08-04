import styled, { css } from "styled-components";
import { slide as Menu } from "react-burger-menu";
import BurgerMenuProps from "../BurgerMenu.props";

const StyledBurgerMenu = styled(Menu)<BurgerMenuProps>`
  ${({ theme }) => `
  `}
`;

export const BurgerMenuCustomStyle = styled.div`
  position: relative;
  .bm-burger-button {
    position: relative;
    width: 36px;
    height: 30px;
    margin-left: 36px;
  }

  .right .bm-burger-button {
    left: initial;
    right: 36px;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-cross {
    background: #999;
  }
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    a {
      color: #b8b7ad;

      &:hover,
      &:focus {
        color: #c94e50;
      }
    }
  }

  .bm-item-list a {
    padding: 0.8em;
    display: block;

    span {
      margin-left: 10px;
      font-weight: 700;
    }
  }

  .bm-item:focus {
    outline: none;
  }

  //
  // Mixins
  //
  .menu-1 {
    .bm-cross {
      background: #bdc3c7;
    }

    .bm-menu {
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
  }
`;

export default StyledBurgerMenu;
