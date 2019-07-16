import * as React from "react";
import StyledInput from "./styled/StyledInput";

interface InputProps {
    defaultValue?: string;
    value?: string;
    className?: string;
    disabled?: boolean;
    simple?: boolean;
    radius?: number;
    big?: boolean;
    onChange?: () => void
}

const Input: React.FC<InputProps> = ({
    className,
    disabled = false,
    simple = false,
    radius = 0,
    big = false,
    defaultValue = '',
    value = '',
    onChange
}) => (
    <StyledInput
        defaultValue={defaultValue}
        value={value}
        className={className}
        disabled={disabled}
        simple={simple}
        radius={radius}
        big={big}
        onChange={onChange} />
);

export default Input;
