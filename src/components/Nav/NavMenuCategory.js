import React, { Component } from "react";

class NavMenuCategory extends Component {
  render() {
    return (
      <>
        {CATEGORY.map((categoryList, index) => {
          return (
            <li className="catergoryHover" key={index}>
              {categoryList}
            </li>
          );
        })}
      </>
    );
  }
}

export default NavMenuCategory;

const CATEGORY = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];
