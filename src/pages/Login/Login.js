import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSignUp = e => {
    this.props.history.push("/signup");
  };

  handleLogin = () => {
    this.props.history.push("/");
    console.log(this.props.history);
    fetch("http://10.58.2.140:8000/bbmarket/login", {
      method: "POST",
      body: JSON.stringify({
        account_name: this.state.id,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const messages = {
          SUCCESS: `로그인을 성공했습니다. ${this.state.account_name}님 반갑습니다!`,
          INVALID_USER: "잘못된 회원정보입니다. 아이디를 다시 입력해주세요.",
          INVALID_PASSWORD:
            "잘못된 회원정보입니다. 비밀번호를 다시 입력해주세요.",
          KEY_ERROR: "아이디와 비밀번호를 입력해주세요.",
        };
        alert(messages[res.MESSAGE]);
        console.log("결과: ", res);

        if (res.token) {
          localStorage.setItem("Token", res.Token);
          console.log(res.MESSAGE);
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div className="login">
        <main className="loginMain">
          <h1 className="loginTitle">로그인</h1>
          <form method="post" className="loginForm">
            <input
              onChange={this.handleInput}
              type="text"
              name="id"
              className="loginInput inputId"
              placeholder="아이디를 입력해주세요"
            />
            <input
              onChange={this.handleInput}
              type="password"
              name="password"
              className="loginInput"
              placeholder="비밀번호를 입력해주세요"
            />
          </form>
          <div className="loginSub">
            <div className="secureCheck">
              <input type="checkbox" id="secureAccess" />
              <label htmlFor="secureAccess">보안접속</label>
            </div>
            <div className="findIdPwBtn">
              <span className="findId">아이디 찾기</span>
              <span className="findPw">비밀번호 찾기</span>
            </div>
          </div>
          <div className="btns">
            <button
              onClick={this.handleLogin}
              type="button"
              className="btn loginBtn"
            >
              로그인
            </button>
            <button
              onClick={this.handleSignUp}
              type="button"
              className="btn signUpBtn"
            >
              회원가입
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
