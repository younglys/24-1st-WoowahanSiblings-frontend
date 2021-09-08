import React, { Component } from "react";

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 0,
    };
  }

  imgLength = this.props.product.length;

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
        <div className="instagramList">
          <div className="instagramStatus">
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <div className="instagramlistGoods">
          <div className="instagramboxWrapper">
            <div
              className="instagramboxViewport"
              style={{ width: this.slideWidth }}
            >
              <ul
                style={{
                  transform: `translateX(${this.state.slideCount}px)`,
                }}
              >
                {this.props.product.map(productListData => {
                  return (
                    <li>
                      <div>
                        <img src={productListData.imges} />
                      </div>
                    </li>
                  );
                })}
              </ul>
              {this.state.slideCount !== this.slideEnd && (
                <div
                  className="instagramproductLeftButton"
                  onClick={this.handleNextBtn}
                >
                  <img src="/images/leftbuttonx2.webp" />
                </div>
              )}
              {!!this.state.slideCount && (
                <div
                  className="instagramproductRightButton"
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

const IMG_WIDTH = 175;
const IMG_GAP = 0;
const IMG_SLIDE = 337;

export default Instagram;
