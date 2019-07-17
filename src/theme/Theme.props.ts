export enum Size {
  mini = "mini",
  small = "small",
  normal = "normal",
  big = "big",
  huge = "huge"
}

export interface HTMLProps<T>
  extends React.DOMAttributes<T>,
    React.AriaAttributes,
    React.HTMLAttributes<T> {}

export default interface ThemeProps {
  /** change the background of Button to our secondary Color */
  secondary?: boolean;

  radius?: number;

  dSize?: Size;

  light?: boolean;
}
