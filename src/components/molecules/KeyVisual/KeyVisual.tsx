import React, { Component } from "react";
import { Header, H1, H2, Div } from "./Styled";
import { Ref } from "react";

interface IKeyVisualState {
  opacity: number;
  headerHeight: number;
}

const initialState: IKeyVisualState = {
  headerHeight: 0,
  opacity: 1
};

class KeyVisual extends React.Component<{}, IKeyVisualState> {
  public readonly state: IKeyVisualState = initialState;
  private headerRef = React.createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  public handleScroll() {
    if (this.headerRef.current === null) {
      return;
    }

    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const headerHeight = this.headerRef.current.clientHeight;
    const percentVisible = (headerHeight - scrollTop) / headerHeight;

    this.setState({
      headerHeight,
      opacity: percentVisible < 0 ? 0 : percentVisible
    });
  }

  public render() {
    return (
      <Div ref={this.headerRef} style={{ top: -this.state.headerHeight + 50 }}>
        <Header style={{ opacity: this.state.opacity }}>
          <div>
            <H1>Christoph von Krüchten</H1>
            <H2>Softwarearchitektur, -Konzeption, -Entwicklung</H2>
          </div>
        </Header>
      </Div>
    );
  }
}

export default KeyVisual;
