import * as React from "react";

import themed from "../../utils/themed";
import BurgerMenu from "./BurgerMenu";

describe("BurgerMenu", () => {
  it("should render correctly", () => {
    const component = themed(<BurgerMenu />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
