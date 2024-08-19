import FileInput from '@/components/FileInput';
import postArticle from '@/lib/api/postArticle';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import router from 'next/router';
import { ArticleForm, ArticleFormKey } from '@/types/Article';
import postImageUpload from '@/lib/api/postImageUpload';
import InputElement from '@/components/elements/InputElement';
import TextAreaElement from '@/components/elements/TextAreaElement';
import NavLayout from '@/layouts/NavLayout';
import MainContainer from '@/components/container/MainContainer';
import SubmitButton from '@/components/elements/button/SubmitButton';

const initialValue: ArticleForm = {
  title: '',
  content: '',
  image: null,
};

function AddBoard() {
  const [values, setValues] = useState(initialValue);
  const { title, content, image } = values;

  const allValueExist = title && content && image;
  const validationSubmit = allValueExist;

  const onChange = (name: string, value: ArticleForm[ArticleFormKey]) => {
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof ArticleForm;
    const { value } = e.target;
    onChange(name, value);
  };

  const fetchPostArticle = async () => {
    const formData = new FormData();
    formData.append('image', values.image as Blob);
    const imgURL = await postImageUpload(formData);
    const data = await postArticle({
      ...values,
      image: imgURL,
    });
    if ('message' in data) return;
    router.push('/boards');
  };

  const handlePostArticle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validationSubmit) {
      fetchPostArticle();
    }
  };

  return (
    <MainContainer>
      <form
        onSubmit={handlePostArticle}
        className="mx-4 flex flex-col gap-6 font-lg-14px-bold tablet:mx-6"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-bold leading-[23.87px]">
            상품 등록하기
          </h1>
          <SubmitButton isActive={!!validationSubmit}>등록</SubmitButton>
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
    </MainContainer>
  );
}

AddBoard.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};

export default AddBoard;
