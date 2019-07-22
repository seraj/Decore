import { withKnobs, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import wInfo from "../../utils/wInfo";
import Table from "./Table";

const columns = [
  {
    Header: "ID",
    accessor: "id",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Name",
    accessor: "name",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Specialty",
    accessor: "specialty",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  }
];
const data = [
  {
    id: 1,
    name: "John Doe",
    specialty: "Front End Engineer"
  },
  {
    id: 2,
    name: "David Doe",
    specialty: "Back End Developer"
  }
];
const stories = storiesOf("Components/Table", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Table
      minRows={0}
      pageSize={1}
      data={data}
      columns={columns}
      pages={0}
      loading={boolean("loading", false)}
      showPagination={boolean("Pagination", false)}
      compact={boolean("compact", false)}
      simple={boolean("simple", false)}
    />
  ))
);
