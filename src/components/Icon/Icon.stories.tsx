import { withKnobs, files, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Icon from "./Icon";

const stories = storiesOf("Components/Icon", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => {
    const defaultIcon =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBkPSJNMzM2IDBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDh2NDY0bDE5Mi0xMTIgMTkyIDExMlY0OGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQyOC40M2wtMTQ0LTg0LTE0NCA4NFY1NGE2IDYgMCAwIDEgNi02aDI3NmMzLjMxNCAwIDYgMi42ODMgNiA1Ljk5NlY0MjguNDN6Ii8+PC9zdmc+Cg==";

    const iconFile = files("Icon File", "image/svg+xml", [defaultIcon])[0];

    return (
      <>
        <span style={{ padding: "5px" }}>
          <Icon src={iconFile}></Icon>
        </span>
        <span style={{ padding: "5px", background: "black" }}>
          <Icon light src={iconFile}></Icon>
        </span>
      </>
    );
  })
);
