import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AddItem from './style.module.css';
import InputItem from '@/components/InputItem';
import TagInput from './components/TagInput';
import ImageUpload from './components/ImageUpload';

function AddItemPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((tags) => tags !== tag));
  };

  const submitDisabled = !name || !description || !price || !tags.length;

  return (
    <>
      <Helmet>
        <title>판다마켓 - 중고마켓</title>
      </Helmet>

      <div className={AddItem.container}>
        <form>
          <div className={AddItem.titleSection}>
            <h1>상품 등록하기</h1>
            <button className={AddItem.registerButton} type='submit' disabled={submitDisabled}>
              등록
            </button>
          </div>
          <div className={AddItem.inputSection}>
            <ImageUpload title='상품 이미지' />
            <InputItem
              id='name'
              label='상품명'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='상품명을 입력해 주세요'
            />
            <InputItem
              id='description'
              label='상품 소개'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='상품 소개를 입력해 주세요'
              isTextArea
            />
            <InputItem
              id='price'
              label='판매 가격'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder='판매 가격을 입력해 주세요'
            />
            <TagInput tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddItemPage;
