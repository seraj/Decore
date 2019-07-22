import * as React from "react";

import themed from "../../utils/themed";
import Collapse from "./Collapse";

describe("Collapse", () => {
  it("should render correctly", () => {
    const component = themed(<Collapse isOpen={false}>Test</Collapse>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
