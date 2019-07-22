import { boolean, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Collapse from "./Collapse";

const stories = storiesOf("Components/Collapse", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => <Collapse isOpen={boolean("isOpen", false)}>content</Collapse>)
);
