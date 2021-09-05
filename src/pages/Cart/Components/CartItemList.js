import React, { Component } from "react";
import CalculateAmount from "../../../components/CalculateAmount/CalculateAmount";
import "./CartItemList.scss";

class CartItemList extends Component {
  render() {
    return (
      // <div className="empty">장바구니에 담긴 상품이 없습니다.</div>;
      <div class="preOrderList">
        <div className="packageType">
          <div className="packageTypeLeft">
            <i className="fas fa-tint" />
            <span className="tit">냉장 상품</span>
          </div>
          <div className="packageTypeRight">
            <i className="fas fa-chevron-up" />
          </div>
        </div>

        <ul className="cartList">
          <li className="cartListItem">
            <div className="cartListItemWrapper">
              <div className="left">
                <i className="fas fa-check-circle" />
                <img
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1547&q=80"
                  alt="장바구니 상품"
                ></img>
                <span className="goodsTitle">미국산 프라임등급 살치살 5kg</span>
              </div>
              <div className="right">
                <CalculateAmount />
                <p>
                  2,680 <span className="won">원</span>
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
