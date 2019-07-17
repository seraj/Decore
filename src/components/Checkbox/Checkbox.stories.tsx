import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Checkbox from "./Checkbox";

const stories = storiesOf("Components/Checkbox", module);
stories.addDecorator(withKnobs);

stories.add("default", wInfo()(() => <Checkbox></Checkbox>));
