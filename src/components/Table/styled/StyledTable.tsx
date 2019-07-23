import styled from "styled-components";
import ReactTable from "react-table";
import TableProps from "../Table.props";

const StyledTable = styled(ReactTable)<TableProps>`
  ${({ compact, simple, theme }) => {
    const Padding = compact
      ? theme.padding.table.normal
      : theme.padding.table.compact;
    const backgroundColor = simple ? "" : theme.colors.mono[200];

    return `
  border: none !important;
  .rt-thead.-header {
    box-shadow: none !important;
    border-bottom: 1px solid ${theme.colors.mono[400]};
  }
  .rt-td {
    padding:${Padding} !important;
  }
  .rt-thead {
    .rt-th,
    .rt-td {
      border-right: none !important;
      color: ${theme.colors.mono[500]};
    }
  }
  .rt-tbody {
    .rt-tr-group {
      border-bottom-color: ${theme.colors.mono[400]} !important;
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
