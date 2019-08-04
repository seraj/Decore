import * as React from "react";
import StyledBurgerMenu from "./styled/StyledBurgerMenu";
import BurgerMenuProps from "./BurgerMenu.props";

const BurgerMenu: React.FC<BurgerMenuProps> = ({ children, ...props }) => (
  <StyledBurgerMenu {...props}>{children}</StyledBurgerMenu>
);

export default BurgerMenu;
