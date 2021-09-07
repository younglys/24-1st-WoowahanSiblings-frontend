import React, { Component } from "react";

class TopLayout extends Component {
  render() {
    return (
      <div className="topLayout">
        <div className="kurlyMarket">
          <a href="#">
            <img alt="delivery" src="/images/deli.webp" />
          </a>
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
            <a href="#">로그인</a>
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
