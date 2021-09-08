import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import TopLayout from "./TopLayout";
import Navdropmenu from "./Navdropmenu";
import NavMenuCategory from "./NavMenuCategory";
import NavInput from "./NavInput";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="navLayout">
        <TopLayout />
        <div className="secondLayout">
          <Link to="/">
            <img alt="logo" src="/images/logo2.png" />
          </Link>
        </div>
        <div className="thirdLayout">
          <ul className="allCategorie">
            <Navdropmenu />
            <NavMenuCategory />
          </ul>
          <NavInput />
        </div>
      </nav>
    );
  }
}

export default Nav;
