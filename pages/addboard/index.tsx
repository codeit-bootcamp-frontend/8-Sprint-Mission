import { FormEvent, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  SectionTitle,
  SpaceBetween,
} from "@/styles/CommonStyles";
import InputItem from "@/components/ui/InputItem";
import ImageUpload from "@/components/ui/ImageUpload";

const TitleSection = styled(SpaceBetween)`
  margin-bottom: 24px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 24px;
  }
`;

const AddArticlePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // form 제출 버튼 활성화 조건: 이미지 제외 모든 input에 값이 입력되어야 함
  const isSubmitDisabled = !title.trim() || !content.trim();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: 제출 시 로직 추가
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TitleSection>
          <SectionTitle>게시글 쓰기</SectionTitle>
          <Button type="submit" disabled={isSubmitDisabled}>
            등록
          </Button>
        </TitleSection>

        <InputSection>
          <InputItem
            id="title"
            label="*제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해 주세요"
          />

          <InputItem
            id="content"
            label="*내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해 주세요"
            isTextArea
          />

          <ImageUpload title="이미지" />
        </InputSection>
      </form>
    </Container>
  );
};

export default AddArticlePage;
