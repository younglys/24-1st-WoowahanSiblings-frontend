import React, { Component } from "react";
import Loading from "./Loading";
import AdList from "./AdList";
import ProductList from "./ProductList";
import Benefit from "./Benefit";
import CenterAdd from "./CenterAdd";
import ButtonProductList from "./ButtonProductList";
import KulryList from "./KulryList";
import Instagram from "./Instagram";
import { PRODUCT_LIST_API } from "../../config";
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
    fetch(PRODUCT_LIST_API, {
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
    fetch("/data/instagram.json", {
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

  render() {
    const {
      productList,
      benefitList,
      noticList,
      buttonList,
      hotProductList,
      giftProductList,
      campingProductList,
      yearProductList,
      kulryList,
      instagram,
      isLoading,
    } = this.state;
    return (
      <div className="main">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <AdList />
            <ProductList
              productList={productList}
              datalength={10}
              title={"이 상품 어때요?"}
            />
            <Benefit
              benefitList={benefitList}
              datalength={3}
              title={"특가/혜택"}
            />
            <ProductList
              productList={noticList}
              datalength={10}
              title={"놓치면 후회할 가격"}
            />
            <CenterAdd />
            <ButtonProductList
              productList={buttonList}
              datalength={10}
              title={"MD의 추천"}
            />
            <CenterAdd />
            <ProductList
              productList={hotProductList}
              datalength={10}
              title={"지금 가장 핫한 상품"}
            />
            <div style={{ backgroundColor: "#f7f7f7" }}>
              <ProductList
                productList={giftProductList}
                datalength={10}
                title={"추석 선물 추천, 뷰티 최대 40% 할인"}
              />
            </div>
            <ProductList
              productList={giftProductList}
              datalength={10}
              title={"마감세일"}
            />
            <div style={{ backgroundColor: "#f7f7f7" }}>
              <ProductList
                productList={campingProductList}
                datalength={10}
                title={"365일 최저가 도전"}
              />
            </div>
            <ProductList
              productList={yearProductList}
              datalength={10}
              title={"설레는 캠핑"}
            />

            <KulryList
              productList={kulryList}
              datalength={10}
              title={"컬리의 레시피"}
            />

            {instagram.map((productWhy, index) => {
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
