import * as React from "react";

import themed from "../../utils/themed";
import Toast from "./Toast";

describe("Toast", () => {
  it("should render correctly", () => {
    const component = themed(<Toast>Test</Toast>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
