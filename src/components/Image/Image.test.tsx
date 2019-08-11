import * as React from "react";

import themed from "../../utils/themed";
import Image from "./Image";

describe("Image", () => {
  it.skip("should render correctly", () => {
    const component = themed(<Image>Test</Image>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
