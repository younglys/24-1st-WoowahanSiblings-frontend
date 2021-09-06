import React, { Component } from "react";
import TopLayout from "./TopLayout";
import Navdropmenu from "./Navdropmenu";
import NavMenuCategory from "./NavMenuCategory";
import NavInput from "./NavInput";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navLayout">
        <TopLayout />
        <div className="secondLayout">
          <img alt="logo" src="/images/logo2.png" />
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
