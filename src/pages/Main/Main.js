import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import AdList from "./AdList";
import ProductList from "./ProductList";
import "./Main.scss";
import Benefit from "./Benefit";
import CenterAdd from "./CenterAdd";
import ButtonProductList from "./ButtonProductList";
import KulryList from "./KulryList";
import Instagram from "./Instagram";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      productListSecond: [],
      productListThird: [],
      kulryList: [],
      instagram: [],
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
  }

  render() {
    console.log(this.state.kulryList);
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
