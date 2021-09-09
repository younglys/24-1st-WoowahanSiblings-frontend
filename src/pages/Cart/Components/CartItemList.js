import React, { Component } from "react";
import "./CartItemList.scss";

class CartItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.goodsQuantity,
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
    return (
      // <div className="empty">장바구니에 담긴 상품이 없습니다.</div>;
      <div className="preOrderList">
        {/* <div className="packageType">
          <div className="packageTypeLeft">
            <i className="fas fa-tint" />
            <span className="tit">냉장 상품</span>
          </div>
          <div className="packageTypeRight">
            <i className="fas fa-chevron-up" />
          </div>
        </div> */}

        <ul className="cartList">
          <li className="cartListItem">
            <div className="cartListItemWrapper">
              <div className="left">
                <i className="fas fa-check-circle" />
                <img src={this.props.imgSrc} alt="장바구니 상품"></img>
                <span className="goodsTitle">{this.props.goodsName}</span>
              </div>
              <div className="right">
                <div className="calculator">
                  <button className="amountMinus" onClick={this.clickDown}>
                    <i className="fas fa-minus" />
                  </button>
                  <span className="amountValue">{this.state.num}</span>
                  <button className="amountPlus" onClick={this.clickUp}>
                    <i className="fas fa-plus" />
                  </button>
                </div>
                <p>
                  {(this.props.goodsPrice * this.state.num).toLocaleString()}
                  <span className="won">원</span>
                </p>
                <i className="fas fa-times" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartItemList;
