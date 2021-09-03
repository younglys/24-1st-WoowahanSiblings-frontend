import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

export default class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <main>
          <div className="formHeader">
            <h1>회원가입</h1>
            <p className="requirement">필수입력사항</p>
          </div>
          <form className="form">
            <table>
              <tbody>
                <tr>
                  <th className="requiredCategory">아이디</th>
                  <td>
                    <input
                      type="text"
                      placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    />
                    <button type="button">중복확인</button>
                    <div className="inputConditionWrapper">
                      {/* 기호'•'는 조건 불충족 시 '×', 조건 충족 시 '√' */}
                      <p className="inputCondition">
                        6자 이상의 영문 혹은 영문과 숫자를 조합
                      </p>
                      <p className="inputCondition">아이디 중복확인</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">비밀번호</th>
                  <td>
                    <input
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    <div className="inputConditionWrapper">
                      {/* 기호'•'는 조건 불충족 시 '×', 조건 충족 시 '√' */}
                      <p className="inputCondition">10자 이상 입력</p>
                      <p className="inputCondition">
                        영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                      </p>
                      <p className="inputCondition">
                        동일한 숫자 3개 이상 연속 사용 불가
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">비밀번호확인</th>
                  <td>
                    <input
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                    <div className="inputConditionWrapper">
                      <p className="inputCondition">
                        동일한 비밀번호를 입력해주세요.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">이름</th>
                  <td>
                    <input type="text" placeholder="이름을 입력해주세요" />
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">이메일</th>
                  <td>
                    <input
                      type="email"
                      placeholder="예: byeolbammarket@bb.com"
                    />
                    <button type="button">중복확인</button>
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">휴대폰</th>
                  <td>
                    <input type="text" placeholder="숫자만 입력해주세요" />
                    <button type="button">인증번호 받기</button>
                  </td>
                </tr>
                <tr>
                  <th className="requiredCategory">주소</th>
                  <td>
                    <button type="button" className="addrSearchBtn">
                      <i className="fas fa-search"></i>
                      &nbsp; 주소 검색
                    </button>
                    <div>
                      {/* 기호'•'는 조건 불충족 시 '×', 조건 충족 시 '√' */}
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
                      <div className="genderOption">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label htmlFor="male">남자</label>
                      </div>
                      <div className="genderOption">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label htmlFor="female">여자</label>
                      </div>
                      <div className="genderOption">
                        <input
                          type="radio"
                          id="noSelect"
                          name="gender"
                          value="option"
                        />
                        <label htmlFor="noSelect">선택안함</label>
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
                        className="birthInput"
                        maxLength="4"
                        placeholder="YYYY"
                      ></input>
                      <span>/</span>
                      <input
                        type="text"
                        className="birthInput"
                        maxLength="2"
                        placeholder="MM"
                      ></input>
                      <span>/</span>
                      <input
                        type="text"
                        className="birthInput"
                        maxLength="2"
                        placeholder="DD"
                      ></input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>추가입력 사항</th>
                  <td>
                    <div className="options">
                      <div className="additionOption">
                        <input
                          type="radio"
                          id="recommendedId"
                          name="addition"
                          value="id"
                        />
                        <label htmlFor="recommendedId">추천인 아이디</label>
                      </div>
                      <div className="additionOption">
                        <input
                          type="radio"
                          id="eventJoin"
                          name="addition"
                          value="event"
                        />
                        <label htmlFor="eventJoin">참여 이벤트명</label>
                      </div>
                    </div>
                    <div>
                      {/* 추천인 아이디 선택 시 */}
                      <input
                        type="text"
                        placeholder="추천인 아이디를 입력해주세요."
                      />
                    </div>
                    <div>
                      {/* 참여 이벤트명 선택 시 */}
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
                  <td>
                    <div className="terms">
                      <label>
                        <span className="checkCircle">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>전체 동의합니다.</strong>
                      </label>
                      <p className="terms termsInfo">
                        선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                        서비스를 이용할 수 있습니다.
                      </p>
                    </div>
                    <div className="terms">
                      <label>
                        <span className="checkCircle">
                          <i className="fas fa-check"></i>
                        </span>
                        <span>이용약관 동의</span>
                        <span className="selectOption"> (필수)</span>
                      </label>
                      <Link to="#!" className="termsView">
                        약관보기
                      </Link>
                    </div>
                    <div className="terms">
                      <label>
                        <span className="checkCircle">
                          <i className="fas fa-check"></i>
                        </span>
                        <span>개인정보 수집&middot;이용 동의</span>
                        <span className="selectOption"> (필수)</span>
                        <Link to="#!" className="termsView">
                          약관보기
                        </Link>
                      </label>
                    </div>
                    <div className="terms">
                      <label>
                        <span className="checkCircle">
                          <i className="fas fa-check"></i>
                        </span>
                        <span>개인정보 수집&middot;이용 동의</span>
                        <span className="selectOption"> (선택)</span>
                      </label>
                      <Link to="#!" className="termsView">
                        약관보기
                      </Link>
                    </div>
                    <div className="terms">
                      <label>
                        <span className="checkCircle">
                          <i className="fas fa-check"></i>
                        </span>
                        <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
                        <span className="selectOption"> (선택)</span>
                      </label>
                      <div className="terms smsEmail">
                        <label className="sms">
                          <span className="checkCircle">
                            <i className="fas fa-check"></i>
                          </span>
                          <span>SMS</span>
                        </label>
                        <label>
                          <span className="checkCircle">
                            <i className="fas fa-check"></i>
                          </span>
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
                        <span className="checkCircle">
                          <i className="fas fa-check"></i>
                        </span>
                        <span>본인은 만 14세 이상입니다.</span>
                        <span className="selectOption"> (필수)</span>
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="formSubmit">
              <button type="submit" className="submitBtn">
                가입하기
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}
