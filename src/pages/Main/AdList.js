import React, { Component } from "react";

class AdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adImg: 1,
      buttonDisplay: "none",
    };
  }

  imgChangeLeft = () => {
    if (this.state.adImg > 3) {
      this.setState({
        adImg: 1,
      });
    } else {
      this.setState({
        adImg: this.state.adImg + 1,
      });
    }
  };

  imgChangeRight = () => {
    this.setState({
      adImg: 4,
    });
    if (this.state.adImg <= 1) {
      this.setState({
        adImg: 3,
      });
    } else {
      this.setState({
        adImg: this.state.adImg - 1,
      });
    }
  };

  buttonDisplayOn = () => {
    this.setState({
      buttonDisplay: "block",
    });
  };
  buttonDisplayOff = () => {
    this.setState({
      buttonDisplay: "none",
    });
  };

  componentDidMount() {
    setInterval(this.imgChangeLeft, 5000);
  }

  render() {
    return (
      <div
        className="adList"
        onPointerOver={this.buttonDisplayOn}
        onPointerOut={this.buttonDisplayOff}
      >
        <div className="adBanner">
          <div
            className="leftArrow"
            onClick={this.imgChangeLeft}
            style={{ display: this.state.buttonDisplay }}
          >
            <img src="/images/leftbutton.webp" />
          </div>
          <img alt="ad" src={`./images/${this.state.adImg}.webp`} />
          <div
            className="rightArrow"
            onClick={this.imgChangeRight}
            style={{ display: this.state.buttonDisplay }}
          >
            <img src="/images/rightbutton.webp" />
          </div>
        </div>
      </div>
    );
  }
}

export default AdList;
