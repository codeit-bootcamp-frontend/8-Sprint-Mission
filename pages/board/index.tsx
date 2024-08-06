import BestBoardItem from "@/components/bestboarditem";
import PrimaryButton from "@/components/primarybutton";
import styled from "styled-components";

export default function Board() {
  return (
    <Container>
      <Title>Best 게시글</Title>
      <BestBoardItem />
      <ListContainer>
        <Title>게시글</Title>
        <PrimaryButton>글쓰기</PrimaryButton>
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
