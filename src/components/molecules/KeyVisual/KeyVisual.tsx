import React, { useState, useEffect, useRef, RefObject } from "react";
import { Header, H1, H2, Div } from "./Styled";
import { useStickyTop, usePercentageVisible } from "../../../hooks/effects";

const KeyVisual = () => {
  const headerRef = useRef(null);
  const topPosition = useStickyTop(50, headerRef);
  const percentageVisible = usePercentageVisible(headerRef);

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
