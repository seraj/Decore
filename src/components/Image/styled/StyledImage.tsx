import styled from "styled-components";
import ImageProps from "../Image.props";

const StyledImage = styled.img<ImageProps>`
  ${({ theme }) => `
    &.decore-image-enter {
      opacity: 0;
    }

    &.decore-image-enter-active {
      opacity: 1;
      transition: opacity ${theme.animations.duration}ms;
    }

    &.decore-image-exit {
      opacity: 1;
    }

    &.decore-image-exit {
      opacity: 0;
      transition: opacity ${theme.animations.duration}ms;
    }
`}
`;

export default StyledImage;
