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
      ex: [],
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

    fetch("http://10.58.2.54:8000/products/lists", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          ex: productData.products,
        });
      });
  }

  render() {
    console.log(this.state.ex);
    return (
      <div className="main">
        <Nav />
        {/* {this.state.ex.map(productWhy => {
          return <ProductList title={productWhy.name} />;
        })} */}
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
