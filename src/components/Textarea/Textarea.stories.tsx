import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Textarea from "./Textarea";

const stories = storiesOf("Components/Textarea", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Textarea
      dark={boolean("dark", false)}
      placeholder="Write something here..."
    ></Textarea>
  ))
);
