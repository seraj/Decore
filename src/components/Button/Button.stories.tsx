import { action } from "@storybook/addon-actions";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Button from "./Button";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

stories.add(
    "default",
    wInfo()(() => (
        <Button
            className={text("className", "")}
            disabled={boolean("Disabled", false)}
            secondary={boolean("Secondary", false)}
            simple={boolean("Simple", false)}
            big={boolean("Big", false)}
            radius={number("Border Radius", 0)}
            onClick={action("onClick")}
        >
            {text("Label", "Default")}
        </Button>
    ))
);