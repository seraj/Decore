import * as React from "react";
import styled from "../../utils/styled-components";

export interface ColorProps {
    color: string;
    name: string;
}

const ColorBox = styled("div")<{ color: string }>`
  width: 200px;
  height: 200px;
  background: ${({ color }) => color};
`;

const ColorName = styled("div")`
  background: #fff;
  height: 50px;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-top: 0;
`;

const Wrapper = styled("div")`
  margin: 15px;
  display: inline-block;
  width: 200px;
  height: 250px;
  background: #fff;
`;

const Color: React.FC<ColorProps> = ({ color, name }) => (
    <Wrapper>
        <ColorBox color={color} />
        <ColorName>{name}</ColorName>
    </Wrapper>
);

export default Color;
