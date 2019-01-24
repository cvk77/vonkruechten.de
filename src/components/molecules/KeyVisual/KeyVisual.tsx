import React, { Component } from "react";
import { Header, H1, H2, Div } from "./Styled";
import { Ref } from "react";
import { observer } from "mobx-react";
import KeyVisualStore from "../../../stores/KeyVisualStore";

interface IKeyVisualProps {
  store: KeyVisualStore;
}

@observer
class KeyVisual extends React.Component<IKeyVisualProps, {}> {
  private headerRef = React.createRef<HTMLDivElement>();

  constructor(props: IKeyVisualProps) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
    this.onScroll();
    this.onResize();
  }

  public onResize() {
    if (this.headerRef.current === null) {
      return;
    }
    this.props.store.headerHeight = this.headerRef.current.clientHeight;
  }

  public onScroll() {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    this.props.store.scrollTop = scrollTop;
  }

  public render() {
    const { headerHeight, percentVisible, topPosition } = this.props.store;
    return (
      <Div ref={this.headerRef} style={{ top: topPosition }}>
        <Header style={{ opacity: percentVisible }}>
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
