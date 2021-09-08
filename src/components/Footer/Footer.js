import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerInfo">
          <div className="infoCustomerCenter">고객 행복 센터</div>
          <div className="infoNumber">
            <div>1644-1107</div>
            <div className="operatingHours">
              <span>365고객센터</span>
              <span>오전 7시 ~ 오후 7시</span>
            </div>
          </div>
          <div className="kakao">
            <div className="kakaoBox">카카오톡 문의</div>
            <div className="kakaoOperatingHours">
              <span>365고객센터</span>
              <span className="infoTextColor">오전 7시 ~ 오후 7시</span>
            </div>
          </div>
          <div className="oneAndOne">
            <div className="oneAndOneBox">1:1문의</div>
            <div className="oneAndOneOperatingHours">
              <span>24시간 접수 가능</span>
              <span className="infoTextColor">
                고객센터 운영시간에 순차적으로 답변해드리겠습니다.
              </span>
            </div>
          </div>
          <div className="bulkOrder">
            <div className="bulkOrderBox">대량주문 문의</div>
            <div className="bulkOrderOperatingHours">
              <span>24시간 접수 가능</span>
              <span className="infoTextColor">
                비회원의 겨우 메일로 문의 바랍니다.
              </span>
            </div>
          </div>
        </div>
        <div className="company">
          <ul className="companyList">
            <li>컬리소개</li>
            <li>컬리소개영상</li>
            <li>인재채용</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
          <div className="companyInfo">
            법인명 (상호): 주식회사 I 사업자등록번호: 261-81-2367 사업자정보확인{" "}
            <br /> 통신판매업: 제 2018-서울강남-01646 호 I 개인정보보호책임자:
            김승찬 <br />
            주소: 인천광역시 계양구 장제로 I 대표이사: 김승찬 <br />
            입점문의: 입점문의하기 I 제휴문의: tmdckszm@naver.com
            <br />
            채용문의: tmdckszm@naver.com
            <br />
            팩스: 010-7122-1246 I 이메일: tmdckszm@naver.com
            <br />
            대량주문 문의: tmdckszm@naver.com
          </div>
        </div>
      </div>
    );
  }
}
