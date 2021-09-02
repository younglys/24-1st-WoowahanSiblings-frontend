import React, { Component } from "react";

class Navdropmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      currentno: "772",
      isDropDown: false,
      isDropDownNext: false,
    };
  }

  componentDidMount() {
    fetch("https://api.kurly.com/v2/categories?ver=1", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          itemList: data.data.categories,
        });
      });
  }

  handleDropDown = () => {
    this.setState({ isDropDown: !this.state.isDropDown });
  };

  handleDropDownNext = () => {
    this.setState({ isDropDownNext: !this.state.handleDropDownNext });
  };

  findSubCategories = no => {
    const subCategory = this.state.itemList.find(
      category => +category.no === +no
    );
    if (!subCategory) return [];
    else return subCategory.categories;
  };

  render() {
    return (
      <>
        <li onMouseLeave={this.handleDropDown}>
          <a href="#">
            <i className="fas fa-bars" />
            <span>전체 카테고리</span>
          </a>
          <div
            className="dropDownMenu"
            style={{
              display: this.state.isDropDown ? "flex" : "none",
              width: this.state.isDropDownNext ? "320px" : "200px",
            }}
          >
            <div
              className="dropDownMenuList"
              onMouseLeave={() =>
                this.setState({ currentno: 0, isDropDownNext: false })
              }
            >
              {this.state.itemList.map(item => {
                return (
                  <p
                    className="dropDownMenuListMain"
                    key={item.no}
                    onMouseEnter={() =>
                      this.setState({
                        currentno: item.no,
                        isDropDownNext: true,
                      })
                    }
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
            <div
              className="dropDownNext"
              style={{
                display: this.state.isDropDownNext ? "block" : "none",
              }}
            >
              {this.findSubCategories(this.state.currentno).map(subList => {
                return (
                  <p
                    className="dropDownMenuListSub"
                    key={subList.no}
                    style={{
                      display: this.state.isDropDownNext ? "block" : "none",
                    }}
                  >
                    {subList.name}
                  </p>
                );
              })}
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default Navdropmenu;
