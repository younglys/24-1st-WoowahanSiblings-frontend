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

  async componentDidMount() {
    const url = "http://10.58.2.195:8000/bbmarket/products";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data.results });
  }

  render() {
    const {
      name,
      price,
      discount,
      sales_unit,
      weight,
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
    } = this.state.data;
    console.log(this.state.data);
    return (
      <div className="detail">
        <CartPut
          name={name}
          price={price}
          discount={discount}
          sales_unit={sales_unit}
          weight={weight}
          shipping_type={shipping_type}
          origin={origin}
          package_type={package_type}
          infomation={infomation}
          created_at={created_at}
          updated_at={updated_at}
          sub_category={sub_category}
          main_category={main_category}
          menu={menu}
          image_list={image_list}
        />
        <Related />
        <GoodsView />
        <HappyCenter />
      </div>
    );
  }
}

export default Detail;
