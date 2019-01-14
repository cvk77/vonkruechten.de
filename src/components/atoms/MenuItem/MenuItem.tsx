import React, { Component } from "react";
import { LocationDescriptor } from "history";
import { StyledNavLink } from "./Styled";
import { Li } from "..";

interface IMenuItemProps {
  href: LocationDescriptor<any>;
  label: string;
}

const MenuItem = ({ href, label }: IMenuItemProps) => (
  <Li inline={true}>
    <StyledNavLink to={href}>{label}</StyledNavLink>
  </Li>
);

export default MenuItem;
