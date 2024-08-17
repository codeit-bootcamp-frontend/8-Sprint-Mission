import { SyntheticEvent, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Section from '../Section/Section';
import Input from '../Input/Input';
import FileInput from '../Input/FileInput';
import TextArea from '../Input/TextArea';
import LinkButton from '../Button/LinkButton';
import axios from '@/lib/axios';
import styles from './AddPost.module.css';
import AuthContext from '@/lib/store/authContext';
import { FormChangeType, InputChangeType } from './types/AddPostType';

const INITIAL_POST_VALUE = {
  title: '',
  content: '',
  image: null,
};

export default function AddPost() {
  const [postFormData, setPostFormData] = useState(INITIAL_POST_VALUE);
  const { title, content, image } = postFormData;
  const { token } = useContext(AuthContext);
  const router = useRouter();

  const isActive = title.trim() !== '' && content.trim() !== '';

  const fetchNewPostData = async () => {
    try {
      let formData = new FormData();
      formData.append('image', image);

      const imageRes = await axios.post(`/images/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const articlesData = {
        title: title,
        content: content,
        image: imageRes.data.url,
      };

      const res = await axios.post(`/articles`, articlesData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data, imageRes.data);
      router.push('/boards');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmitPost = (e: SyntheticEvent) => {
    e.preventDefault();
    fetchNewPostData();
  };

  const handlePostFormChange: FormChangeType = (name, value) => {
    setPostFormData(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleChangeFileInput: InputChangeType = (name, value) => {
    handlePostFormChange(name, value);
  };

  return (
    <Section>
      <form onSubmit={handleSubmitPost} className={styles.formContainer}>
        <div className={styles.titleContainer}>
          <h2>게시글 쓰기</h2>
          <LinkButton type="submit" isActive={!isActive} btnName="등록" />
        </div>
        <Input
          className={styles.inputBox}
          type="text"
          name="title"
          id="title"
          value={title}
          label="*제목"
          placeholder="제목을 입력해주세요."
          changeValue={handlePostFormChange}
        />
        <TextArea
          className={styles.inputBox}
          name="content"
          id="content"
          label="*내용"
          value={content}
          placeholder="내용을 입력해주세요."
          changeValue={handlePostFormChange}
        />
        <h2 className={styles.fileInputTitle}>이미지</h2>
        <FileInput
          type="file"
          name="image"
          id="image"
          value={image}
          accept="image/png, image/jpeg"
          changeValue={handleChangeFileInput}
        />
      </form>
    </Section>
  );
}
