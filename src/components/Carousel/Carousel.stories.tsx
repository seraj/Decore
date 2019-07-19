import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Carousel from "./Carousel";

const stories = storiesOf("Components/Carousel", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => {
    const carousel = (
      <Carousel autoplay={boolean("autoplay", true)}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/401/200" />
        </div>
      </Carousel>
    );

    return carousel;
  })
);
