import * as React from "react";

import themed from "../../utils/themed";
import Carousel from "./Carousel";

describe("Carousel", () => {
  it("should render correctly", () => {
    const component = themed(
      <Carousel>
        <div>Test</div>
      </Carousel>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
