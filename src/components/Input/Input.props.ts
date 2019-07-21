import ThemeProps from "../../theme/Theme.props";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface InputProps
  extends ThemeProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  fluid?: boolean;
}
