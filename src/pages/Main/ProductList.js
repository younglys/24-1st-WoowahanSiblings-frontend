import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 0,
    };
  }

  imgLength = this.props.datalength;

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
            <h3>{this.props.title} ></h3>
          </div>
        </div>
        <div className="listGoods">
          <div className="boxWrapper">
            <div className="boxViewport" style={{ width: this.slideWidth }}>
              <ul
                style={{
                  transform: `translateX(${this.state.slideCount}px)`,
                }}
              >
                {this.props.productList.map(productListData => {
                  return (
                    <li
                      key={productListData.id}
                      onClick={() => {
                        this.props.history.push(
                          `/detail/${productListData.id}`
                        );
                      }}
                    >
                      <img src={productListData.image_list} />

                      <span className="productName">
                        <Link to="/detail">{productListData.name} </Link>
                      </span>
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
                <div
                  className="productRightButton"
                  onClick={this.handlePrevBtn}
                >
                  <img src="/images/rightbuttonx2.webp" />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const IMG_WIDTH = 249;
const IMG_GAP = 18;
const IMG_SLIDE = 534;

export default withRouter(ProductList);
