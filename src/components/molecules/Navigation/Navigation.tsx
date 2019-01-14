import React, { Component } from "react";
import { Nav, Ul } from "./Styled";

import { Xing, Twitter, GitHub } from "../../atoms/Icons/Icons";
import { MenuItem, MenuItemExternal } from "../../atoms";

const Navigation = () => (
  <Nav>
    <Ul>
      <MenuItem href="about-me" label="Über mich" />
      <MenuItem href="contact" label="Impressum" />
      <MenuItem href="data-protection" label="Datenschutz" />
    </Ul>
    <Ul external={true}>
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
    </Ul>
  </Nav>
);

export default Navigation;
