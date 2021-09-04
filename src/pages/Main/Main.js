import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import AdList from "./AdList";
import ProductList from "./ProductList";
import "./Main.scss";
import Benefit from "./Benefit";
import CenterAdd from "./CenterAdd";
import ButtonProductList from "./ButtonProductList";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      productListSecond: [],
      productListThird: [],
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
  }

  render() {
    console.log(this.state.productList);
    return (
      <div className="main">
        <Nav />
        <AdList />
        {this.state.productList.map(productWhy => {
          return (
            <ProductList
              title={productWhy.title}
              product={productWhy.product}
            />
          );
        })}
        <Benefit />
        {this.state.productListSecond.map(productWhy => {
          return (
            <ProductList
              title={productWhy.title}
              product={productWhy.product}
            />
          );
        })}
        <CenterAdd />
        {this.state.productListThird.map(productWhy => {
          return (
            <ButtonProductList
              title={productWhy.title}
              product={productWhy.product}
              buttonList={productWhy.buttonList}
            />
          );
        })}
        <CenterAdd />
        {this.state.productList.map(productWhy => {
          return (
            <ProductList
              title={productWhy.title}
              product={productWhy.product}
            />
          );
        })}
        <div style={{ backgroundColor: "#f7f7f7" }}>
          {this.state.productList.map(productWhy => {
            return (
              <ProductList
                title={productWhy.title}
                product={productWhy.product}
              />
            );
          })}
        </div>
        {this.state.productList.map(productWhy => {
          return (
            <ProductList
              title={productWhy.title}
              product={productWhy.product}
            />
          );
        })}
        {this.state.productList.map(productWhy => {
          return (
            <ProductList
              title={productWhy.title}
              product={productWhy.product}
            />
          );
        })}
        <div style={{ backgroundColor: "#f7f7f7" }}>
          {this.state.productList.map(productWhy => {
            return (
              <ProductList
                title={productWhy.title}
                product={productWhy.product}
              />
            );
          })}
        </div>
        {this.state.productList.map(productWhy => {
          return (
            <ProductList
              title={productWhy.title}
              product={productWhy.product}
            />
          );
        })}
      </div>
    );
  }
}
