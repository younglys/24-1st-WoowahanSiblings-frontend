import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail/Detail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Main} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
