import React, { Component } from "react";
import Related from "./Components/Related";
import CartPut from "./Components/CartPut";
import GoodsView from "./Components/GoodsView";
import HappyCenter from "./Components/HappyCenter";
import "./Detail.scss";

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <CartPut />
        <Related />
        <GoodsView />
        <HappyCenter />
      </div>
    );
  }
}

export default Detail;
