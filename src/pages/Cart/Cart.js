import React, { Component } from "react";
import CartSelect from "./Components/CartSelect";
import CartItemList from "./Components/CartItemList";
import { CART_API } from "../../config";
import "./Cart.scss";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    fetch(CART_API, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          cartList: res,
        });
      });
  }

  render() {
    const listLength = this.state.cartList.length;
    return (
      <div className="cart">
        <div className="titPage">장바구니</div>
        <div className="cartContent">
          <div className="cartItemList">
            <CartSelect length={listLength} />
            <div className="innerCart">
              {this.state.cartList.map(item => {
                return (
                  <CartItemList
                    imgSrc={item.imgSrc}
                    goodsName={item.goodsName}
                    goodsPrice={item.goodsPrice}
                  />
                );
              })}
            </div>
            <CartSelect length={listLength} />
          </div>
          <div className="cartResult">
            <div className="cartDelivery">
              <div className="deliveryTit">
                <span className="tit">
                  <i className="fas fa-map-marker-alt" />
                  배송지
                </span>
                <p className="deliveryDec">
                  <span>배송지를 입력하고</span>
                  배송유형을 확인해보세요
                </p>
                <button className="deliveryAddress">
                  <i className="fas fa-search" />
                  <span className="desc">주소 검색</span>
                </button>
              </div>

              <ul className="amountView">
                <li className="orderInfo">
                  <span className="tit"> 상품금액</span>
                  <span className="price">
                    0<span className="won">원</span>
                  </span>
                </li>

                <li className="orderInfo">
                  <span className="tit">상품할인금액</span>
                  <span className="price">
                    0<span className="won">원</span>
                  </span>
                </li>

                <div className="noSale">로그인 후 할인 금액 적용</div>

                <li className="orderInfo">
                  <span className="tit">배송비</span>
                  <span className="price">
                    0<span className="won">원</span>
                  </span>
                </li>

                <li className="orderInfo payment">
                  <span className="tit">결제예정금액</span>
                  <span className="price">
                    0<span className="won">원</span>
                  </span>
                </li>

                <p>
                  <span className="save">적립</span>
                  <span className="saveMsg">
                    로그인 후 회원등급에 따라 적립
                  </span>
                </p>
              </ul>
            </div>

            <button className="needAddress">배송지를 입력해주세요</button>

            <p className="orderDesc">
              <span>
                - '입금확인' 상태일 때는 주문 내역 상세에서 직접 주문취소가
                가능합니다.
              </span>
              <br />
              <span>- '입금확인' 이후 상태에는 고객센터로 문의해주세요.</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
