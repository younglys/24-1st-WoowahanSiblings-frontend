import React, { Component } from "react";
import RelatedItem from "./RelatedItem";
import "./Related.scss";

class GoodsRelatedList extends Component {
  rightArrow = e => {};
  render() {
    return (
      <div className="goodsRelated">
        <div className="wrapper">
          <div className="relatedLine"></div>
          <h3>RELATED PRODUCT</h3>
        </div>

        <div className="relatedList">
          <button className="relatedArrow" onClick={this.leftArrow}>
            <i className="fas fa-chevron-left" />
          </button>
          <ul className="relatedItemList">
            <RelatedItem />
          </ul>
          <button className="relatedArrow" onClick={this.rightArrow}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default GoodsRelatedList;
