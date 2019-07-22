import { InputRangeProps } from "react-input-range";
import ThemeProps from "../../theme/Theme.props";

export default interface InputSliderProps
  extends ThemeProps,
    React.HTMLAttributes<HTMLDivElement> {}

export interface InputRangeProps extends ThemeProps, InputRangeProps {}
