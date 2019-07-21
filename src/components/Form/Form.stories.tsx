import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Form from "./Form";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import Input from "../Input";
import Button from "../Button";

const stories = storiesOf("Components/Form", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Form>
      <FormGroup>
        <FormLabel for="exampleEmail">Email</FormLabel>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          fluid
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel for="examplePassword">Password</FormLabel>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          fluid
          placeholder="password placeholder"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  ))
);
