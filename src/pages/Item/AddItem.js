import { Helmet } from 'react-helmet';
import { useState, useMemo, useCallback } from 'react';
import './AddItem.scss';
import Header from '../../layout/Header';
import FileInput from '../../components/form/FileInput';
import TagInput from '../../components/form/TagInput';

const INITIAL_VALUES = {
  imgFile: null,
  product: '',
  content: '',
  price: 0,
  tag: [],
};

const AddItem = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [resetTagInput, setResetTagInput] = useState(false);

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setResetTagInput(true);
  };

  const isFormValid = useMemo(() => {
    const { product, content, price, tag } = values;
    return product.trim() !== '' && content.trim() !== '' && price !== 0 && tag.length > 0;
  }, [values]);

  const handleChange = useCallback((name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleInputChange = e => {
    const { name, value, type } = e.target;
    handleChange(name, type === 'file' ? e.target.files[0] : value);
  };

  const handleTagListChange = useCallback(
    tagList => {
      handleChange('tag', tagList);
    },
    [handleChange],
  );

  const handleFormKeyDown = event => {
    // textarea 안에서는 Enter 키를 허용
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
      event.preventDefault();
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    alert('등록되었습니다');
    console.log(values);
    resetForm();
  };

  return (
    <>
      <Helmet>
        <title>판다마켓 - 상품 등록</title>
      </Helmet>
      <Header />
      <main className="main-top">
        <section className="product-register-wrap">
          <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
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
};

export default AddItem;
