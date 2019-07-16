import * as React from "react";

import themed from "../../utils/themed";
import Modal from "./Modal";

describe("Modal", () => {
  it("should render correctly", () => {
    const component = themed(
      <Modal>
        Test
      </Modal>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
