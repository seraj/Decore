import * as React from "react";

import themed from "../../utils/themed";
import Select from "./Select";

describe("Select", () => {
  it("should render correctly", () => {
    const component = themed(<Select>test</Select>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
