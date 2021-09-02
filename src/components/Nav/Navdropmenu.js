import React, { Component } from "react";

class Navdropmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  handleClick = () => {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    }
  };

  render() {
    const { isClicked } = this.state;
    return (
      <>
        <div onMouseEnter={this.handleClick} onMouseLeave={this.handleClick}>
          {this.props.name}
        </div>
        <ul>
          {isClicked &&
            this.props.category.map(a => {
              return <li>{a.name}</li>;
            })}
        </ul>
      </>
    );
  }
}

export default Navdropmenu;
