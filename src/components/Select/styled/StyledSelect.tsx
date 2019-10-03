import styled from "styled-components";
import SelectProps from "../Select.props";

const StyledSelect = styled.select<SelectProps>`
  ${({ dark, success, fluid, error, theme }) => {
    const backgroundColor = dark ? theme.colors.mono[200] : theme.colors.white;

    let textColor = theme.colors.text.dark;
    let borderColor = theme.colors.mono[500];
    let borderColorHover = theme.colors.mono[700];
    if (success) {
      borderColor = theme.colors.success.normal;
      borderColorHover = borderColor;
      textColor = borderColor;
    } else if (error) {
      borderColor = theme.colors.error;
      borderColorHover = borderColor;
      textColor = borderColor;
    }

    return `
    color: ${textColor};
    padding: ${theme.padding.select};
    height: 45px;
    border: ${theme.borders.width}px solid ${borderColor};
    border-radius:  ${theme.borders.radius}px;
    appearance: none;
    background-color: ${backgroundColor};
	  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxOCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxTDkgOS42MTA5MUwxNyAxIiBzdHJva2U9IiM5OTk5OTkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lam9pbj0iYmV2ZWwiLz48L3N2Zz4=);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .9em auto, 100%;
 ${
   fluid
     ? `
      display: block;
      width: 100%;`
     : ``
 }
      &:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOCAxMSI+ICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEgMUw5IDkuNjEwOTFMMTcgMSIvPjwvc3ZnPg==);
        border-color: ${borderColorHover};
      }

      &:disabled {
	      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOCAxMSI+ICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEgMUw5IDkuNjEwOTFMMTcgMSIvPjwvc3ZnPg==);
        background: ${theme.colors.mono[300]};
        color: ${theme.colors.mono[500]};
        cursor: not-allowed !important;
        pointer-events: none;
      }
  `;
  }}
`;

export default StyledSelect;
