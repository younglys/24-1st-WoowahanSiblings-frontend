import React, { Component } from "react";
import RelatedItem from "./RelatedItem";
import "./Related.scss";

class GoodsRelatedList extends Component {
  render() {
    return (
      <div className="goodsRelated">
        <div className="relatedLine"></div>
        <h3>RELATED PRODUCT</h3>
        <div className="relatedList">
          <button className="relatedArrow">
            <i className="fas fa-chevron-left" />
          </button>
          <ul className="relatedList">
            <RelatedItem />
            <RelatedItem />
            <RelatedItem />
            <RelatedItem />
            <RelatedItem />
            <RelatedItem />
          </ul>
          <button className="relatedArrow">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default GoodsRelatedList;
