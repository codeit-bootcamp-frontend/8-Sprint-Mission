import styled from 'styled-components';
import Header from '../../header/Header';

function AddItem() {
  return (
    <>
      <Header />
      <Container>
        <div className="add-item-top-bar">
          <h1>상품 등록하기</h1>
          <button className="add-item-button">등록</button>
        </div>
        <label>상품 이미지</label>
        <input className="add-img" placeholder="이미지 등록" />
        <label>상품명</label>
        <input placeholder="상품명을 입력해주세요" />
        <label>상품 소개</label>
        <textarea placeholder="상품 소개를 입력해주세요" />
        <label>판매가격</label>
        <input placeholder="판매 가격을 입력해주세요" />
        <label>태그</label>
        <input placeholder="태그를 입력해주세요" />
      </Container>
    </>
  );
}

export default AddItem;

const Container = styled.div`
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  & .add-item-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
  }

  & .add-item-button {
    width: 88px;
    height: 42px;
    border-radius: 8px;
    padding: 12px 20px;
    background-color: var(--gray400);
    color: var(--white);
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    border: none;
  }

  & h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: var(--gray800);
  }

  & label {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: var(--gray800);
    margin-bottom: 12px;
    margin-top: 24px;
  }

  & input {
    height: 56px;
    border-radius: 12px;
    background-color: var(--gray100);
    border: none;
  }

  & textarea {
    height: 200px;
    border-radius: 12px;
    background-color: var(--gray100);
    border: none;
  }

  & .add-img {
    width: 282px;
    height: 282px;
  }
`;
