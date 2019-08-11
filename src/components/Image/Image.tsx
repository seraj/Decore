import * as React from "react";
import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";
import { withTheme } from "styled-components";
import queryString from "query-string";
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

  private handleImageSource = (
    height: string | number | undefined,
    width: string | number | undefined,
    resize: boolean | undefined,
    src: string | undefined
  ) => {
    let source;
    const parseUrl = queryString.parseUrl(src || "");
    if (height !== undefined && width !== undefined && resize) {
      const query = queryString.stringify({
        ...parseUrl.query,
        resize: `${width}x${height}`
      });
      source = `${parseUrl.url}?${query}`;
    } else {
      source = src;
    }
    return source;
  };
  public render() {
    const {
      props: { lazy, theme, src, ...props },
      state: { loaded }
    } = this;
    const source = this.handleImageSource(
      props.height,
      props.width,
      props.resize,
      src
    );
    const image = <StyledImage src={source} {...props} onLoad={this.onLoad} />;

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
