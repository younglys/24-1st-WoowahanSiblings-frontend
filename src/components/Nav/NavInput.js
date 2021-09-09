import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NavInput extends Component {
  handleCartList = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/cart");
    } else {
      this.props.history.push("/login");
    }
  };

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
          <i className="fas fa-shopping-cart" onClick={this.handleCartList} />
        </a>
      </div>
    );
  }
}

export default withRouter(NavInput);
