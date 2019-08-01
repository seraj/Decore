import * as React from "react";
import CounterProps from "./Counter.props";
interface CounterState {
    value: number | undefined;
    userSet: boolean;
}
declare class Counter extends React.Component<CounterProps, CounterState> {
    state: {
        value: number;
        userSet: boolean;
    };
    static getDerivedStateFromProps(props: CounterProps, state: CounterState): {
        value: number | undefined;
    };
    private boundCheck;
    private increment;
    private decrement;
    static parseValue(v: string | string[] | undefined | number, defaultValue: number | undefined): number | undefined;
    render(): JSX.Element;
}
export default Counter;
