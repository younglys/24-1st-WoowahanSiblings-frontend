import React, { Component } from "react";
import ProductListSlide from "./ProductListSlide";
import ProductListTitle from "./ProductListTitle";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/mock.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productList: productData,
        });
      });
  }
  render() {
    return (
      <>
        <ProductListTitle />
        {this.state.productList.map(productListData => {
          return (
            <ProductListSlide
              name={productListData.name}
              price={productListData.price}
              imges={productListData.imges}
            />
          );
        })}
      </>
    );
  }
}

export default ProductList;
