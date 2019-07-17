import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Image from "./Image";

const stories = storiesOf("Components/Image", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <div>
      <Image
        lazy={true}
        src={`https://dummyimage.com/200x600/000/fff.jpg?text=${Date.now()}`}
        height={640}
      />
      <br />
      <Image
        lazy={true}
        src={`https://dummyimage.com/200x600/000/fff.jpg?text=${Date.now() +
          1}`}
        height={640}
      />
      <br />
      <Image
        lazy={true}
        src={`https://dummyimage.com/200x600/000/fff.jpg?text=${Date.now() +
          2}`}
        height={640}
      />
      <br />
      <Image
        lazy={true}
        src={`https://dummyimage.com/200x600/000/fff.jpg?text=${Date.now() +
          3}`}
        height={640}
      />
      <br />
    </div>
  ))
);
