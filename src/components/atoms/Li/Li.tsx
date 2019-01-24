import React, { Component } from "react";

import { InlineLi, ListLi } from "./Styled";
import { HTMLAttributes } from "react";

interface ILiProps extends HTMLAttributes<HTMLLIElement> {
  inline?: boolean;
}

const Li = (props: ILiProps) => React.createElement(props.inline ? InlineLi : ListLi, props);

export default Li;
