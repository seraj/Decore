export default interface InputProps {
    defaultValue?: string;
    value?: string;
    /** Additional classes */
    className?: string;
    /** Renders a disabled button and prevents future behavior */
    disabled?: boolean;
    /** Will render a simple input without styles */
    simple?: boolean;
    /** Change radius of input */
    radius?: number;
    /** Callback function to change the value */
    onChange?: () => void,
    /** set type of input */
    type?: string;
}

