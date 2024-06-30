function AddItem() {
  return (
    <div>
      <div>
        <h1>상품 등록하기</h1>
        <button>등록</button>
      </div>
      <label>상품 이미지</label>
      <input placeholder="이미지 등록" />
      <label>상품명</label>
      <input placeholder="상품명을 입력해주세요" />
      <label>상품 소개</label>
      <textarea placeholder="상품 소개를 입력해주세요" />
      <label>판매가격</label>
      <input placeholder="판매 가격을 입력해주세요" />
      <label>태그</label>
      <input placeholder="태그를 입력해주세요" />
    </div>
  );
}

export default AddItem;
