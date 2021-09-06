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
        <div className="footer">
          <div className="footerInfo">
            <div className="infoCustomerCenter">고객 행복 센터</div>
            <div className="infoNumber">
              <div>1644-1107</div>
              <div className="operatingHours">
                <span>365고객센터</span>
                <span>오전 7시 ~ 오후 7시</span>
              </div>
            </div>
            <div className="kakao">
              <div className="kakaoBox">카카오톡 문의</div>
              <div className="kakaoOperatingHours">
                <span>365고객센터</span>
                <span className="infoTextColor">오전 7시 ~ 오후 7시</span>
              </div>
            </div>
            <div className="oneAndOne">
              <div className="oneAndOneBox">1:1문의</div>
              <div className="oneAndOneOperatingHours">
                <span>24시간 접수 가능</span>
                <span className="infoTextColor">
                  고객센터 운영시간에 순차적으로 답변해드리겠습니다.
                </span>
              </div>
            </div>
            <div className="bulkOrder">
              <div className="bulkOrderBox">대량주문 문의</div>
              <div className="bulkOrderOperatingHours">
                <span>24시간 접수 가능</span>
                <span className="infoTextColor">
                  비회원의 겨우 메일로 문의 바랍니다.
                </span>
              </div>
            </div>
          </div>

          <div className="company">
            <ul className="companyList">
              <li>컬리소개</li>
              <li>컬리소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
