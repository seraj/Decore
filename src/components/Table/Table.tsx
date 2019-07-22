import * as React from "react";
import StyledTable from "./styled/StyledTable";
import TableProps from "./Table.props";
import "react-table/react-table.css";

const Table: React.FC<TableProps> = ({ ...props }) => {
  return <StyledTable {...props} />;
};
export default Table;
