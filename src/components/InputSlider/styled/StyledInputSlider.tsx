import styled from "styled-components";
import InputSliderProps from "../InputSlider.props";

const StyledInputSlider = styled.div<InputSliderProps>`
  ${({ theme }) => {
    const backgroundColor = theme.colors.primary.normal;

    return `
    .input-range__slider,.input-range__track--active {
      background:${backgroundColor};
      border-color:${backgroundColor};
    }
   `;
  }}
`;

export default StyledInputSlider;
