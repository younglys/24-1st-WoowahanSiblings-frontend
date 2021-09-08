import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class ButtonProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 0,
    };
  }

  imgLength = this.props.dataLength;
  slideWidth = IMG_WIDTH * this.imgLength + (this.imgLength - 1) * IMG_GAP;

  hiddenedSlideWidth = this.slideWidth - 1068;

  slideEnd;

  handlePrevBtn = () => {
    const { slideCount } = this.state;

    if (Math.abs(slideCount) < IMG_SLIDE) {
      this.setState({
        slideCount: 0,
      });
    } else {
      this.setState({
        slideCount: slideCount + IMG_SLIDE,
      });
    }
  };

  handleNextBtn = () => {
    const { slideCount } = this.state;

    if (this.hiddenedSlideWidth - Math.abs(slideCount) < IMG_SLIDE) {
      this.setState({
        slideCount:
          slideCount - (this.hiddenedSlideWidth - Math.abs(slideCount)),
      });
      this.slideEnd =
        slideCount - (this.hiddenedSlideWidth - Math.abs(slideCount));
    } else {
      this.setState({
        slideCount: slideCount - IMG_SLIDE,
      });
    }
  };

  render() {
    return (
      <>
        <div className="productList">
          <div className="productStatus">
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <div className="buttonCategory">
          <ul className="buttonListCategory">
            {BUTTONLIST.map((buttonlist, idx) => {
              return (
                <li key={idx}>
                  <div>{buttonlist}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="listGoods" style={{ width: this.slideWidth }}>
          <ul
            style={{
              transform: `translateX(${this.state.slideCount}px)`,
            }}
          >
            {this.props.productList.map(productListData => {
              return (
                <li>
                  <img src={productListData.image_list} />
                  <span className="productName">{productListData.name}</span>
                  <span className="price">{productListData.price}원</span>
                </li>
              );
            })}
          </ul>
          {this.state.slideCount !== this.slideEnd && (
            <div className="productLeftButton" onClick={this.handleNextBtn}>
              <img src="/images/leftbuttonx2.webp" />
            </div>
          )}
          {!!this.state.slideCount && (
            <div className="productRightButton" onClick={this.handlePrevBtn}>
              <img src="/images/rightbuttonx2.webp" />
            </div>
          )}
        </div>
      </>
    );
  }
}

const BUTTONLIST = [
  "선물하기",
  "추석 선물세트",
  "채소",
  "과일·견과·쌀",
  "수산·해산·건어물",
  "정육·계란",
  "국·반찬·메인요리",
  "샐러드·간편식",
  "면·양념·요라",
  "생수·음료·우유·커피",
  "간식·과자·떡",
  "치즈·베이커리·델리",
  "건강식품",
  "생활용품·리빙",
  "스킨케어·메이크업",
  "헤어·바디·구강",
  "주방용품",
  "가전제품",
  "베이비·키즈",
  "반려동물",
];
const IMG_WIDTH = 249;
const IMG_GAP = 18;
const IMG_SLIDE = 534;

export default ButtonProductList;
