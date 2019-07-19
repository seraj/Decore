import * as React from "react";

import themed from "../../utils/themed";
import Textarea from "./Textarea";

describe("Textarea", () => {
  it("should render correctly", () => {
    const component = themed(<Textarea>Test</Textarea>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
