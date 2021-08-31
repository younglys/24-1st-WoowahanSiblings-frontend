import React, { Component } from "react";

class Benefit extends Component {
  render() {
    return (
      <div className="benefit">
        <div className="mainEvent">
          <div className="benefitGoods">
            <h3>
              <a href="#">특가/혜택</a>
            </h3>
          </div>
          <div className="benefitList">
            <ul className="benefitListImg">
              <li>
                <a className="thumbGoods">
                  <img src="./images/logo2.png" />
                </a>
                <div className="innerInfo">
                  <span className="innerInfo1">
                    복숭아 한정 특가 + 20% 추가 쿠폰
                  </span>
                  <span className="innerInfo2">
                    마음껏 골라 담는 달콤한 과일
                  </span>
                </div>
              </li>
              <li>
                <a className="thumbGoods">
                  <img src="./images/logo2.png" />
                </a>
                <div className="innerInfo">
                  <span className="innerInfo1">글라스락 최대 20% 할인</span>
                  <span className="innerInfo2">믿을 수 있는 유리 용기</span>
                </div>
              </li>
              <li>
                <a className="thumbGoods">
                  <img src="./images/logo2.png" />
                </a>
                <div className="innerInfo">
                  <span className="innerInfo1">브리도 최대 15% 할인</span>
                  <span className="innerInfo2">
                    갓 구워 더욱 맛있는 베이커리
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefit;
