import React, { Component } from "react";
import Navdropmenu from "./Navdropmenu";
import "./Nav.scss";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      isMouseHoverEvent: false,
      isMouseHoverNextEvent: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/navmockdata.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(itemListData => {
        this.setState({
          itemList: itemListData,
        });
      });
  }

  downBoxEvent = () => {
    if (this.state.isMouseHoverEvent === false) {
      this.setState({
        isMouseHoverEvent: true,
      });
    } else if (this.state.isMouseHoverEvent === true) {
      this.setState({
        isMouseHoverEvent: false,
      });
    }
  };

  nextBoxNext = () => {
    if (this.state.isMouseHoverNextEvent === false) {
      this.setState({
        isMouseHoverNextEvent: true,
      });
    } else if (this.state.isMouseHoverNextEvent === true) {
      this.setState({
        isMouseHoverNextEvent: false,
      });
    }
  };

  render() {
    console.log(this.state.itemList);
    return (
      <nav className="navLayout">
        <div className="firstLayout">
          <div className="kurlyMarket">
            <a href="#">
              <img src="/images/deli.webp" />
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
            <li onMouseLeave={this.downBoxEvent}>
              <div className="cateLayout">
                <a href="#">
                  <i class="fas fa-bars"></i>
                  <span>전체 카테고리</span>
                </a>
                <div
                  className={
                    this.state.isMouseHoverEvent
                      ? "layoutMenu"
                      : "layoutMenuNone"
                  }
                >
                  <div className="menuDown">
                    <ul className="menuDownList">
                      {this.state.itemList.map(listitem => {
                        return (
                          <Navdropmenu
                            list={listitem.list}
                            key={listitem.id}
                            item={listitem.item}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
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
              <i className="fas fa-search" />
            </div>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i>
            </a>
            <a>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
