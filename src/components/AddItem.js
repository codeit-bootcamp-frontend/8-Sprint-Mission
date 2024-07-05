import { useEffect, useRef, useState } from "react";

function AddItem() {
  const [formData, setFormDate] = useState({
    name: "",
    info: "",
    price: "",
    tag: "",
  });
  const [addItemBtn, setAddItemBtn] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [inputFileUrl, setInputFileUrl] = useState(null);
  const inputFileImg = useRef(null);
  const imgAccept = ".jpg, .jpeg, .png";

  const inputChange = (e) => {
    // input value 상태 변경
    const { name, value } = e.target;
    setFormDate({
      ...formData,
      [name]: value,
    });
  };

  const inputFileChange = () => {
    const inputFile = inputFileImg.current.files[0];
    console.log(inputFile);

    if (inputFile) {
      const fileUrl = URL.createObjectURL(inputFile);
      setInputFileUrl(fileUrl);
    }
  };

  const addImgDelete = () => {
    setInputFileUrl(null);
  };

  const validAddItemVal = () => {
    // 유효성 검사
    if (
      formData.name.trim() !== "" &&
      formData.info.trim() !== "" &&
      formData.price.trim() !== "" &&
      formData.tag.trim() !== ""
    ) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    // input 데이터 변경 될때마다 유효성 검사 실행
    if (validAddItemVal()) {
      setAddItemBtn("on");
      setBtnDisabled(false);
    } else {
      setAddItemBtn("");
      setBtnDisabled(true);
    }
  }, [formData]);

  return (
    <section className="add-item-wrap max-wrap">
      <form method="post">
        <div className="add-item-title">
          <h2>상품 등록하기</h2>
          <button type="button" disabled={btnDisabled} className={addItemBtn}>
            등록
          </button>
        </div>
        <div className="add-input">
          <h3 className="add-input-title">상품 이미지</h3>
          <div className="add-img-list">
            <label htmlFor="add-input-img" className="add-img-area">
              <img src="/images/i-plus.png" alt="플러스 아이콘" />
              이미지 등록
            </label>
            <input
              id="add-input-img"
              type="file"
              ref={inputFileImg}
              accept={imgAccept}
              onChange={inputFileChange}
            />
            {inputFileUrl ? (
              <div className="add-img-item">
                <img src={inputFileUrl} alt="상품 등록 이미지" />
                <button type="button" onClick={addImgDelete}></button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="add-input">
          <label htmlFor="add-input-name" className="add-input-title">
            상풍명
          </label>
          <input
            id="add-input-name"
            type="text"
            name="name"
            placeholder="상품명을 입력해주세요."
            value={formData.name}
            onChange={inputChange}
          />
        </div>
        <div className="add-input">
          <label htmlFor="add-input-info" className="add-input-title">
            상품 소개
          </label>
          <textarea
            id="add-input-info"
            name="info"
            placeholder="상품 소개를 입력해주세요."
            value={formData.info}
            onChange={inputChange}
          ></textarea>
        </div>
        <div className="add-input">
          <label htmlFor="add-input-price" className="add-input-title">
            판매가격
          </label>
          <input
            id="add-input-price"
            type="number"
            name="price"
            placeholder="판매 가격을 입력해주세요."
            value={formData.price === NaN ? null : formData.price}
            onChange={inputChange}
          />
        </div>
        <div className="add-input">
          <label htmlFor="add-input-tag" className="add-input-title">
            태그
          </label>
          <input
            id="add-input-tag"
            type="text"
            name="tag"
            placeholder="태그를 입력해주세요."
            value={formData.tag}
            onChange={inputChange}
          />
          <ul className="tag-list">
            <li>
              티셔츠 <button type="button"></button>
            </li>
            <li>
              상의 <button type="button"></button>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
}

export default AddItem;
