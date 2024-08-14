import BestPostList from "@/components/BestPostList";
import Nav from "@/components/Nav";
import PostList from "@/components/PostList";
import styled from "styled-components";

const StyledContainer = styled.main`
  width: 1200px;
  margin: auto;
`;

export default function PostListPage() {
  return (
    <>
      <Nav />
      <StyledContainer>
        <BestPostList />
        <PostList />
      </StyledContainer>
    </>
  );
}
