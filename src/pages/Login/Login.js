import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <main>
          <h2>로그인</h2>
          <form method="post">
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
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
              <button type="button" className="btn loginBtn">
                로그인
              </button>
            </Link>
            <Link to="#!">
              <button type="button" className="btn signUpBtn">
                회원가입
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}
