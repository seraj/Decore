import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

const stories = storiesOf("Components/Modal", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Modal isOpen={boolean("isOpen", false)} toggle={action("toggle")}>
      <ModalHeader toggle={action("toggle")}>
        {text("title", "Title")}
      </ModalHeader>
      <ModalBody>{text("Label", "Content")}</ModalBody>
    </Modal>
  ))
);
