import React, { Component } from "react";
import RelatedItem from "./RelatedItem";
import "./Related.scss";

class GoodsRelatedList extends Component {
  constructor() {
    super();
    this.state = {
      relatedItem: [],
      currentOffsetX: 10,
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

  leftArrow = () => {
    const { currentOffsetX } = this.state;

    if (currentOffsetX < 0) {
      this.setState({
        currentOffsetX: currentOffsetX + RELATED_WIDTH,
      });
    }
  };

  rightArrow = () => {
    const { currentOffsetX, relatedItem } = this.state;

    if (currentOffsetX > (relatedItem.length - 6) * -RELATED_WIDTH) {
      console.log(RELATED_WIDTH);
      this.setState({
        currentOffsetX: currentOffsetX - RELATED_WIDTH,
      });
    }
  };

  render() {
    const { relatedItem } = this.state;
    const relatedInfo = relatedItem.map(item => (
      <RelatedItem
        imgSrc={item.imgSrc}
        goodsName={item.goodsName}
        goodsPrice={item.goodsPrice}
      />
    ));

    return (
      <div className="goodsRelated">
        <div className="wrapper">
          <div className="relatedLine"></div>
          <h3>RELATED PRODUCT</h3>
        </div>
        <div className="sliderWrapper">
          <button className="relatedArrow" onClick={this.leftArrow}>
            <i className="fas fa-chevron-left" />
          </button>
          <div className="relatedList">
            <div
              className="relatedItemList"
              style={{
                transform: `translateX(${this.state.currentOffsetX}px)`,
              }}
            >
              {relatedInfo}
            </div>
          </div>
          <button className="relatedArrow" onClick={this.rightArrow}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

const RELATED_WIDTH = 192;

export default GoodsRelatedList;
