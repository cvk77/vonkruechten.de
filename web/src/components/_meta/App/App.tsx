import React, { Component } from "react";
import { KeyVisual, Navigation } from "../../molecules";
import { Content } from "./Styled";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import AboutPage from "../../pages/AboutPage/AboutPage";
import DataProtectionPage from "../../pages/DataProtectionPage/DataProtectionPage";
import KeyVisualStore from "../../../stores/KeyVisualStore";

const keyVisualStore = new KeyVisualStore();

const App = () => (
  <Router>
    <main>
      <Navigation />
      <KeyVisual store={keyVisualStore} />
      <Content id="top">
        <Route path="/" exact={true} component={AboutPage} />
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
