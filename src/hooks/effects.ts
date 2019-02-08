import { useState, useEffect, RefObject } from "react";
import { calculatePercentage } from "../lib/math";

export const useScrollPosition = (n: number) => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () =>
      setScrollTop(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });
  return scrollTop;
};

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  });
  return [width, height];
};

export const usePercentageVisible = (ref: RefObject<HTMLElement>) => {
  const [percentage, setPercentage] = useState(1);
  const [w, h] = useWindowSize();
  const y = useScrollPosition(0);

  useEffect(() => {
    if (ref.current != null) {
      setPercentage(calculatePercentage(ref.current.clientHeight, scrollY));
    }
  }, [y, w, h]);
  return percentage;
};

export const useStickyTop = (offset: number, ref: RefObject<HTMLElement>) => {
  const [top, setTop] = useState(1);
  const [w, h] = useWindowSize();
  useEffect(() => {
    if (ref.current != null) {
      setTop(-ref.current.clientHeight + offset);
    }
  }, [w, h]);
  return top;
};
