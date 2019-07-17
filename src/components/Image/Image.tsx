import * as React from "react";
import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";
import { withTheme } from "styled-components";

import StyledImage from "./styled/StyledImage";
import ImageProps from "./Image.props";

interface ImageState {
  loaded: boolean;
}
class Image extends React.Component<ImageProps, ImageState> {
  public state = {
    loaded: false
  };

  private onLoad = () => {
    this.setState({
      loaded: true
    });
  };

  public render() {
    const {
      props: { lazy, theme, ...props },
      state: { loaded }
    } = this;

    const image = <StyledImage {...props} onLoad={this.onLoad} />;

    if (lazy) {
      return (
        <LazyLoad height={props.height}>
          <CSSTransition
            timeout={theme.animations.duration}
            in={loaded}
            classNames="decore-image"
          >
            {image}
          </CSSTransition>
        </LazyLoad>
      );
    } else {
      return image;
    }
  }
}

export default withTheme(Image);
