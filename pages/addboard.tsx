import PrimaryButton from "@/components/primarybutton";
import styled from "styled-components";
import Head from "next/head";

export default function AddBoard() {
  return (
    <Container>
      <Head>
        <title>게시물 작성</title>
      </Head>
      <ListContainer>
        <Title>게시물 쓰기</Title>
        <PrimaryButton>등록</PrimaryButton>
      </ListContainer>
      <SubTitle>*제목</SubTitle>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="제목을 입력해주세요"
      />
      <SubTitle>*내용</SubTitle>
      <TextArea placeholder="내용을 입력해주세요" />
      <SubTitle>*이미지</SubTitle>
    </Container>
  );
}

const Container = styled.div`
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
