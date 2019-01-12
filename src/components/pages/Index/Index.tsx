import React, { Component } from "react";
import {
  AboutMe,
  Services,
  Contact,
  DataProtection,
  KeyVisual,
  Navigation
} from "../../molecules";
import { Content } from "./Styled";

const Index = () => (
  <main>
    <Navigation />
    <KeyVisual />
    <Content>
      <AboutMe />
      <Services />
      <Contact />
      <DataProtection />
    </Content>
  </main>
);

export default Index;
