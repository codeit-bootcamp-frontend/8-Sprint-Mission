import { useState, ChangeEvent } from 'react';
import s from './imageUpload.module.scss';
import DeleteButton from './layout/DeleteButton';
import PlusIcon from '@/public/svg/ic_plus.svg';
import Image from 'next/image';

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
      {title && <label className={s.title}>{title}</label>}

      <div className={s.imageUpload}>
        <label className={s.uploadButton} htmlFor='image-upload'>
          <PlusIcon />
          이미지 등록
        </label>

        <input id='image-upload' className={s.hiddenFile} type='file' onChange={handleImageChange} accept='image/*' />

        {image && (
          <div className={s.imagePreview}>
            <Image fill src={image} alt='미리보기 이미지' />
            <DeleteButton className={s.deleteButton} onClick={handleDelete} label='이미지 삭제 버튼' />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
