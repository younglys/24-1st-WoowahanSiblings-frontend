import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import AdList from "./AdList";
import ProductList from "./ProductList";
import "./Main.scss";
import Benefit from "./Benefit";
import CenterAdd from "./CenterAdd";
import ButtonProductList from "./ButtonProductList";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <AdList />
        <ProductList />
        <Benefit />
        <ProductList />
        <CenterAdd />
        <ButtonProductList />
        <CenterAdd />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    );
  }
}
