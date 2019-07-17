import ThemeProps from "../../theme/Theme.props";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface ButtonProps
  extends ThemeProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
