import { FormEvent, useState } from 'react';
import s from '@/styles/Addboard.module.scss';
import InputItem from '@/components/layout/InputItem';
import ImageUpload from '@/components/ImageUpload';

function AddBoard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isSubmitDisabled = !title.trim() || !content.trim();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={s.addPost}>
        <h1>게시글 쓰기</h1>

        <button type='submit' form='addPost' disabled={isSubmitDisabled}>
          등록
        </button>
      </div>

      <form id='addPost' className={s.contain} onSubmit={handleSubmit}>
        <InputItem
          label='*제목'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='제목을 입력해주세요'
        />

        <InputItem
          label='*내용'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='내용을 입력해주세요'
          isTextArea
        />

        <ImageUpload title='이미지' />
      </form>
    </>
  );
}

export default AddBoard;
