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

export interface Internal {
  /** change the background of Button to our secondary Color */
  secondary?: boolean;

  radius?: number;

  dSize?: Size;
}

type ThemeProps<
  T extends React.HTMLAttributes<E>,
  E extends HTMLElement
> = Internal & T;

export default ThemeProps;
