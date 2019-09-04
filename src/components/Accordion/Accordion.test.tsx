import * as React from "react";

import themed from "../../utils/themed";
import Accordion from "./Accordion";

describe("Accordion", () => {
  it("should render correctly", () => {
    const component = themed(<Accordion>Test</Accordion>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
