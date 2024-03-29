import { text, withKnobs, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Input from "./Input";

const stories = storiesOf("Components/Input", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Input
      type={text("type", "text")}
      defaultValue={text("defaultValue", "")}
      disabled={boolean("disabled", false)}
      dark={boolean("dark", false)}
      success={boolean("success", false)}
      error={boolean("error", false)}
      fluid={boolean("fluid", false)}
    />
  ))
);
