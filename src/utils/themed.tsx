import * as React from "react";
import * as renderer from "react-test-renderer";
import Decore from "../components/Decore";
import theme from "../theme";

const themed = (component: React.ReactChild) =>
  renderer.create(<Decore theme={theme}>{component}</Decore>);

export default themed;
