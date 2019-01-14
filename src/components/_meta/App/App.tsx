import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
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

import AboutPage from "../../pages/AboutPage/AboutPage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import DataProtectionPage from "../../pages/DataProtectionPage/DataProtectionPage";

const App = () => (
  <Router>
    <main>
      <Navigation />
      <KeyVisual />
      <Content>
        <Route path="/" exact={true}>
          <Redirect to="/about-me" />
        </Route>
        <Route path="/about-me" component={AboutPage} />
        <Route path="/contact/" component={ContactPage} />
        <Route path="/data-protection/" component={DataProtectionPage} />
      </Content>
    </main>
  </Router>
);

export default App;
