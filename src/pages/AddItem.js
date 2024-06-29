import { useState, useEffect } from 'react';
import './AddItem.scss';
import Header from './../layout/Header';
import FileInput from './../components/FileInput';
import TagInput from '../components/TagInput';

function AddItem() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [values, setValues] = useState({
    imgFile: '',
    product: '',
    content: '',
    price: 0,
    tag: [],
  });
  const [resetTagInput, setResetTagInput] = useState(false);

  const handleChange = (name, value) => {
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);

    const { product, content, price, tag } = updatedValues;
    if (product !== '' && content !== '' && price !== 0 && tag.length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputChange = e => {
    const { name, value, type } = e.target;
    handleChange(name, type === 'file' ? e.target.files[0] : value);
  };

  const handleTagListChange = tagList => {
    handleChange('tag', tagList);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('등록되었습니다');
    console.log(values);

    // 폼 데이터 초기화
    setValues({
      imgFile: '',
      product: '',
      content: '',
      price: 0,
      tag: [],
    });
    setIsFormValid(false);
    setResetTagInput(true);
  };

  useEffect(() => {
    if (resetTagInput) {
      setResetTagInput(false);
    }
  }, [resetTagInput]);

  return (
    <>
      <Header />
      <main className="main-top">
        <section className="product-register-wrap">
          <form onSubmit={handleSubmit}>
            <div className="section-header">
              <h2 className="title">상품 등록하기</h2>
              <button className="btn-primary btn-sm" type="submit" disabled={!isFormValid}>
                등록
              </button>
            </div>
            <div className="input-group">
              <label>상품이미지</label>
              <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>상품명</label>
              <input
                type="text"
                placeholder="상품명을 입력해주세요"
                name="product"
                value={values.product}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>상품 소개</label>
              <textarea
                name="content"
                value={values.content}
                onChange={handleInputChange}
                placeholder="상품 소개를 입력해주세요"
                rows="10"></textarea>
            </div>
            <div className="input-group">
              <label>판매가격</label>
              <input
                type="number"
                name="price"
                value={values.price}
                onChange={handleInputChange}
                placeholder="판매 가격을 입력해주세요"
              />
            </div>
            <div className="input-group">
              <label>태그</label>
              <TagInput onTagListChange={handleTagListChange} reset={resetTagInput} />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default AddItem;
