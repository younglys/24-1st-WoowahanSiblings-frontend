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
    fetch(`http://10.58.2.124:8000/products/3`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }

  render() {
    const data = this.state.data;

    return (
      <div className="detail">
        <CartPut data={data} />
        <Related related={data.selected_products} />
        <GoodsView />
        <HappyCenter />
      </div>
    );
  }
}

export default Detail;
