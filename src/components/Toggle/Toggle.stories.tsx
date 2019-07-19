import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Toggle from "./Toggle";

const stories = storiesOf("Components/Toggle", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Toggle
      checked={boolean("checked", false)}
      disabled={boolean("disabled", false)}
    />
  ))
);
