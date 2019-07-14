import * as React from "react";

import themed from "../../utils/themed";
import Input from "./Input";

describe("Input", () => {
  it("should render correctly", () => {
    const component = themed(
      <Input>
        Test
      </Input>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
