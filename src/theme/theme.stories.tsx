import { storiesOf } from "@storybook/react";
import * as React from "react";
import { flattenDeep } from "lodash";
import Color from "./Color";
import theme from "./index";

const stories = storiesOf("Themes/Colors", module);

const getColors = (obj: object, pastKeys: string[] = []) =>
  flattenDeep(
    Object.entries(obj).map(([key, value]) => {
      if (typeof value === "object") {
        return getColors(value, pastKeys.concat(key));
      }

      return { name: pastKeys.concat(key).join("."), color: value };
    })
  );

const colors = getColors(theme.colors).map(({ name, color }) => (
  <Color name={name} color={color} />
));

stories.add("List", () => <React.Fragment>{colors}</React.Fragment>);
