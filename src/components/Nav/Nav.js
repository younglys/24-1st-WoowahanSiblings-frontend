import React, { Component } from "react";
import TopLayout from "./TopLayout";
import NavDropmenu from "./NavDropmenu";
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
            <NavDropmenu />
            <NavMenuCategory />
          </ul>
          <NavInput />
        </div>
      </nav>
    );
  }
}
