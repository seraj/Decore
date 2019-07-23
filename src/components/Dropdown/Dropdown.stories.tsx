import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Dropdown from "./Dropdown";

const stories = storiesOf("Components/Dropdown", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Dropdown
      title={text("Label", "Dropdown")}
      isOpen={boolean("isOpen", false)}
    >
      <li>
        <a>Test</a>
      </li>
      <li>
        <a>Test</a>
      </li>
      <li>
        <a>Test</a>
      </li>
      <li>
        <a>Test</a>
      </li>
    </Dropdown>
  ))
);
