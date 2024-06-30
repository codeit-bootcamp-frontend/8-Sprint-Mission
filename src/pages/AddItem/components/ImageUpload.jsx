import { useState } from 'react';
import { ReactComponent as PlusIcon } from '../../../images/icons/ic_plus.svg';
import DeleteButton from './DeleteButton';

function ImageUpload({ title }) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleDelete = () => {
    setImagePreviewUrl('');
  };

  return (
    <div>
      {title && <label className='titleLabel'>{title}</label>}

      <div className='imageUpload'>
        {}
        <label className='uploadButton' htmlFor='image-upload'>
          <PlusIcon />
          이미지 등록
        </label>

        <input id='image-upload' type='file' onChange={handleImageChange} accept='image/*' />

        {}
        {imagePreviewUrl && (
          <div src={imagePreviewUrl}>
            <div className='deleteButton'>
              <DeleteButton onClick={handleDelete} label='이미지 파일' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
