import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class TopLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginText: "로그아웃",
    };
  }

  handleLogin = () => {
    localStorage.removeItem("token");
    this.setState({ loginText: "로그인" });
    this.props.history.push("/");
  };

  render() {
    const { loginText } = this.state;

    return (
      <div className="topLayout">
        <div className="kurlyMarket">
          <Link to="/">
            <img alt="delivery" src="/images/deli.webp" />
          </Link>
        </div>
        <ul className="signUpList">
          <li className="signUpListText">
            <Link to="/signup" className="signUpColor">
              회원가입
            </Link>
          </li>
          <li className="signUpListLine">
            <div />
          </li>
          <li className="signUpListText">
            {localStorage.getItem("token") ? (
              <span onClick={this.handleLogin}>{loginText}</span>
            ) : (
              <span onClick={() => this.props.history.push("/login")}>
                로그인
              </span>
            )}
          </li>
          <li className="signUpListLine">
            <div />
          </li>
          <li className="signUpListText">
            <a href="#">고객센터</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(TopLayout);
