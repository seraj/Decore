import * as React from "react";
import LazyLoad from "react-lazyload";
import { CSSTransition } from "react-transition-group";
import { withTheme } from "styled-components";
import { parseUrl, stringify } from "query-string";
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
    const parseURL = parseUrl(src || "");
    if (resize) {
      const numbers = { width: Number(width), height: Number(height) };

      if (numbers.width || numbers.height) {
        const w = numbers.width || numbers.height;
        const h = numbers.height || numbers.width;

        const query = stringify({
          ...parseURL.query,
          resize: `${w}x${h}`
        });
        return `${parseURL.url}?${query}`;
      }
    }
    return src;
  };
  public render() {
    const {
      props: { lazy, offset, theme, src, ...props },
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
        <LazyLoad height={props.height} offset={offset}>
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
