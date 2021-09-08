import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class TopLayout extends Component {
  render() {
    return (
      <div className="topLayout">
        <div className="kurlyMarket">
          <Link to="/">
            <img alt="delivery" src="/images/deli.webp" />
          </Link>
        </div>
        <ul className="signUpList">
          <li className="signUpListText">
            <a href="#" className="signUpColor">
              회원가입
            </a>
          </li>
          <li className="signUpListLine">
            <div />
          </li>
          <li className="signUpListText">
            <Link to="/login">로그인</Link>
          </li>
          <li className="signUpListLine">
            <div />
          </li>
          <li className="signUpListText">
            <a href="#">고객센터</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopLayout;
