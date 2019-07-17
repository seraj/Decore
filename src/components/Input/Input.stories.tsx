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
            onChange={action("onChange")}
            defaultValue={text("defaultValue", "")}
            value={text("defaultValue", "")}
            className={text("className", "")}
            disabled={boolean("disabled", false)}
            simple={boolean("simple", false)}
            radius={number("border-radius", 0)}
        />
    ))
);
