import PrimaryButton from "@/components/primarybutton";
import styled from "styled-components";
import Head from "next/head";
import { useState, ChangeEvent, useEffect } from "react";
import FileInput from "@/components/fileinput";
import { articleType } from "@/interfaces/article";
import { postArticle, postImage } from "./util/api";
import router from "next/router";

export default function AddBoard() {
  const [articleValue, setArticleValue] = useState<articleType>({
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png",
    content: "",
    title: "",
  });

  const [fileImage, setFileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<String | null>("");

  const [disabled, setDisabled] = useState(true);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticleValue((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setArticleValue((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleImageChange = (file: File | null) => {
    //  setArticleValue((prev) => ({ ...prev, image: file }));
    setFileImage(file);
  };

  const handlePreviewChange = (preview: string | null) => {
    setImagePreview(preview);

    console.log(imagePreview);
  };

  useEffect(() => {
    console.log(imagePreview);
  }, [imagePreview]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await postArticle(articleValue);
    console.log(articleValue);
    if (!result) {
      console.log("게시물 등록 중 오류 발생:");
    }
    router.push(`/boards/${result.id}`);
  };

  useEffect(() => {
    const { title, content, image } = articleValue;

    if (title && content) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [articleValue]);

  return (
    <Container>
      <Head>
        <title>게시물 작성</title>
      </Head>
      <ListContainer>
        <Title>게시물 쓰기</Title>
        <PrimaryButton disabled={disabled} onClick={handleSubmit}>
          등록
        </PrimaryButton>
      </ListContainer>
      <SubTitle>*제목</SubTitle>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="제목을 입력해주세요"
        onChange={handleTitleChange}
      />
      <SubTitle>*내용</SubTitle>
      <TextArea
        placeholder="내용을 입력해주세요"
        onChange={handleContentChange}
      />
      <SubTitle>*이미지</SubTitle>
      <FileInput
        value={fileImage}
        fileChange={handleImageChange}
        previewChange={handlePreviewChange}
      />
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 56px;
  padding: 16px 24px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 282px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  padding: 16px 24px;
`;
