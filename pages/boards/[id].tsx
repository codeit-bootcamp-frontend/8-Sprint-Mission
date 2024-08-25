import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import {
  getArticleComment,
  getArticleId,
  postArticleComment,
} from "../util/api";
import { BoardItemType } from "@/interfaces/boardItem";
import styled from "styled-components";
import Image from "next/image";
import PrimaryButton from "@/components/primarybutton";
import backIcon from "@/images/ic_back.svg";
import favorite from "@/images/favorite.png";
import { CommentType } from "@/interfaces/comments";
import CommentItemList from "@/components/commentitemlist";
import user from "@/images/user.png";
import { FormatDate } from "../util/formatDate";
import Link from "next/link";

export default function Board() {
  const router = useRouter();
  const { id } = router.query;
  const [board, setBoard] = useState<BoardItemType | null>(null);
  const [comment, setComment] = useState<CommentType[]>([]);

  const [disabled, setDisabled] = useState(true);
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    async function fetchArticle() {
      if (typeof id === "string") {
        const nextArtice = await getArticleId(id);
        setBoard(nextArtice);
      }
    }

    async function fetchComment() {
      if (typeof id === "string") {
        const nextComment = await getArticleComment(id);
        setComment(nextComment);
      }
    }
    if (!id) {
      return;
    }
    fetchArticle();
    fetchComment();
  }, [id]);

  useEffect(() => {
    if (commentContent) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [commentContent]);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const handleCommentClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof id === "string") {
      await postArticleComment(id, commentContent);

      // 댓글 등록 후 상태 업데이트
      const updatedComments = await getArticleComment(id);
      setComment(updatedComments);

      // 댓글 입력 필드 초기화
      setCommentContent("");
    }
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>{board?.title}</Title>
        <WriterWrapper>
          <WriterContent>
            <Image src={user} alt="userImage" />
            <WriterNickName>{board?.writer.nickname}</WriterNickName>
            {board?.updatedAt && FormatDate(board.updatedAt)}
          </WriterContent>
          <LikeWrapper>
            <Image src={favorite} alt="like" />
            {board?.likeCount}
          </LikeWrapper>
        </WriterWrapper>
      </TitleWrapper>
      <Content>{board?.content}</Content>
      <CommentTitle>댓글달기</CommentTitle>
      <CommentTextarea
        placeholder="댓글을 입력해주세요."
        onChange={handleCommentChange}
        value={commentContent}
      ></CommentTextarea>
      <ButtonWrapper>
        <PrimaryButton disabled={disabled} onClick={handleCommentClick}>
          등록
        </PrimaryButton>
      </ButtonWrapper>
      <CommentItemList comments={comment} />
      <BackButtonWrapper>
        <StyledLink href={"/boards"}>
          <BackButton>
            목록으로 돌아가기
            <Image src={backIcon} alt="Back" />
          </BackButton>
        </StyledLink>
      </BackButtonWrapper>
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

const TitleWrapper = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

const WriterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid #e5e7eb;
  gap: 16px;
  padding-right: 32px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;
