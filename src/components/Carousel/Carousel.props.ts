import ThemeProps from "../../theme/Theme.props";

export type SwipeDirection = "left" | "down" | "right" | "up" | string;

export default interface CarouselProps
  extends ThemeProps,
    React.HTMLAttributes<HTMLDivElement> {
  onEdge?(swipeDirection: SwipeDirection): void;
  onInit?(): void;
  onLazyLoad?(slidesToLoad: number[]): void;
  onReInit?(): void;
  onSwipe?(swipeDirection: SwipeDirection): void;
  afterChange?(currentSlide: number): void;
  beforeChange?(currentSlide: number, nextSlide: number): void;
  speed?: number;

  autoplay?: boolean;
  autoplaySpeed?: number;
}
