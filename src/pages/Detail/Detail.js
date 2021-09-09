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
    fetch(`http://10.58.2.124:8000/products/1`)
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
    } = this.state.data;

    return (
      <div className="detail">
        <CartPut
          name={name && name}
          price={price && price}
          discount={discount && discount}
          sales_unit={sales_unit && sales_unit}
          shipping_type={shipping_type && shipping_type}
          origin={origin && origin}
          package_type={package_type && package_type}
          infomation={infomation && infomation}
          created_at={created_at && created_at}
          updated_at={updated_at && updated_at}
          sub_category={sub_category && sub_category}
          main_category={main_category && main_category}
          menu={menu && menu}
          image_list={image_list && image_list}
          allergy_list={allergy_list && allergy_list}
        />
        <Related />
        <GoodsView />
        <HappyCenter />
      </div>
    );
  }
}

export default Detail;
