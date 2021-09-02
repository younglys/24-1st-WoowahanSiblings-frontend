import React, { Component } from "react";
import Navdropmenu from "./Navdropmenu";
import NavMenuCategory from "./NavMenuCategory";
import TopLayout from "./TopLayout";
import Logo from "./Logo";
import "./Nav.scss";
import NavInput from "./NavInput";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navLayout">
        <TopLayout />
        <Logo />
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
