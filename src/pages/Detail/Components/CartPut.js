import React, { Component } from "react";
import "./CartPut.scss";

class CartPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  clickDown = e => {
    this.state.num > 1 && this.setState({ num: this.state.num - 1 });
  };

  clickUp = e => {
    this.setState(state => {
      return { num: state.num + 1 };
    });
  };

  render() {
    const {
      name,
      price,
      discount,
      sales_unit,
      shipping_type,
      origin,
      package_type,
      infomation,
      created_at,
      updated_at,
      sub_category,
      main_category,
      menu,
      image_list,
      allergy_list,
    } = this.props;

    return (
      <div className="cartPut">
        <img className="cartPutImg" src={image_list} alt="상품 이미지" />
        <div className="innerView">
          <p className="goodsName">
            <strong className="name">{name}</strong>
            <span className="shortDesc">{infomation}</span>
          </p>
          <div className="priceInfo">
            <p className="dcInfo">회원할인가</p>
            <span className="dcPrice">
              {(price * (1 - discount)).toLocaleString()}
              <span className="won">원</span>
            </span>
            <span className="dcPercent">{discount * 100}%</span>
            <a className="originPrice" href="/">
              {price}
              <span className="won">원</span>
            </a>
            <span className="notLogin">
              <span>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</span>
            </span>
          </div>
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
              <dd className="desc">{sales_unit}</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">배송구분</dt>
              <dd className="desc">{shipping_type}</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">원산지</dt>
              <dd className="desc">{origin}</dd>
            </dl>
            <dl className="infoList">
              <dt className="tit">포장타입</dt>
              <div className="wrapper">
                <dd className="desc">{package_type}</dd>
                <p className="smallDesc">
                  택배배송은 에코포장이 스티로폼으로 대체됩니다.
                </p>
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
              <dt className="tit">알러지</dt>
              <dd className="desc">{allergy_list}</dd>
            </dl>

            <dl className="infoList">
              <dt className="tit">안내사항</dt>
              <dd className="desc">
                <div className="wrapper">
                  <p className="smallDesc">
                    -상품 특성상 3% 내외의 중량차이가 있을 수 있습니다.
                  </p>
                  <p className="smallDesc">
                    -신선식품 특성상 원물마다 크기 및 형태가 일정하지 않을 수
                    있습니다.
                  </p>
                </div>
              </dd>
            </dl>
            <dl className="orderQuantity">
              <dt className="tit">구매수량</dt>
              <div className="oderQuantity">
                <div className="calculator">
                  <button className="amountMinus" onClick={this.clickDown}>
                    <i className="fas fa-minus" />
                  </button>
                  <span className="amountValue">{this.state.num}</span>
                  <button className="amountPlus" onClick={this.clickUp}>
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </div>
            </dl>
          </div>

          <div className="total">
            <div className="totalPrice">
              <span className="text">총 상품 금액 :</span>
              <p className="orderPrice">
                <span className="price">
                  {(price * (1 - discount) * this.state.num).toLocaleString()}
                </span>
                <span className="won">원</span>
              </p>

              <div className="totalDesc">
                <span className="saveBtn">적립</span>
                <span>로그인 후, 적립혜택 제공</span>
              </div>
            </div>
          </div>
          <div className="btnContainer">
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
