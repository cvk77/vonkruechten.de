import React, { Component } from "react";
import { KeyVisual, Navigation } from "../../molecules";
import { Content } from "./Styled";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

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
        <Route path="/about-me" exact={true} component={AboutPage} />
        <Route path="/contact" exact={true} component={ContactPage} />
        <Route
          path="/data-protection"
          exact={true}
          component={DataProtectionPage}
        />
      </Content>
    </main>
  </Router>
);

export default App;
