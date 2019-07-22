import * as React from "react";

import themed from "../../utils/themed";
import InputSlider from "./InputSlider";

describe("InputSlider", () => {
  it.skip("should render correctly", () => {
    const component = themed(
      <InputSlider
        onChange={() => null}
        value={1}
        minValue={1}
        maxValue={2}
        disabled={false}
        step={1}
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
