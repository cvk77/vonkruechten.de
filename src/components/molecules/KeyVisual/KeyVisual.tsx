import React, { useRef } from "react";
import { Header, H1, H2, Div } from "./Styled";
import { useStickyTop, usePercentageVisible, useScrollPosition, useWindowSize } from "../../../hooks/effects";

const KeyVisual = () => {
  const headerRef = useRef(null);
  const scrollTop = useScrollPosition();
  const windowSize = useWindowSize();
  const topPosition = useStickyTop(windowSize, headerRef, 50);
  const percentageVisible = Math.sin(usePercentageVisible(windowSize, scrollTop, headerRef, 50) * 1.571);

  return (
    <Div ref={headerRef} style={{ top: topPosition }}>
      <Header style={{ opacity: percentageVisible }}>
        <div>
          <H1>Christoph von Krüchten</H1>
          <H2>Softwarearchitektur, -Konzeption, -Entwicklung</H2>
        </div>
      </Header>
    </Div>
  );
};

export default KeyVisual;
