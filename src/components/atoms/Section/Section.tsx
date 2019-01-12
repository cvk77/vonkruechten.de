import React, { Component, RefObject } from "react";
import ReactDOM from "react-dom";

interface ISectionProps {
  id: string;
  children?: any;
}

class Section extends Component<ISectionProps, any> {
  private myRef: RefObject<HTMLElement>;

  constructor(props: ISectionProps) {
    super(props);
    this.myRef = React.createRef();
  }

  public scrollTo = () => {
    if (!this.myRef.current) {
      return;
    }
    window.scrollTo({
      behavior: "smooth",
      top: this.myRef.current.offsetTop
    });
  };

  public render() {
    const { children, id } = this.props;
    return <section ref={this.myRef}>{children}</section>;
  }
}

export default Section;
