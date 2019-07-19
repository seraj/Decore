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
import Icon from "../Icon";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

const defaultIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBkPSJNMzM2IDBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDh2NDY0bDE5Mi0xMTIgMTkyIDExMlY0OGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQyOC40M2wtMTQ0LTg0LTE0NCA4NFY1NGE2IDYgMCAwIDEgNi02aDI3NmMzLjMxNCAwIDYgMi42ODMgNiA1Ljk5NlY0MjguNDN6Ii8+PC9zdmc+Cg==";

stories.add(
  "default",
  wInfo()(() => (
    <div>
      <Button
        disabled={boolean("Disabled", false)}
        secondary={boolean("Secondary", false)}
        outline={boolean("Outline", false)}
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

      <br />

      <Button
        disabled={boolean("Disabled", false)}
        secondary={boolean("Secondary", false)}
        outline={boolean("Outline", false)}
        dSize={select(
          "Size",
          [Size.mini, Size.small, Size.normal, Size.big, Size.huge],
          Size.normal
        )}
        radius={number("Border Radius", 0)}
        onClick={action("onClick")}
      >
        <Icon src={defaultIcon} /> {text("Label", "Default")}
      </Button>
    </div>
  ))
);
