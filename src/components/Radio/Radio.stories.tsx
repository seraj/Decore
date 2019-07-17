import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Radio from "./Radio";

const stories = storiesOf("Components/Radio", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <>
      <div>
        <Radio name="test" />
      </div>
      <div>
        <Radio name="test" />
      </div>
    </>
  ))
);
