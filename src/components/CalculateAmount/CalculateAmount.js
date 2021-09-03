import React from "react";
import "./CalculateAmount.scss";

class CalculateAmount extends React.Component {
  render() {
    return (
      <div className="calculator">
        <button className="amountMinus">
          <i className="fas fa-minus" />
        </button>
        <span className="amountValue">1</span>
        <button className="amountPlus">
          <i className="fas fa-plus" />
        </button>
      </div>
    );
  }
}

export default CalculateAmount;
