import React, { Component } from "react";
import Navdropmenu from "./Navdropmenu";
import "./Nav.scss";

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navLayout">
        <div className="firstLayout">
          <div className="kurlyMarket">
            <a href="#">
              <img alt="delivery" src="/images/deli.webp" />
            </a>
          </div>
          <ul className="signUpList">
            <li className="signUpList1">
              <a href="#" className="signUpColor">
                회원가입
              </a>
            </li>
            <li className="signUpListTwo">
              <div></div>
            </li>
            <li className="signUpListOne">
              <a href="#">로그인</a>
            </li>
            <li className="signUpListTwo">
              <div></div>
            </li>
            <li className="signUpListOne">
              <a href="#">고객센터</a>
            </li>
          </ul>
        </div>
        <div className="secondLayout">
          <img alt="logo" src="./images/logo2.png"></img>
        </div>
        <div className="thirdLayout">
          <ul className="allCategorie">
            <li onMouseEnter={this.downBoxEvent}>
              <a href="#">
                <i className="fas fa-bars" />
                <span>전체 카테고리</span>
              </a>
            </li>
            <li>
              <a href="#">신상품</a>
            </li>
            <li>
              <a href="#">베스트</a>
            </li>
            <li>
              <a href="#">알뜰쇼핑</a>
            </li>
            <li>
              <a href="#">특가/혜택</a>
            </li>
          </ul>
          <div className="thirdLayoutIcon">
            <div className="searchBar">
              <input placeholder="검색어를 입력해 주세요" />
              <i className="fas fa-search" />
            </div>
            <a href="#">
              <i className="fas fa-map-marker-alt" />
            </a>
            <a>
              <i className="fas fa-shopping-cart" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
