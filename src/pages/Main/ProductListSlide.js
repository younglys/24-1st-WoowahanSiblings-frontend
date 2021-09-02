import React, { Component } from "react";

class ProductListSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideSpot: 0,
    };
  }

  //   imgQuantity = this.props.imagesData.length;

  //   slideWidth =
  //     IMG_WIDTH * this.imgQuantity + (this.imgQuantity - 1) * SLIDE_GAP;

  //   hiddenedSlideWidth = this.slideWidth - window.innerWidth;

  //   slideEnd;

  //   handlePrevBtn = () => {
  //     const { slideSpot } = this.state;

  //     if (Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
  //       this.setState({
  //         slideSpot: 0,
  //       });
  //     } else {
  //       this.setState({
  //         slideSpot: slideSpot + SLIDE_MOVING_UNIT,
  //       });
  //     }
  //   };

  //   handleNextBtn = () => {
  //     const { slideSpot } = this.state;

  //     if (this.hiddenedSlideWidth - Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {

  //       this.setState({
  //         slideSpot: slideSpot - (this.hiddenedSlideWidth - Math.abs(slideSpot)),

  //       });
  //       this.slideEnd =
  //         slideSpot - (this.hiddenedSlideWidth - Math.abs(slideSpot));

  //     } else {

  //       this.setState({
  //         slideSpot: slideSpot - SLIDE_MOVING_UNIT,

  //       });
  //     }
  //   };

  render() {
    return (
      <div className="listGoods">
        <div className="boxWrapper">
          <div className="boxViewport">
            <ul>
              <li>
                <a href="#">
                  <img src="./images/logo2.png" />
                </a>
                <span className="productName">
                  <a href="#">[우리밀]부침가루 </a>
                </span>
                <span className="price">3,000원</span>
              </li>
              {/* <li>
                <a href="#">
                  <img src="./images/logo2.png" />
                </a>
                <span className="productName">
                  <a href="#">[우리밀]부침가루 </a>
                </span>
                <span className="price">
                  <a href="#">3,000원 </a>
                </span>
              </li> */}
              {/* <li>
                <a href="#">
                  <img src="./images/logo2.png" />
                </a>
                <span className="productName">
                  <a href="#">[우리밀]부침가루 </a>
                </span>
                <span className="price">
                  <a href="#">3,000원 </a>
                </span>
              </li> */}
              {/* <li>
                <a href="#">
                  <img src="./images/logo2.png" />
                </a>
                <span className="productName">
                  <a href="#">[우리밀]부침가루 </a>
                </span>
                <span className="price">
                  <a href="#">3,000원 </a>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const IMG_WIDTH = 249;
const IMG_GAP = 10;
const IMG_SLIDE = 500;
export default ProductListSlide;
