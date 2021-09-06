import React, { Component } from "react";

class NavMenuCategory extends Component {
  render() {
    return (
      <>
        {CATEGORY.map((categoryList, index) => {
          return (
            <li key={index}>
              <a href="">{categoryList}</a>
            </li>
          );
        })}
      </>
    );
  }
}

export default NavMenuCategory;

const CATEGORY = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];
