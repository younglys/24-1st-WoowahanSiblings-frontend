import React, { Component } from "react";
import "./CartPut.scss";

class CartPut extends Component {
  render() {
    return (
      <div className="cartPut">
        <img
          className="cartPutImg"
          src="https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
          alt="과일"
        />
        <div className="innerView">
          <p className="goodsName">
            <strong className="name">
              저탄소 GAP 백도 복숭아 1.8kg 내외(5~7입)
            </strong>
            <span className="shortDesc">부드러운 과육 속 짙은 달콤함</span>
          </p>
          <p className="priceInfo">
            <span className="dcInfo">회원할인가</span>
            <span className="dcPrice">
              17,550
              <span className="won">원</span>
            </span>
            <span className="dcPercent">
              5<span className="per">%</span>
            </span>
            <a className="price" href="/">
              19,000
              <span className="won">원</span>
            </a>
            <span className="notLogin">
              <span>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</span>
            </span>
          </p>
          <div className="goodsBenefit">
            <div className="benefit">
              <a className="benefitBtn" href="/">
                과일 박스 20% 쿠폰 받으러 가기
              </a>
            </div>
          </div>

          <div className="goodsInfo">
            <dl className="infoList">
              <dt className="tit">판매단위</dt>
              <dd className="desc">1박스</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">중량/용량</dt>
              <dd className="desc">배송구분</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">배송구분</dt>
              <dd className="desc">샛별배송 ONLY</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">원산지</dt>
              <dd className="desc">국산</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">포장타입</dt>
              <div className="wrapper">
                <dd className="desc">냉장/종이포장</dd>
                <span className="smallDesc">
                  택배배송은 에코포장이 스티로폼으로 대체됩니다.
                </span>
              </div>
            </dl>
            <dl className="infoList">
              <dt className="tit">유통기한</dt>
              <dd className="desc">
                신선식품으로 유통기한은 없으나 가급적 빠른 시일내 드시길
                바랍니다.
              </dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">당도</dt>
              <dd className="desc">10 brix 이상</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">안내사항</dt>
              <dd className="desc">
                <div className="wrapper">
                  <span className="smallDesc">
                    -상품 특성상 3% 내외의 중량차이가 있을 수 있습니다.
                  </span>
                  <span className="smallDesc">
                    -신선식품 특성상 원물마다 크기 및 형태가 일정하지 않을 수
                    있습니다.
                  </span>
                </div>
              </dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">구매수량</dt>
              <dd className="desc">국산</dd>
            </dl>
          </div>

          <div className="total">
            <div className="totalPrice">
              <span className="text">총 상품 금액 :</span>
              <span className="price">45,000</span>
              <span className="won">원</span>
              <div className="totalDesc">
                <span className="saveBtn">적립</span>
                <span>로그인 후, 적립혜택 제공</span>
              </div>
            </div>
          </div>
          <div className="cartBtn">
            <button type="button" className="restock">
              재입고 알림
            </button>
            <button className="toCart">장바구니 담기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPut;
