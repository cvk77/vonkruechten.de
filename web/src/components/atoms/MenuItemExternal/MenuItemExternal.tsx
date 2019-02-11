import React, { Component } from "react";
import { A } from "./Styled";
import { Li } from "..";

interface IMenuItemExternalProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

const MenuItemExternal = ({ href, label, icon }: IMenuItemExternalProps) => (
  <Li inline={true}>
    <A rel="me" href={href}>
      {icon}
    </A>
  </Li>
);

export default MenuItemExternal;
