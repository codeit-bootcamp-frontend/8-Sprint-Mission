import { useState, ChangeEvent } from 'react';
import './ImageUpload.css';
import RemoveIcon from './RemoveIcon';
import { ReactComponent as PlusIcon } from '@/asset/svg/ic_plus.svg';

function ImageUpload({ title }: { title: string }) {
  const [image, setImage] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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
          <div className='imagePreview'>
            <img src={image} alt='이미지 미리보기' />
            <RemoveIcon className='deleteButton' onClick={handleDelete} label='이미지 파일' />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
