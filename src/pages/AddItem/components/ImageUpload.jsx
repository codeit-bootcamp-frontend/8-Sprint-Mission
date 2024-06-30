import './ImageUpload.css';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../../../images/icons/ic_plus.svg';
import DeleteButton from './DeleteButton';

const ImagePreview = styled.div`
  background-image: url(${({ src }) => src});
`;

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

        {image && (
          <ImagePreview className='imagePreview' src={image}>
            <div className='deleteButton'>
              <DeleteButton onClick={handleDelete} label='이미지 파일' />
            </div>
          </ImagePreview>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
