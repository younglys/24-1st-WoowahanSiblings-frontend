import React, { Component } from "react";

class KulryList extends Component {
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
    const { title, productList } = this.props;
    const { slideCount } = this.state;
    return (
      <>
        <div className="kulryList">
          <div className="kulryStatus">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="kulrylistGoods">
          <div className="kulryboxWrapper">
            <div
              className="kulryboxViewport"
              style={{ width: this.slideWidth }}
            >
              <ul
                style={{
                  transform: `translateX(${slideCount}px)`,
                }}
              >
                {productList.map(productListData => {
                  return (
                    <li key={productListData.id}>
                      <div>
                        <img src={productListData.image_list} />
                      </div>
                      <span className="kulryproductName">
                        {productListData.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {slideCount !== this.slideEnd && (
                <div
                  className="kulryproductLeftButton"
                  onClick={this.handleNextBtn}
                >
                  <img src="/images/leftbuttonx2.webp" />
                </div>
              )}
              {!!slideCount && (
                <div
                  className="kulryproductRightButton"
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

const IMG_WIDTH = 339;
const IMG_GAP = 18;
const IMG_SLIDE = 350;

export default KulryList;
