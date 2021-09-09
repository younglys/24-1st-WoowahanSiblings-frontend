import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import AdList from "./AdList";
import ProductList from "./ProductList";
import Benefit from "./Benefit";
import CenterAdd from "./CenterAdd";
import ButtonProductList from "./ButtonProductList";
import KulryList from "./KulryList";
import Instagram from "./Instagram";
import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      benefitList: [],
      noticList: [],
      buttonList: [],
      hotProductList: [],
      giftProductList: [],
      campingProductList: [],
      yearProductList: [],
      kulryList: [],
      instagram: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("http://10.58.0.49:8000/products/lists", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productList: productData.products.slice(0, 10),
          benefitList: productData.products.slice(11, 14),
          noticList: productData.products.slice(15, 25),
          buttonList: productData.products.slice(26, 36),
          hotProductList: productData.products.slice(37, 47),
          giftProductList: productData.products.slice(48, 58),
          campingProductList: productData.products.slice(58, 68),
          yearProductList: productData.products.slice(0, 10),
          kulryList: productData.products.slice(11, 21),
        });
      });
    fetch("http://localhost:3000//data/instagram.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          instagram: productData,
          isLoading: false,
        });
      });
  }

  componentDidUpdate() {
    console.log("서버");
  }

  render() {
    return (
      <div className="main">
        <Nav />
        {this.state.isLoading ? (
          <div className="loader">
            <svg
              className="spinner"
              width="65px"
              height="65px"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="path"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                cx="33"
                cy="33"
                r="30"
              ></circle>
            </svg>
          </div>
        ) : (
          <>
            <AdList />
            <ProductList
              productList={this.state.productList}
              datalength={10}
              title={"이 상품 어때요?"}
            />
            <Benefit
              benefitList={this.state.benefitList}
              datalength={3}
              title={"특가/혜택"}
            />
            <ProductList
              productList={this.state.noticList}
              datalength={10}
              title={"놓치면 후회할 가격"}
            />
            <CenterAdd />
            <ButtonProductList
              productList={this.state.buttonList}
              datalength={10}
              title={"MD의 추천"}
            />
            <CenterAdd />
            <ProductList
              productList={this.state.hotProductList}
              datalength={10}
              title={"지금 가장 핫한 상품"}
            />
            <div style={{ backgroundColor: "#f7f7f7" }}>
              <ProductList
                productList={this.state.giftProductList}
                datalength={10}
                title={"추석 선물 추천, 뷰티 최대 40% 할인"}
              />
            </div>
            <ProductList
              productList={this.state.giftProductList}
              datalength={10}
              title={"마감세일"}
            />
            <div style={{ backgroundColor: "#f7f7f7" }}>
              <ProductList
                productList={this.state.campingProductList}
                datalength={10}
                title={"365일 최저가 도전"}
              />
            </div>
            <ProductList
              productList={this.state.yearProductList}
              datalength={10}
              title={"설레는 캠핑"}
            />

            <KulryList
              productList={this.state.kulryList}
              datalength={10}
              title={"컬리의 레시피"}
            />

            {this.state.instagram.map((productWhy, index) => {
              return (
                <Instagram
                  title={productWhy.title}
                  product={productWhy.product}
                  key={index}
                />
              );
            })}
            <CenterAdd />
          </>
        )}
      </div>
    );
  }
}

export default Main;
