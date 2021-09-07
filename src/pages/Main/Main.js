import React, { Component } from "react";
import AdList from "./AdList";
import ProductList from "./ProductList";
import Benefit from "./Benefit";
import CenterAdd from "./CenterAdd";
// import ButtonProductList from "./ButtonProductList";
import KulryList from "./KulryList";
import Instagram from "./Instagram";
import "./Main.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      productListSecond: [],
      productListThird: [],
      kulryList: [],
      instagram: [],
      ex: [],
      datalength: 0,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/firstMock.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productList: productData,
        });
      });
    fetch("http://localhost:3000/data/thirdMock.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productListSecond: productData,
        });
      });
    fetch("http://localhost:3000/data/secondMock.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productListThird: productData,
        });
      });
    fetch("http://localhost:3000/data/kulryList.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          kulryList: productData,
        });
      });
    fetch("http://localhost:3000/data/instagram.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          instagram: productData,
        });
      });
    fetch("http://localhost:3000/data/fiveMock.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          ex: productData.products,
          datalength: productData.products.length,
        });
      });
  }

  render() {
    return (
      <div className="main">
        <AdList />
        <ProductList ex={this.state.ex} datalength={10} />
        <Benefit />
        <ProductList ex={this.state.ex} datalength={10} />
        <CenterAdd />
        <ProductList ex={this.state.ex} datalength={10} />
        <CenterAdd />
        <ProductList ex={this.state.ex} datalength={10} />
        <div style={{ backgroundColor: "#f7f7f7" }}>
          <ProductList ex={this.state.ex} datalength={10} />
        </div>
        <ProductList ex={this.state.ex} datalength={10} />
        <div style={{ backgroundColor: "#f7f7f7" }}>
          <ProductList ex={this.state.ex} datalength={10} />
        </div>

        <ProductList ex={this.state.ex} datalength={10} />
        <div style={{ backgroundColor: "#f7f7f7" }}>
          <ProductList ex={this.state.ex} datalength={10} />
        </div>
        {this.state.kulryList.map(productWhy => {
          return (
            <KulryList title={productWhy.title} product={productWhy.product} />
          );
        })}
        {this.state.instagram.map(productWhy => {
          return (
            <Instagram title={productWhy.title} product={productWhy.product} />
          );
        })}
        <CenterAdd />
      </div>
    );
  }
}
