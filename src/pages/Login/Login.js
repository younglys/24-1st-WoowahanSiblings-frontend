import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  handleLogin = () => {
    this.props.history.push("/");
    console.log(this.props.history);
    fetch("http://10.58.3.39:8000/bbmarket/login", {
      method: "POST",
      body: JSON.stringify({
        account_name: this.state.id,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log("결과: ", res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          alert(`${this.state.account_name}님 반갑습니다!`);
          this.props.history.push("/");
          console.log(res);
        } else {
          alert("아이디, 비밀번호 다시 입력해주세요.");
          console.log(res);
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
              <Link to="#!" className="findId">
                <span>아이디 찾기</span>
              </Link>
              <Link to="#!" className="findPw">
                <span>비밀번호 찾기</span>
              </Link>
            </div>
          </div>
          <div className="btns">
            <Link to="#!">
              <button
                onClick={this.handleLogin}
                type="button"
                className="btn loginBtn"
              >
                로그인
              </button>
            </Link>
            <Link to="#!">
              <button
                onClick={this.handleSignUp}
                type="button"
                className="btn signUpBtn"
              >
                회원가입
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
