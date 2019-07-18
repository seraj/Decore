import * as React from "react";

import themed from "../../utils/themed";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("should render correctly", () => {
    const component = themed(<Checkbox />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
