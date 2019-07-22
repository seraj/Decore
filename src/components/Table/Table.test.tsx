import * as React from "react";

import themed from "../../utils/themed";
import Table from "./Table";

describe("Table", () => {
  it.skip("should render correctly", () => {
    const component = themed(<div>Test</div>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
