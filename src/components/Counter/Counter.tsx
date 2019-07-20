import * as React from "react";
import StyledCounter, { Container, HiddenInput } from "./styled/StyledCounter";
import CounterProps from "./Counter.props";

interface CounterState {
  value: number | undefined;
  userSet: boolean;
}

class Counter extends React.Component<CounterProps, CounterState> {
  public state = {
    value: 0,
    userSet: false
  };

  public static getDerivedStateFromProps(
    props: CounterProps,
    state: CounterState
  ) {
    const propsValue = Counter.parseValue(
      props.value,
      Counter.parseValue(props.defaultValue, 0)
    );
    return {
      value: state.userSet ? state.value : propsValue
    };
  }

  private boundCheck = (v: number) => {
    let { min, max } = this.props;
    if (!min) {
      min = -Infinity;
    } else if (typeof min == "string") {
      min = parseInt(min, 10);
    }

    if (!max) {
      max = Infinity;
    } else if (typeof max == "string") {
      max = parseInt(max, 10);
    }
    return Math.max(Math.min(v, max), min);
  };

  private increment = () => {
    this.setState({
      value: this.boundCheck(this.state.value + 1),
      userSet: true
    });
  };

  private decrement = () => {
    this.setState({
      value: this.boundCheck(this.state.value - 1),
      userSet: true
    });
  };

  public static parseValue(
    v: string | string[] | undefined | number,
    defaultValue: number | undefined
  ) {
    if (v === undefined) {
      return defaultValue;
    } else if (typeof v == "string") {
      return parseInt(v, 10);
    } else if (Array.isArray(v)) {
      return parseInt(v[0], 10);
    }

    return v;
  }

  public render() {
    const { children, min, max, ...props } = this.props;

    let value: number | undefined = this.state.value;
    if (this.props.value !== undefined) {
      value = Counter.parseValue(this.props.value, undefined);
    }

    return (
      <Container>
        <HiddenInput value={value} {...props} type="number" />
        <StyledCounter {...props} value={value} min={min} max={max}>
          <span className="decore__minus" onClick={this.decrement}>
            -
          </span>
          <span className="decore__value">{value}</span>
          <span className="decore__plus" onClick={this.increment}>
            +
          </span>
        </StyledCounter>
      </Container>
    );
  }
}

export default Counter;
