import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getArticleComment, getArticleId } from "../util/api";
import { BoardItemType } from ".";
import styled from "styled-components";
import Image from "next/image";
import PrimaryButton from "@/components/primarybutton";
import backIcon from "@/images/ic_back.svg";
import favorite from "@/images/favorite.png";

export default function Board() {
  const router = useRouter();
  const { id } = router.query;
  const [board, setBoard] = useState<BoardItemType | null>(null);
  const [comment, setComment] = useState();

  useEffect(() => {
    async function fetchArticle() {
      if (typeof id === "string") {
        const nextArtice = await getArticleId(id);
        setBoard(nextArtice);
      }
    }

    async function fetchComment() {
      if (typeof id === "string") {
        const nextComment = getArticleComment(id);
      }
    }
    if (!id) {
      return;
    }
    fetchArticle();
    fetchComment();
  }, [id]);

  return (
    <Container>
      <Title>{board?.title}</Title>

      <WriterNickName>{board?.writer.nickname}</WriterNickName>
      <LikeWrapper>
        <Image src={favorite} alt="like" />
        {board?.likeCount}
      </LikeWrapper>
      <Content>{board?.content}</Content>

      <CommentTitle>댓글달기</CommentTitle>
      <CommentTextarea placeholder="댓글을 입력해주세요."></CommentTextarea>
      <PrimaryButton>등록</PrimaryButton>

      <BackButton>
        목록으로 돌아가기
        <Image src={backIcon} alt="Back" />
      </BackButton>
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

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const WriterNickName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const LikeWrapper = styled.div`
  width: 87px;
  height: 40px;
  border: solid 1px #e5e7eb;
  border-radius: 35px;
  padding: 4px 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const CommentTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  height: 104px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  padding: 16px 24px;
`;

const BackButton = styled.button`
  background-color: #3692ff;
  color: #ffffff;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  width: 240px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 30px;
`;
