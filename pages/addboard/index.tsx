import FileInput from '@/components/FileInput';
import postArticle from '@/lib/api/postArticle';
import postSignIn from '@/lib/api/postSignIn';
import cn from '@/lib/utils';
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import router from 'next/router';
import { ArticleState, ArticleStateKey } from '@/types/Article';
import postImageUpload from '@/lib/api/postImageUpload';
import InputElement from '@/components/elements/InputElement';
import TextAreaElement from '@/components/elements/TextAreaElement';
import NavLayout from '@/layouts/NavLayout';

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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <main className="mx-auto mb-[200px] mt-[86px] w-full max-w-[1200px]">
      <form
        onSubmit={handlePostArticle}
        className="mx-4 flex flex-col gap-6 font-lg-14px-bold tablet:mx-6"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold leading-[23.87px]">
            상품 등록하기
          </h1>
          <button
            className={cn(
              'rounded-[8px] bg-secondary-400 px-[23px] py-[11.5px] text-[16px] font-semibold leading-[19.09px] text-white',
              validationSubmit && 'bg-primary-100'
            )}
            type="submit"
          >
            등록
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label htmlFor="title">*제목</label>
            <InputElement
              className="px-6 py-4"
              onChange={handleInputChange}
              value={values.title}
              placeholder="제목을 입력해주세요"
              name="title"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="content">*내용</label>
            <TextAreaElement
              className="px-6 py-4"
              onChange={handleInputChange}
              value={values.content}
              placeholder="내용을 입력해주세요"
              name="content"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="image">이미지</label>
            <FileInput value={image} name="image" onChange={onChange} />
          </div>
        </div>
      </form>
    </main>
  );
}

AddBoard.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};

export default AddBoard;
