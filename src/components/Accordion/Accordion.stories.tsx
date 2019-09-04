import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Accordion from "./Accordion";

const stories = storiesOf("Components/Accordion", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <>
      <Accordion question="Hey!">This is Test</Accordion>
      <Accordion question="Hey!">This is Test</Accordion>
    </>
  ))
);
