import { darken } from 'polished';
import styled from '../../../utils/styled-components';

const StyledButton = styled('button')<{
    disabled: boolean;
    secondary: boolean;
    radius: number;
    big: boolean;
    simple: boolean;
}>`
  ${({ disabled, secondary, radius, big, simple, theme }) =>
        simple
            ? ``
            : `
  display: flex;
  flex-direction: row;
  padding: 0.4rem 1.2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${big ? `20px` : `14px`};
  text-align: center;
  cursor: ${disabled ? `not-allowed` : `pointer`};
  transition: 0.3s;
  border-radius: ${`${radius}px` || '0'};
  background: ${
    disabled
        ? theme.colors.disabledColor
        : secondary
            ? theme.colors.secondaryColor
            : theme.colors.successColor
};
  color: ${
    disabled ? darken(0.3, theme.colors.disabledColor) : theme.colors.white
};
  border: 1.5px solid
    ${
    disabled
        ? theme.colors.disabledColor
        : secondary
            ? theme.colors.secondaryColor
            : theme.colors.successColor
};

  svg {
    margin-right: 10px;
  }
  &:hover {
    text-decoration: none;
    color: ${
    disabled ? darken(0.3, theme.colors.disabledColor) : theme.colors.white
};
    border: 1.5px solid
      ${
    disabled
        ? theme.colors.disabledColor
        : darken(
            0.2,
            secondary
                ? theme.colors.secondaryColor
                : theme.colors.successColor,
        )
};
    background-color: ${
    disabled
        ? theme.colors.disabledColor
        : darken(
            0.2,
            secondary ? theme.colors.secondaryColor : theme.colors.successColor,
        )
};
    svg {
      color: ${disabled ? theme.colors.disabledColor : theme.colors.white};
    }
  }
  &:active {
    border: 1.5px solid
      ${darken(
        0.3,
        secondary ? theme.colors.secondaryColor : theme.colors.successColor,
    )};
    background-color: ${
    disabled
        ? theme.colors.disabledColor
        : darken(
            0.3,
            secondary ? theme.colors.secondaryColor : theme.colors.successColor,
        )
};
    box-shadow: none !important;
    svg {
      color: ${theme.colors.white};
    }
  }
  &.light {
    background: #f5f5f5;
    border-radius: 1px;
    color: #333;
    border: none;
  }
  `}
`;

export default StyledButton;
