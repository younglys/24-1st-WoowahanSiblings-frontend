import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RelatedItem from "./RelatedItem";
import { PRODUCT_API } from "../../../config";
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
    fetch(`${PRODUCT_API}${this.props.match.params.productId}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }

  clickLeftArrow = () => {
    const { currentOffsetX } = this.state;

    if (currentOffsetX < 0) {
      this.setState({
        currentOffsetX: currentOffsetX + RELATED_WIDTH,
      });
    }
  };

  clickRightArrow = () => {
    const { currentOffsetX } = this.state;
    const itemLength = this.props.selected_products.length;
    if (currentOffsetX > (itemLength - 6) * -RELATED_WIDTH) {
      this.setState({
        currentOffsetX: currentOffsetX - RELATED_WIDTH,
      });
    }
  };

  render() {
    const relatedItem = this.props.related;

    return (
      <div className="goodsRelated">
        <div className="wrapper">
          <div className="relatedLine"></div>
          <h3>RELATED PRODUCT</h3>
        </div>
        <div className="sliderWrapper">
          <button className="relatedArrow" onClick={this.clickLeftArrow}>
            <i className="fas fa-chevron-left" />
          </button>
          <div className="relatedList">
            <div
              className="relatedItemList"
              style={{
                transform: `translateX(${this.state.currentOffsetX}px)`,
              }}
            >
              {relatedItem &&
                relatedItem.map((item, idx) => (
                  <RelatedItem
                    key={idx}
                    imgSrc={item.image_url}
                    goodsName={item.name}
                    goodsPrice={item.price}
                  />
                ))}
            </div>
          </div>
          <button className="relatedArrow" onClick={this.clickRightArrow}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

const RELATED_WIDTH = 192;

export default withRouter(GoodsRelatedList);
