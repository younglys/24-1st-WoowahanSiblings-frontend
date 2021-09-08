import React, { Component } from "react";
import "./RelatedItem.scss";

class RelatedItem extends Component {
  render() {
    return (
      <div className="relatedItem">
        <img src={this.props.imgSrc} alt="연관 상품" />
        <div className="itemInfo">
          <p className="itemTitle">{this.props.goodsName}</p>
          <p className="itemPrice">
            {this.props.goodsPrice}
            <span className="won">원</span>
          </p>
        </div>
      </div>
    );
  }
}

export default RelatedItem;
