import * as React from "react";
import InputRange from "react-input-range";
import StyledInputSlider from "./styled/StyledInputSlider";
import InputSliderProps, { InputRangeProps } from "./InputSlider.props";
import "react-input-range/lib/css/index.css";

const Container: React.FC<InputSliderProps> = ({ children, ...props }) => (
  <StyledInputSlider {...props}>{children}</StyledInputSlider>
);
const InputSlider: React.FC<InputRangeProps> = ({ ...props }) => (
  <Container>
    <InputRange {...props} />
  </Container>
);

export default InputSlider;
