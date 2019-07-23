import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Select from "./Select";

const stories = storiesOf("Components/Select", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Select
      disabled={boolean("disabled", false)}
      success={boolean("success", false)}
      error={boolean("error", false)}
      fluid={boolean("fluid", false)}
    >
      <option value="test" selected>
        selected
      </option>
      <option value="disable" disabled>
        disabled
      </option>
      <option value="normal">Normal</option>
    </Select>
  ))
);
