import React, { Component } from "react";
import { Li, A, Menu, MenuItems } from "./Styled";

interface IMenuItemProps {
  href?: string;
  label: string;
}

interface IMenuItemExternalProps extends IMenuItemProps {
  icon: string;
}

const MenuItem = ({ href, label }: IMenuItemProps) => (
  <Li>
    <A href={href}>{label}</A>
  </Li>
);

const MenuItemExternal = ({ href, label, icon }: IMenuItemExternalProps) => (
  <Li>
    <A className={icon + " icon"} rel="me" href={href}>
      {label}
    </A>
  </Li>
);

const Navigation = () => (
  <>
    <Menu>
      <MenuItems>
        <MenuItem href="#about-me" label="Über mich" />
        <MenuItem href="#services" label="Leistungen" />
        <MenuItem href="#contact" label="Kontakt / Impressum" />
        <MenuItem href="#data-protection" label="Datenschutzerklärung" />
      </MenuItems>
      <MenuItems external={true}>
        <MenuItemExternal
          icon="xing"
          href="https://www.xing.com/profile/Christoph_vonKruechten"
          label="Xing"
        />
        <MenuItemExternal
          icon="github"
          href="https://github.com/cvk77/"
          label="GitHub"
        />
        <MenuItemExternal
          icon="twitter"
          href="https://twitter.com/cvk77"
          label="Twitter"
        />
      </MenuItems>
    </Menu>
  </>
);

export default Navigation;
