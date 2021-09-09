import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { SIGN_UP_API, SIGN_UP_CHECK_API } from "../../config";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      email: "",
      phoneNumber: "",
      address: "",
      gender: "",
      usableId: false,
      isIdshowing: false,
      isPwshowing: false,
      isPwCheckshowing: false,
      isIdColor: false,
      isPwColor: false,
      isPwCheckColor: false,
      isPwReCheckColor: false,
      checkBtn: false,
    };
  }

  handleShowInputCondition = e => {
    this.setState({
      isIdShowing: true,
    });
  };

  handleShowPwInputCondition = e => {
    this.setState({
      isPwShowing: true,
    });
  };

  handleShowPwCheckInputCondition = e => {
    this.setState({
      isPwCheckShowing: true,
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleBtnColor = e => {
    e.preventDefault();
    this.setState({
      checkBtn: !this.state.checkBtn,
    });
  };

  handleIdPassCondition = e => {
    const idCheck = /^[a-z]+[a-z0-9]{5,16}$/;

    if (e.target.value.length > 5 && idCheck.test(e.target.value)) {
      this.setState({
        isIdColor: true,
      });
    } else {
      this.setState({
        isIdColor: false,
      });
    }
  };

  handlePwPassCondition = e => {
    if (e.target.value.length > 9) {
      this.setState({
        isPwColor: true,
      });
    } else {
      this.setState({
        isPwColor: false,
      });
    }

    const pwCheck =
      /^(?=.*[A-Z])(?=.*[0-9])(?!.*?\d{4})(?=.*[a-z])(?=.*[!@#$%^*+=-]).{9,16}$/;

    if (pwCheck.test(e.target.value)) {
      this.setState({
        isPwCheckColor: true,
      });
    } else {
      this.setState({
        isPwCheckColor: false,
      });
    }
  };

  handlePwCheck = e => {
    if (this.state.password === e.target.value) {
      this.setState({
        isPwReCheckColor: true,
      });
    } else {
      this.setState({
        isPwReCheckColor: false,
      });
    }
  };

  checkDuplicationId = e => {
    e.preventDefault();
    fetch(SIGN_UP_CHECK_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ account_name: this.state.id }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "POSSIBLE") {
          alert("현재 사용 가능한 아이디입니다.");
          this.setState({ usableId: true });
        } else if (res.message === "EXIST_USER") {
          alert("이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요.");
        }
      });
  };

  handleSignup = () => {
    const {
      id,
      password,
      name,
      email,
      phoneNumber,
      address,
      gender,
      birthYear,
      birthMonth,
      birthDate,
    } = this.state;
    fetch(SIGN_UP_API, {
      method: "POST",
      body: JSON.stringify({
        account_name: id,
        password: password,
        name: name,
        email: email,
        phone_number: phoneNumber,
        address: address,
        gender: gender,
        date_of_birth: `${birthYear}-${birthMonth}-${birthDate}`,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const messages = {
          SUCCESS: `${this.state.id}님 반갑습니다. 별밤마켓에 오신 것을 환영합니다!`,
          INVALID_ACCOUNT:
            "가입이 불가합니다. 아이디를 형식에 맞게 다시 입력해주세요.",
          INVALID_PASSWORD:
            "가입이 불가합니다. 비밀번호를 형식에 맞게 다시 입력해주세요.",
          INVALID_EMAIL:
            "가입이 불가합니다. 이메일을 형식에 맞게 다시 입력해주세요.",
        };
        alert(messages[res.message]);
        console.log(res);

        if (res.message === "SUCCESS") {
          this.props.history.push("/login");
        }
      });
  };

  render() {
    const {
      isIdShowing,
      isPwShowing,
      isPwCheckShowing,
      isIdColor,
      isPwColor,
      isPwCheckColor,
      isPwReCheckColor,
    } = this.state;
    let btnStatus = this.state.checkBtn ? "check" : "uncheck";
    return (
      <div className="signUp">
        <main>
          <div className="formHeader">
            <h1>회원가입</h1>
            <p className="requirement">필수입력사항</p>
          </div>
          <form className="form" onChange={this.handleInput}>
            <table>
              <tbody>
                <tr>
                  <th className="requiredCategory">아이디</th>
                  <td>
                    <input
                      onClick={this.handleShowInputCondition}
                      onChange={this.handleIdPassCondition}
                      type="text"
                      name="id"
                      autoComplete="off"
                      placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    />
                    <button type="button" onClick={this.checkDuplicationId}>
                      중복확인
                    </button>
                    {isIdShowing && (
                      <div className="inputConditionWrapper">
                        <p
                          className="inputCondition"
                          style={{
                            color: isIdColor === false ? "red" : "green",
                          }}
                        >
                          6자 이상의 영문 혹은 영문과 숫자를 조합(영문부터 작성)
                        </p>
                        <p
                          className="inputCondition"
                          style={{
                            color:
                              this.state.usableId === false ? "red" : "green",
                          }}
                        >
                          아이디 중복확인
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">비밀번호</th>
                  <td>
                    <input
                      onClick={this.handleShowPwInputCondition}
                      onChange={this.handlePwPassCondition}
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    {isPwShowing && (
                      <div className="inputConditionWrapper">
                        <p
                          className="inputCondition"
                          style={{
                            color: isPwColor === false ? "red" : "green",
                          }}
                        >
                          10자 이상 입력
                        </p>
                        <p
                          className="inputCondition"
                          style={{
                            color: isPwCheckColor === false ? "red" : "green",
                          }}
                        >
                          영문 대소문자/숫자/특수문자(공백 제외)만 허용하며, 2개
                          이상 조합
                        </p>
                        <p
                          className="inputCondition"
                          style={{
                            color: isPwCheckColor === false ? "red" : "green",
                          }}
                        >
                          동일한 숫자 3개 이상 연속 사용 불가
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">비밀번호확인</th>
                  <td>
                    <input
                      onClick={this.handleShowPwCheckInputCondition}
                      onChange={this.handlePwCheck}
                      type="password"
                      name="rePassword"
                      autoComplete="off"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                    {isPwCheckShowing && (
                      <div className="inputConditionWrapper">
                        <p
                          className="inputCondition"
                          style={{
                            color: isPwReCheckColor === false ? "red" : "green",
                          }}
                        >
                          동일한 비밀번호를 입력해주세요.
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">이름</th>
                  <td>
                    <input
                      type="text"
                      name="name"
                      placeholder="이름을 입력해주세요"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">이메일</th>
                  <td>
                    <input
                      type="email"
                      name="email"
                      placeholder="예: byeolbammarket@bb.com"
                    />
                    <button type="button">중복확인</button>
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">휴대폰</th>
                  <td>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="숫자만 입력해주세요"
                    />
                    <button type="button">인증번호 받기</button>
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">주소</th>
                  <td className="address">
                    <input
                      type="text"
                      name="address"
                      placeholder="예: 서울시 강남구 테헤란로 427, 3층 별밤마켓"
                    />
                    <div>
                      <div className="inputConditionWrapper">
                        <p className="inputDescription">
                          배송지에 따라 상품 정보가 달라질 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>성별</th>
                  <td>
                    <div className="options">
                      <div className="genderOptions">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label htmlFor="male" className="genderOption">
                          남자
                        </label>
                      </div>
                      <div className="genderOptions">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label htmlFor="female" className="genderOption">
                          여자
                        </label>
                      </div>
                      <div className="genderOptions">
                        <input
                          type="radio"
                          id="noSelect"
                          name="gender"
                          value="noSelect"
                          defaultChecked
                        />
                        <label htmlFor="noSelect" className="genderOption">
                          선택안함
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>
                    <div className="birth">
                      <input
                        type="text"
                        name="birthYear"
                        className="birthInput"
                        maxLength="4"
                        placeholder="YYYY"
                      ></input>
                      <span>/</span>
                      <input
                        type="text"
                        name="birthMonth"
                        className="birthInput"
                        maxLength="2"
                        placeholder="MM"
                      ></input>
                      <span>/</span>
                      <input
                        type="text"
                        name="birthDate"
                        className="birthInput"
                        maxLength="2"
                        placeholder="DD"
                      ></input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>추가입력 사항</th>
                  <td className="inputOption">
                    <div className="options">
                      <div className="additionOptions">
                        <input
                          type="radio"
                          id="recommendedId"
                          name="addition"
                          value="id"
                        />
                        <label
                          htmlFor="recommendedId"
                          className="additionOption"
                        >
                          추천인 아이디
                        </label>
                      </div>
                      <div className="additionOptions">
                        <input
                          type="radio"
                          id="eventJoin"
                          name="addition"
                          value="event"
                        />
                        <label htmlFor="eventJoin" className="additionOption">
                          참여 이벤트명
                        </label>
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="추천인 아이디 또는 참여 이벤트명을 입력해주세요."
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="참여 이벤트명을 입력해주세요."
                        hidden
                      />
                    </div>
                    <div className="inputConditionWrapper">
                      <p className="inputDescription">
                        추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.
                      </p>
                      <p className="inputDescription">
                        가입 이후, 수정이 불가합니다.
                      </p>
                      <p className="inputDescription">
                        대소문자 및 띄어쓰기에 유의해주세요.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="accessTerms">
                  <th className="requiredCategory">이용약관동의</th>
                  <td className="termsConditions">
                    <div className="terms">
                      <label>
                        <button
                          className={btnStatus}
                          onClick={this.handleBtnColor}
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <strong>전체 동의합니다.</strong>
                      </label>
                      <p className="terms termsInfo">
                        선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                        서비스를 이용할 수 있습니다.
                      </p>
                    </div>
                    <div className="terms">
                      <label>
                        <button
                          className={btnStatus}
                          onClick={this.handleBtnColor}
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <span>이용약관 동의</span>
                        <span className="selectOption"> (필수)</span>
                      </label>
                      <Link to="#!" className="termsView">
                        약관보기
                      </Link>
                    </div>
                    <div className="terms">
                      <label>
                        <button
                          className={btnStatus}
                          onClick={this.handleBtnColor}
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <span>개인정보 수집&middot;이용 동의</span>
                        <span className="selectOption"> (필수)</span>
                        <Link to="#!" className="termsView">
                          약관보기
                        </Link>
                      </label>
                    </div>
                    <div className="terms">
                      <label>
                        <button
                          className={btnStatus}
                          onClick={this.handleBtnColor}
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <span>개인정보 수집&middot;이용 동의</span>
                        <span className="selectOption"> (선택)</span>
                      </label>
                      <Link to="#!" className="termsView">
                        약관보기
                      </Link>
                    </div>
                    <div className="terms">
                      <label>
                        <button
                          className={btnStatus}
                          onClick={this.handleBtnColor}
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
                        <span className="selectOption"> (선택)</span>
                      </label>
                      <div className="terms smsEmail">
                        <label className="sms">
                          <button
                            className={btnStatus}
                            onClick={this.handleBtnColor}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                          <span>SMS</span>
                        </label>
                        <label>
                          <button
                            className={btnStatus}
                            onClick={this.handleBtnColor}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                          <span>이메일</span>
                        </label>
                      </div>
                      <p className="smsInfo">
                        동의 시 한 달간 [5% 적립] + [무제한 무료배송]
                        <span className="selectOption">(첫 주문 후 적용)</span>
                      </p>
                    </div>
                    <div className="terms">
                      <label>
                        <button
                          className={btnStatus}
                          onClick={this.handleBtnColor}
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <span>본인은 만 14세 이상입니다.</span>
                        <span className="selectOption"> (필수)</span>
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="formSubmit">
              <button
                onClick={this.handleSignup}
                type="button"
                className="submitBtn"
              >
                가입하기
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default withRouter(SignUp);
