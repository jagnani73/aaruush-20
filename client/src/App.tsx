import React from "react";
import { Switch, Route } from "react-router-dom";

import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/about-us" component={AboutUs} />
      </Switch>
    </>
  );
};

export default App;
