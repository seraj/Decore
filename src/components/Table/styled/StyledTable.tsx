import styled from "styled-components";
import ReactTable from "react-table";
import TableProps from "../Table.props";

const StyledTable = styled(ReactTable)<TableProps>`
  ${({ compact, simple, theme }) => {
    const Padding = compact ? "7px 5px" : "20px 5px";
    const backgroundColor = simple ? "" : theme.colors.mono[200];

    return `
  border: none !important;
  .rt-thead.-header {
    box-shadow: none !important;
    border-bottom: 1px solid #c4c4c4;
  }
  .rt-td {
    padding:${Padding} !important;
  }
  .rt-thead {
    .rt-th,
    .rt-td {
      border-right: none !important;
      color: #999999;
    }
  }
  .rt-tbody {
    .rt-tr-group {
      border-bottom-color: #c4c4c4 !important;
      &:nth-child(odd) {
        background-color:${backgroundColor}
      }
    }
    .rt-td {
      border-right: none !important;
      text-align: center !important;
    }
  }
  `;
  }}
`;

export default StyledTable;
