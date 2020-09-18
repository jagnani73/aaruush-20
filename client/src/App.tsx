import React from "react";
import { Switch, Route } from "react-router-dom";

import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </>
  );
};

export default App;
