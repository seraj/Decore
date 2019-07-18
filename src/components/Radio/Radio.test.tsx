import * as React from "react";

import themed from "../../utils/themed";
import Radio from "./Radio";

describe("Radio", () => {
  it("should render correctly", () => {
    const component = themed(<Radio />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
