import FileInput from '@/components/FileInput';
import postArticle from '@/lib/api/postArticle';
import postSignIn from '@/lib/api/postSignIn';
import cn from '@/lib/utils';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import router from 'next/router';
import { ArticleState, ArticleStateKey } from '@/types/Article';
import postImageUpload from '@/lib/api/postImageUpload';

const initialValue: ArticleState = {
  title: '',
  content: '',
  image: null,
};

function AddBoard() {
  const [values, setValues] = useState(initialValue);
  const [token, setToken] = useState<string | null>(null);
  const { title, content, image } = values;

  const allValueExist = title && content && image;
  const validationSubmit = allValueExist;

  const onChange = (name: string, value: ArticleState[ArticleStateKey]) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof ArticleState;
    const { value } = e.target;
    onChange(name, value);
  };

  const fetchPostArticle = async () => {
    const formData = new FormData();
    formData.append('image', values.image as Blob);
    if (token) {
      const imgURL = await postImageUpload(formData, token!);
      const data = await postArticle(
        {
          ...values,
          image: imgURL,
        },
        token
      );
      if ('message' in data) return;
      router.push('/boards');
    }
  };

  const handlePostArticle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validationSubmit) {
      fetchPostArticle();
    }
  };

  useEffect(() => {
    const handleSignIn = async () => {
      const accessToken = await postSignIn();
      setToken(accessToken);
    };
    handleSignIn();
  }, []);

  return (
    <main>
      <form onSubmit={handlePostArticle}>
        <h1>게시글 쓰기</h1>
        <button
          className={cn(validationSubmit && 'bg-primary-100')}
          type="submit"
        >
          등록
        </button>
        <label htmlFor="title">*제목</label>
        <input
          onChange={handleInputChange}
          value={values.title}
          id="title"
          name="title"
        />
        <label htmlFor="content">*내용</label>
        <input
          onChange={handleInputChange}
          value={values.content}
          id="content"
          name="content"
        />
        <FileInput value={image} name="image" onChange={onChange} />
      </form>
    </main>
  );
}

export default AddBoard;
