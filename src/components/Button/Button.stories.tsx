import { action } from "@storybook/addon-actions";
import {
  boolean,
  number,
  text,
  withKnobs,
  select
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Size } from "../../theme/Theme.props";
import wInfo from "../../utils/wInfo";
import Button from "./Button";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Button
      disabled={boolean("Disabled", false)}
      secondary={boolean("Secondary", false)}
      dSize={select(
        "Size",
        [Size.mini, Size.small, Size.normal, Size.big, Size.huge],
        Size.normal
      )}
      radius={number("Border Radius", 0)}
      onClick={action("onClick")}
    >
      {text("Label", "Default")}
    </Button>
  ))
);
