import { useState } from 'react';
import Button from '../../core/ui/buttons/Button/Button';
import ImageFileInput from '../../core/ui/inputs/ImageFileInput/ImageFileInput';
import './AddItems.css';
import TagInput from '../../core/ui/inputs/TagInput/TagInput';

interface initValue {
  imgFile: any;
  name: string;
  desc: string;
  price: number;
  tags: string[];
}

const INITIAL_VALUES: initValue = {
  imgFile: null,
  name: '',
  desc: '',
  price: 0,
  tags: [],
};

function AddItems() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [initialPreview, setInitialPreview] = useState<string>('');
  const [isAllValid, setIsAllValid] = useState(false);

  const handleChange = (name: string, value: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    checkAllInputValid();
  };

  const checkAllInputValid = () => {
    if (values.name && values.desc && values.price && values.tags.length > 0) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const addTag = (tag: string) => {
    if (!values.tags.includes(tag)) {
      handleChange(
        'tags',
        values.tags.length > 0 ? [...values.tags, tag] : [tag]
      );
    }
  };

  const removeTag = (targetTag: string) => {
    // setValues(
    //   'tags',
    //   values.tags.filter((tag) => tag !== targetTag)
    // );
    handleChange(
      'tags',
      values.tags.filter((tag) => tag !== targetTag)
    );
  };

  const handleSubmit = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-add-item">
        <div className="header-add-item">
          <div className="title-add-item">상품 등록하기</div>
          <div className="btn-submit-from-add-item">
            <Button
              text="등록"
              onClick={handleSubmit}
              isDisabled={!isAllValid}
            />
          </div>
        </div>
        <div className="wrapper-form-add-item">
          <form className="form-add-item" onSubmit={handleSubmit}>
            <div className="wrapper-input-form-add-item">
              <label className="title-input-form-add-item">상품 이미지</label>
              <div className="wrapper-imagefileinput">
                <ImageFileInput
                  name="imgFile"
                  value={values.imgFile}
                  initialPreview={initialPreview}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="wrapper-input-form-add-item">
              <label htmlFor="name" className="title-input-form-add-item">
                상품명
              </label>
              <input
                className="input-form-add-item"
                type="text"
                name="name"
                value={values.name}
                placeholder="상품명을 입력해주세요"
                onChange={handleInputChange}
              />
            </div>
            <div className="wrapper-input-form-add-item">
              <label htmlFor="desc" className="title-input-form-add-item">
                상품 소개
              </label>
              <textarea
                className="input-form-add-item input-textarea"
                name="desc"
                value={values.desc}
                placeholder="상품 소개를 입력해주세요"
                onChange={handleInputChange}
              />
            </div>
            <div className="wrapper-input-form-add-item">
              <label htmlFor="price" className="title-input-form-add-item">
                판매가격
              </label>
              <input
                className="input-form-add-item"
                type="number"
                name="price"
                value={values.price}
                placeholder="판매가격을 입력해주세요"
                onChange={handleInputChange}
              />
            </div>
            <div className="wrapper-input-form-add-item">
              <label htmlFor="" className="title-input-form-add-item">
                태그
              </label>
              <TagInput
                className=""
                name="tags"
                tags={values.tags}
                onAdd={addTag}
                onRemove={removeTag}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddItems;
