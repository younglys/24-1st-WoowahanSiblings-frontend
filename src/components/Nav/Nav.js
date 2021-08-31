import React, { Component } from "react";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="navLayout">
            <div className="firstLayout">
              <div className="kurlyMarket">
                <a href="#">
                  <img src="./images/deli.webp"></img>
                </a>
              </div>
              <ul className="signUpList">
                <li className="signUpList1">
                  <a href="#" className="signUpColor">
                    회원가입
                  </a>
                </li>
                <li className="signUpList2">
                  <div></div>
                </li>
                <li className="signUpList1">
                  <a href="#">로그인</a>
                </li>
                <li className="signUpList2">
                  <div></div>
                </li>
                <li className="signUpList1">
                  <a href="#">고객센터</a>
                </li>
              </ul>
            </div>
            <div className="secondLayout">
              <img src="./images/logo2.png"></img>
            </div>
            <div className="thirdLayout">
              <ul className="allCategorie">
                <li>
                  <a href="#">
                    <i class="fas fa-bars"></i>
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
              <div className="thirdLayout_icon">
                <div className="searchBar">
                  <input placeholder="검색어를 입력해 주세요" />
                  <i className="fas fa-search"></i>
                </div>
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
                <a>
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
