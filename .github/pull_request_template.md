## 요구사항

- Github에 PR(Pull Request)을 만들어서 미션을 제출합니다.
- 피그마 디자인에 맞게 페이지를 만들어 주세요.
- React를 사용합니다

### 기본

### 상품 상세

- [x] 상품 상세 페이지 주소는 “/items/{productId}” 입니다.
- [x] response 로 받은 아래의 데이터로 화면을 구현합니다- favoriteCount : 하트 개수
- images : 상품 이미지
- tags : 상품 태그
- name : 상품 이름
- description : 상품 설명
- [x] 목록으로 돌아가기 버튼을 클릭하면 중고마켓 페이지 주소인 “/items” 으로 이동합니다

### 상품 문의 댓글

- [x] 문의하기에 내용을 입력하면 등록 버튼의 색상은 “3692FF”로 변합니다.
- [x] response 로 받은 아래의 데이터로 화면을 구현합니다
- image : 작성자 이미지
- nickname : 작성자 닉네임
- content : 작성자가 남긴 문구
- description : 상품 설명
- updatedAt : 문의글 마지막 업데이트 시간

## 주요 변경사항

design

- Items 페이지, 아이템 요소의 기본 이미지 추가
- ItemInfo 페이지, 피그마 시안의 디자인 적용

refactor

- AddItemDetails 컴포넌트에 htmlFor 속성 추가
- AddItemTags 컴포넌트에서 tag 배열 렌더링 index 값 -> id 값 변경
- ItemDetails, ItemTags 컴포넌트 분리

rename

- 미디어쿼리 디자인 각 페이지의 CSS 파일로 이동, mediaquery.css 파일 삭제
- constatns.jsx
- 네이밍 App.jsx -> Router.jsx
- 네이밍 ItemDetials, ItemTags -> AddItemDetails, ...

feat

- ItemInfo 페이지, 기본 요구사항 구현
- Items 페이지, 페이지네이션 기능 추가

## 스크린샷

![image](이미지url)

## 멘토에게

- tailwind CSS와 커스텀 훅은 다음 미션에 꼭 적용해보겠습니다!
