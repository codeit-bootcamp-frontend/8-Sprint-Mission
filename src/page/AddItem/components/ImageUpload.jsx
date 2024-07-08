import { useState } from 'react';
import './ImageUpload.css';
import styled from 'styled-components';
import RemoveIcon from './RemoveIcon';
import { ReactComponent as PlusIcon } from 'image/icon/ic_plus.svg';

const Div = styled.div``;

function ImageUpload({ title }) {
  const [image, setImage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDelete = () => {
    setImage('');
  };

  return (
    <div>
      {title && <label className='titleLabel'>{title}</label>}

      <div className='imageUpload'>
        <label className='uploadButton' htmlFor='image-upload'>
          <PlusIcon />
          이미지 등록
        </label>

        <input
          id='image-upload'
          className='hiddenFileInput'
          type='file'
          onChange={handleImageChange}
          accept='image/*'
        />

        {image && ( // 코드 테스트 중
          <Div className='imagePreview' class='test'>
            <img class='test' className='imagePreview' src={image} alt='이미지 미리보기' />
            <RemoveIcon css='deleteButton' Click={handleDelete} label='이미지 파일' />
          </Div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
