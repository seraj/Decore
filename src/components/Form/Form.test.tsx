import * as React from "react";

import themed from "../../utils/themed";
import Form from "./Form";

describe("Form", () => {
  it("should render correctly", () => {
    const component = themed(<Form>Test</Form>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
