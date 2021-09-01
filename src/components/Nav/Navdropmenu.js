import React, { Component } from "react";

class Navdropmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isblockEvent: false,
    };
  }

  dropMenuMouseEvent = () => {
    if (this.state.isblockEvent === false) {
      this.setState({
        isblockEvent: true,
      });
    } else if (this.state.isblockEvent === true) {
      this.setState({
        isblockEvent: false,
      });
    }
  };

  render() {
    return (
      <>
        <li
          className="backgorundHover"
          onMouseEnter={this.dropMenuMouseEvent}
          onMouseLeave={this.dropMenuMouseEvent}
        >
          {this.props.list}
          <ul
            className={
              this.state.isblockEvent ? "menuNextList" : "menuNextListNone"
            }
          >
            {this.props.item.map(info => {
              return <li>{info.text}</li>;
            })}
          </ul>
        </li>
      </>
    );
  }
}

export default Navdropmenu;
