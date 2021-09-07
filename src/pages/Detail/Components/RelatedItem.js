import React, { Component } from "react";
import "./RelatedItem.scss";

class RelatedItem extends Component {
  constructor() {
    super();
    this.state = {
      relatedItem: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/data/relatedItem.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          relatedItem: res,
        });
      });
  }
  render() {
    const { relatedItem } = this.state;

    return relatedItem.map(item => (
      <li className="relatedItem">
        <img src={item.imgSrc} alt="연관 상품" />
        <div className="itemInfo">
          <p className="itemTitle">{item.goodsName}</p>
          <p className="itemPrice">
            {item.goodsPrice}
            <span className="won">원</span>
          </p>
        </div>
      </li>
    ));
  }
}

export default RelatedItem;
