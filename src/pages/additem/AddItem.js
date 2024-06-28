import { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './AddItem.module.css';

function AddItem() {
  const [values, setValues] = useState({
    images: null,
    tags: [],
    price: '',
    description: '',
    name: '',
  });
  const [preview, setPreview] = useState();
  const [tagInput, setTagInput] = useState('');
  const [pass, setPass] = useState(false);
  console.log(pass);

  // 이미지 삭제
  const onClickImageDelete = () => {
    setValues((prevValues) => ({
      ...prevValues,
      images: null,
    }));
  };

  // 태그 삭제
  const onClickTagDelete = (deleteTag) => {
    const restTag = values.tags.filter((tag) => tag !== deleteTag);
    setValues((prevValues) => ({
      ...prevValues,
      tags: restTag,
    }));
  };

  // 입력된 값을 state에 저장
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 입력된 값을 파악하여 함수에 전달
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      handleChange(name, files[0]);
    } else {
      handleChange(name, value);
    }
  };

  // 태그 인풋의 입력값 파악
  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  // 등록 버튼 클릭 시 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  // 이미지 미리 보기 주소 생성, 삭제
  useEffect(() => {
    const image = values.images;
    if (!image) return;
    const nextPreview = URL.createObjectURL(image);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [values.images]);

  // 태그 인풋 엔터키 감지 후 입력값 state에 저장 밑 태그 인풋 초기화
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const tag = tagInput.trim();
      if (tag && !values.tags.includes(tag)) {
        setValues((prevValues) => ({
          ...prevValues,
          tags: [...prevValues.tags, tag],
        }));
        setTagInput('');
      } else {
        alert('비어있거나 중복된 태그입니다.');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [tagInput, values.tags]);
  // 입력값 감지 후 조건 충족 시 등록 버튼 활성화
  useEffect(() => {
    function validation({ tags, price, description, name } = values) {
      const target = price && description && name !== '';
      const tagCheck = tags.length > 0;

      return target && tagCheck;
    }
    const isValid = validation();
    setPass(isValid);
  }, [values, tagInput, values.tags]);
  return (
    <div>
      <NavBar />
      <main>
        <form onSubmit={handleSubmit} className={`${styles.addItemBody} ${styles.verticalAlign}`}>
          <article className={styles.productRegister}>
            <h2 className={styles.productRegisterTitle}>상품 등록하기</h2>
            <button className={`${pass ? styles.vaildButton : styles.productRegisterBtn}`}>
              등록
            </button>
          </article>
          <article>
            <label className={styles.verticalAlign} htmlFor="file-upload">
              <span className={styles.productImageTitle}>상품 이미지</span>
              <div className={styles.imageUploadBox}>
                <div className={styles.imageUpload}>
                  <img
                    src={require('../../assets/images/icon/btn_icon/ic_plus.png')}
                    accept="image/*"
                    alt="이미지 추가 버튼"
                    width="48px"
                    height="48px"
                  />
                  <span className={styles.imageUploadText}>이미지 등록</span>
                </div>
                {preview ? (
                  <div className={styles.imageUploadSelect}>
                    <img className={styles.imageUpload} alt="등록된 이미지" src={preview} />
                    <div className={styles.imageUploadDelete} onClick={onClickImageDelete}>
                      <img
                        src={require('../../assets/images/icon/btn_icon/ic_delete_btn.png')}
                        alt="등록된 이미지 삭제 버튼"
                        width="20px"
                        height="20px"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </label>
            <input
              onChange={handleInputChange}
              type="file"
              name="images"
              id="file-upload"
              className={styles.imageUploadInput}
            />
          </article>
          <article className={styles.verticalAlign}>
            <label className={styles.labelTitle}>상품명</label>
            <input
              onChange={handleInputChange}
              className={styles.productInput}
              placeholder="상품명을 입력해주세요"
              name="name"
              value={values.name}
              type="text"
            />
          </article>
          <article className={styles.verticalAlign}>
            <label className={styles.labelTitle}>상품 소개</label>
            <textarea
              onChange={handleInputChange}
              className={styles.productDescriptionText}
              value={values.description}
              name="description"
              placeholder="상품 소개를 입력해주세요"
            />
          </article>
          <article className={styles.verticalAlign}>
            <label className={styles.labelTitle}>판매 가격</label>
            <input
              onChange={handleInputChange}
              className={styles.productInput}
              placeholder="판매 가격을 입력해주세요"
              value={values.price}
              name="price"
              type="text"
            />
          </article>
          <article className={styles.verticalAlign}>
            <label className={styles.labelTitle}>태그</label>
            <input
              onChange={handleTagInputChange}
              className={styles.productInput}
              placeholder="태그를 입력해주세요"
              value={tagInput}
              name="tags"
              type="text"
            />
          </article>
          {values.tags.length > 0 ? (
            <ul className={styles.tagsContainer}>
              {values.tags.map((tag, index) => (
                <li className={styles.tags} key={tag + index}>
                  <div className={styles.tagValue}>{tag}</div>
                  <img
                    onClick={() => onClickTagDelete(tag)}
                    src={require('../../assets/images/icon/btn_icon/ic_delete_btn_gray.png')}
                    alt="등록된 태그 삭제 버튼"
                    width="22px"
                    height="24px"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </form>
      </main>
    </div>
  );
}

export default AddItem;
