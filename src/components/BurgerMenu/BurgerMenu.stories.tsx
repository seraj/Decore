import { text, withKnobs, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import BurgerMenu from "./BurgerMenu";
import { BurgerMenuCustomStyle } from "./styled/StyledBurgerMenu";

const stories = storiesOf("Components/BurgerMenu", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <BurgerMenuCustomStyle>
      <BurgerMenu
        right={boolean("right", false)}
        crossButtonClassName="cart__header--close"
      >
        <div>
          <a href="">
            <span>Home</span>
          </a>
          <a href="">
            <span>About</span>
          </a>
        </div>
      </BurgerMenu>
    </BurgerMenuCustomStyle>
  ))
);
