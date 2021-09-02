import React, { Component } from "react";
import "./CartSelect.scss";

export default class CartSelect extends Component {
  render() {
    return (
      <div className="CartSelect">
        <label className="check">
          <i className="fas fa-check-circle" />
          전체선택 (1 /1 )<span className="line" />
          <span className="selectDel">선택삭제</span>
        </label>
      </div>
    );
  }
}
