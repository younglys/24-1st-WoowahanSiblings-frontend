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
    fetch("https://api.kurly.com/v2/categories?ver=1")
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
    return subCategory.categories;
  };

  render() {
    const { currentno, isDropDown, isDropDownNext } = this.state;
    return (
      <li onMouseLeave={this.handleDropDown}>
        <div className="allCategoryHover">
          <i className="fas fa-bars" />
          <span>전체 카테고리</span>
        </div>

        <div
          className="dropDownMenu"
          style={{
            display: isDropDown ? "flex" : "none",
            width: isDropDownNext ? "330px" : "200px",
          }}
        >
          <div
            className="dropDownMenuList"
            onMouseLeave={() =>
              this.setState({
                currentno: 0,
                isDropDownNext: false,
                isDropDown: true,
              })
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
              display: isDropDownNext ? "block" : "none",
            }}
            onMouseEnter={() =>
              this.setState({
                currentno: this.state.currentno,
                isDropDownNext: true,
              })
            }
          >
            {this.findSubCategories(currentno).map(subList => {
              return (
                <p
                  className="dropDownMenuListSub"
                  key={subList.no}
                  style={{
                    display: isDropDownNext ? "block" : "none",
                  }}
                >
                  {subList.name}
                </p>
              );
            })}
          </div>
        </div>
      </li>
    );
  }
}

export default Navdropmenu;
