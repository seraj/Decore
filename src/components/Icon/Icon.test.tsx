import * as React from "react";

import themed from "../../utils/themed";
import Icon from "./Icon";

describe("Icon", () => {
  it("should render correctly", () => {
    const defaultIcon =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBkPSJNMzM2IDBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDh2NDY0bDE5Mi0xMTIgMTkyIDExMlY0OGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQyOC40M2wtMTQ0LTg0LTE0NCA4NFY1NGE2IDYgMCAwIDEgNi02aDI3NmMzLjMxNCAwIDYgMi42ODMgNiA1Ljk5NlY0MjguNDN6Ii8+PC9zdmc+Cg==";

    const component = themed(<Icon src={defaultIcon}>Test</Icon>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
