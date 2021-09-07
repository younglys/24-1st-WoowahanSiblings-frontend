import React, { Component } from "react";
import CartPut from "./Components/CartPut";
import Related from "./Components/Related";
import GoodsView from "./Components/GoodsView";
import HappyCenter from "./Components/HappyCenter";
import "./Detail.scss";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/data/productsData.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }
  render() {
    const {
      name,
      sub_name,
      price,
      discount,
      sales_unit,
      shipping_type,
      weight,
      origin,
      package_type,
    } = this.state.data;

    return (
      <div className="detail">
        <CartPut
          name={name}
          sub_name={sub_name}
          price={price}
          discount={discount}
          sales_unit={sales_unit}
          weight={weight}
          shipping_type={shipping_type}
          origin={origin}
          package_type={package_type}
        />
        <Related />
        <GoodsView />
        <HappyCenter />
      </div>
    );
  }
}

export default Detail;
