import React, { Component } from "react";
import { Li, A, Menu, MenuItems, StyledNavLink } from "./Styled";
import { LocationDescriptor } from "history";
import { Xing, Twitter, GitHub } from "../../atoms/Icons/Icons";

interface IMenuItemProps {
  href: LocationDescriptor<any>;
  label: string;
}

interface IMenuItemExternalProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

const MenuItem = ({ href, label }: IMenuItemProps) => (
  <Li>
    <StyledNavLink to={href}>{label}</StyledNavLink>
  </Li>
);

const MenuItemExternal = ({ href, label, icon }: IMenuItemExternalProps) => (
  <Li>
    <A rel="me" href={href}>
      {icon}
    </A>
  </Li>
);

const Navigation = () => (
  <>
    <Menu>
      <MenuItems>
        <MenuItem href="about-me" label="Über mich" />
        <MenuItem href="contact" label="Impressum" />
        <MenuItem href="data-protection" label="Datenschutz" />
      </MenuItems>
      <MenuItems external={true}>
        <MenuItemExternal
          icon={<Twitter />}
          href="https://twitter.com/cvk77"
          label="Twitter"
        />
        <MenuItemExternal
          icon={<GitHub />}
          href="https://github.com/cvk77/"
          label="GitHub"
        />
        <MenuItemExternal
          icon={<Xing />}
          href="https://www.xing.com/profile/Christoph_vonKruechten"
          label="Xing"
        />
      </MenuItems>
    </Menu>
  </>
);

export default Navigation;
