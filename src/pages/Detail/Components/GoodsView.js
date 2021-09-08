import React, { Component } from "react";
import "./GoodsView.scss";

class GoodsView extends Component {
  viewTapClick = e => {
    const menus = document.querySelectorAll(".viewTapMenu");

    for (let i = 0; i < 4; i++) {
      menus[i].classList.remove("clicked");
    }

    const targeter = e.target.id;
    const scrollTarget = document.querySelector("." + targeter);
    e.target.classList.add("clicked");
    scrollTarget.scrollIntoView();
  };

  render() {
    return (
      <div className="goodsView">
        <div className="goodsViewArea">
          <ul className="goodsViewTap">
            <li
              id="detailDesc"
              className="viewTapMenu"
              onClick={this.viewTapClick}
            >
              상품설명
            </li>
            <li
              id="detailInfo"
              className="viewTapMenu"
              onClick={this.viewTapClick}
            >
              상세정보
            </li>
            <li className="viewTapMenu">후기</li>
            <li className="viewTapMenu">문의</li>
          </ul>
        </div>

        <div className="goodsViewContent">
          <img
            className="detailDesc"
            src="/images/detail-desc.png"
            alt="상세 페이지"
          />
          <img
            className="detailInfo"
            src="/images/detail-info.png"
            alt="상세 페이지"
          />
        </div>
      </div>
    );
  }
}

export default GoodsView;
