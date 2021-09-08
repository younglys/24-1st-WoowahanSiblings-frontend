import React, { Component } from "react";
import "./CartSelect.scss";

class CartSelect extends Component {
  render() {
    const length = this.props.length;
    return (
      <div className="cartSelect">
        <label className="check">
          <i className="fas fa-check-circle" />
          전체선택 ({length}/{length} )<span className="line" />
          <span className="selectDel">선택삭제</span>
        </label>
      </div>
    );
  }
}

export default CartSelect;
