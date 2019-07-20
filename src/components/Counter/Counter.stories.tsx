import { text, number, boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Counter from "./Counter";

const stories = storiesOf("Components/Counter", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Counter
      min={number("min", -10)}
      max={number("max", 10)}
      defaultValue={text("defaultValue", "0")}
      value={number("value", undefined)}
      disabled={boolean("disabled", false)}
    ></Counter>
  ))
);
