import * as React from "react";

import themed from "../../utils/themed";
import Toggle from "./Toggle";

describe("Toggle", () => {
  it("should render correctly", () => {
    const component = themed(<Toggle>Test</Toggle>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
