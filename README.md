# 별밤마켓🌠 (마켓컬리 클론 프로젝트)<br>

## 📌 프로젝트 소개 <br>

- 고객에게 신선한 식자재를 새벽배송하는 이커머스 플랫폼 마켓컬리 클론 프로젝트입니다.
- 개발은 초기 세팅부터 필수 구현 사항 위주로 직접 구현했으며, 프론트와 백을 연결해 실제 사용 가능한 수준으로 개발했습니다.<br>
- [Back-End github Link](https://github.com/wecode-bootcamp-korea/24-1st-WoowahanSiblings-backend)

## 👓 프로젝트 시연 영상<br>

[![시연 영상 바로가기](https://img.youtube.com/vi/DxWUIC6c57E/0.jpg)](https://www.youtube.com/watch?v=DxWUIC6c57E)<br>
위의 이미지를 클릭하시면 해당 영상으로 이동하여 확인하실 수 있습니다.

## 🔥 프로젝트 기간<br>

2021.08.30 ~ 2021.09.10<br><br>

## 🚀 우아한 남매들 (Woowahan Siblings) 팀원 구성<br>

#### Front-End(3명)<br>

- 김승찬 : 메인페이지, Nav, Footer<br>
- 김세준 : 상세페이지, 장바구니<br>
- 이지영 : 회원가입, 로그인<br>

#### Back-End(3명)<br>

- 고영수 : 상품, 상세페이지<br>
- 김정수 : 회원가입, 로그인<br>
- 송치헌 : 장바구니, 주문서<br><br>

## ⚙️ 사용 기술<br>

- 프론트엔드 : `HTML5`, `CSS3`, `JavaScript(ES6+)`,`React`, `Sass`<br>
- 백엔드 : `Django`, `Python`, `POSTMAN`, `MySQL`<br>
- 협업도구 : `Git`, `Github`, `Trello`, `Slack`, `Notion`, `Zoom`<br>

## 🔨 구현 사항<br>

**Signup page** (✅기능 구현)

- 아이디, 비밀번호 정규표현식을 통한 validation 검사
  - 각각의 조건 충족 여부에 따라 조건 통과(✔/❌) 결과 표시
- 서버에 저장된 데이터와 비교하여 아이디 중복체크

**Login page** (✅기능 구현)

- Access Token을 활용한 로그인, (로그아웃) 기능

**Main page**

- 공통 요소 Nav, Footer
- 상위 카테고리 hover 시 하위 카테고리가 보이는 이중 Nav bar
- setInteval과 통해 carousel 기능이 적용된 슬라이드 배너

**Detail page**

- carousel 기능이 적용된 관련 상품 슬라이드
- 상품 정보 Menu Tab에서 특정 Tab 클릭 시 자동으로 scroll 이동
- login 여부에 따라 해당 페이지(Cart/Login) 이동

**Cart page**

- 장바구니 목록 조회
- 원하는 상품 선택/해제
- 구매 상품 수량 업데이트

## Reference<br>

- 이 프로젝트는 [마켓컬리](https://www.kurly.com) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
