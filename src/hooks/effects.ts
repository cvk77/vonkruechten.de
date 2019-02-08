import { useState, useEffect, RefObject } from "react";
import { calculatePercentage } from "../lib/math";

/**
 * Adds a scroll listener to the window and returns the current scroll position.
 */
export const useScrollPosition = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () =>
      setScrollTop(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrollTop;
};

/**
 * Adds a resize listener to the window and returns the current window width and height.
 */
export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const onResize = () => {
      setWidth(Math.max(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth));
      setHeight(Math.max(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight));
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return [width, height];
};

/**
 * Returns how many percent of the given element's height are currently visible on the screen.
 *
 * @param ref The element
 * @param offset Offset from screen top to use
 */
export const usePercentageVisible = (ref: RefObject<HTMLElement>, offset: number = 0) => {
  const [percentage, setPercentage] = useState(1);
  const [w, h] = useWindowSize();
  const y = useScrollPosition() + offset;
  useEffect(() => {
    if (ref.current != null) {
      setPercentage(calculatePercentage(ref.current.clientHeight, y));
    }
  }, [w, h, y]);
  return percentage;
};

export const useStickyTop = (ref: RefObject<HTMLElement>, offset: number = 0) => {
  const [top, setTop] = useState(1);
  const [w, h] = useWindowSize();
  useEffect(() => {
    if (ref.current != null) {
      setTop(-ref.current.clientHeight + offset);
    }
  }, [w, h]);
  return top;
};
