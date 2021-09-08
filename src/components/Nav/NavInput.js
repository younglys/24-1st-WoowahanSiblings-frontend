import React, { Component } from "react";

class NavInput extends Component {
  render() {
    return (
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
    );
  }
}

export default NavInput;
