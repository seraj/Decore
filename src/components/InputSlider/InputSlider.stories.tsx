import { number, withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import InputSlider from "./InputSlider";

const stories = storiesOf("Components/InputSlider", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <span style={{ padding: 40, display: "block" }}>
      <InputSlider
        maxValue={number("maxValue", 20)}
        minValue={number("minValue", 0)}
        disabled={boolean("disabled", false)}
        value={number("value", 4)}
        step={number("step", 2)}
        onChange={action("onChange")}
      />
    </span>
  ))
);
