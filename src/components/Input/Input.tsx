import * as React from "react";
import StyledInput from "./styled/StyledInput";

interface InputProps {
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

const Input: React.FC<InputProps> = ({
    className,
    type = 'text',
    disabled = false,
    simple = false,
    radius = 0,
    defaultValue = '',
    value = '',
    onChange
}) => (
    <StyledInput
        type={type}
        defaultValue={defaultValue}
        value={value}
        className={className}
        disabled={disabled}
        simple={simple}
        radius={radius}
        onChange={onChange} />
);

export default Input;