import React, { Component } from "react";
import "./Related.scss";

class RelatedItem extends Component {
  render() {
    return (
      <li className="relatedItem">
        <img
          src="https://images.unsplash.com/photo-1560252117-15c5d204a4a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="연관 상품"
        />
        <div className="itemInfo">
          <p className="itemTitle">친환경 무 1조각</p>
          <p className="itemPrice">
            1,750<span className="won">원</span>
          </p>
        </div>
      </li>
    );
  }
}

export default RelatedItem;
