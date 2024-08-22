import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Main from "components/@shared/Layout/Main";
import AddImage from "components/@shared/UI/AddImage";
import Form from "components/@shared/UI/form/Form";
import FormButton from "components/@shared/UI/form/FormButton";
import TextareaInput from "components/@shared/UI/form/TextareaInput";
import { DEFAULT_IMAGE_URL } from "../constants";

interface FormValues {
  title: string;
  content: string;
  imageUrl: string;
}

function AddBoard() {
  const [image, setImage] = useState<File | null>(null);
  const { control, handleSubmit, watch, reset, setValue } = useForm<FormValues>(
    {
      defaultValues: {
        title: "",
        content: "",
        imageUrl: DEFAULT_IMAGE_URL,
      },
    }
  );

  // 이미지 URL 필드 업데이트
  const updateImageUrl = (imageUrl: string | null) => {
    setValue("imageUrl", imageUrl || DEFAULT_IMAGE_URL);
  };

  // 이미지 변경 처리
  const handleImageChange = (file: File | null) => {
    setImage(file);
    const imageUrl = file ? URL.createObjectURL(file) : null;
    updateImageUrl(imageUrl);
  };

  // 폼 제출 처리
  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log("제출된 데이터:", values);
    // API 요청 추가 예정
    reset();
  };

  return (
    <Main className="relative">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-bold text-gray-800 text-xl mb-8">게시글 쓰기</h1>
        <FormButton isFormValid={!!watch("title") && !!watch("content")} />
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextareaInput
              htmlFor="title"
              title="*제목"
              placeholder="제목을 입력해주세요"
              className="h-[56px]"
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextareaInput
              htmlFor="content"
              title="*내용"
              placeholder="내용을 입력해주세요"
              className="h-[282px]"
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
        <AddImage
          title="이미지"
          image={image}
          onImageChange={handleImageChange}
          onSelectedImageChange={updateImageUrl}
        />
      </Form>
    </Main>
  );
}

export default AddBoard;
