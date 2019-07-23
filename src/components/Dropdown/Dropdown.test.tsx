import * as React from "react";

import themed from "../../utils/themed";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  it("should render correctly", () => {
    const component = themed(
      <Dropdown isOpen={false} title="test">
        Test
      </Dropdown>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
