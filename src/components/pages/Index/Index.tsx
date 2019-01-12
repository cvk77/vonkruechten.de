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
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const AboutPage = () => (
  <>
    <AboutMe />
    <Services />
  </>
);

const Index = () => (
  <Router>
    <main>
      <Navigation />
      <KeyVisual />
      <Content>
        <Route path="/" exact={true}>
          <Redirect to="/about-me" />
        </Route>
        <Route path="/about-me" component={AboutPage} />
        <Route path="/contact/" component={Contact} />
        <Route path="/data-protection/" component={DataProtection} />
      </Content>
    </main>
  </Router>
);

export default Index;
