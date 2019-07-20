import * as React from "react";

import themed from "../../utils/themed";
import Counter from "./Counter";

describe("Counter", () => {
  it("should render correctly", () => {
    const component = themed(<Counter>Test</Counter>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
