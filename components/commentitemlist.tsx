import styled from "styled-components";
import { CommentPropsType, CommentListPropsType } from "@/interfaces/comments";
import Image from "next/image";
import user from "@/images/user.png";

export default function CommentItemList({ comments }: CommentListPropsType) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
}

function CommentItem({ comment }: CommentPropsType) {
  return (
    <Wrapper>
      <Content>{comment.content}</Content>
      <WriterWrapper>
        {comment.writer.image ? (
          <Image
            src={comment.writer.image}
            alt="commentWriter"
            width={32}
            height={32}
          />
        ) : (
          <Image src={user} alt="user" />
        )}
        <WriterContent>
          <Writer>{comment.writer.nickname}</Writer>
          <Writer>{comment.createdAt}</Writer>
        </WriterContent>
      </WriterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fcfcfc;
`;

const WriterWrapper = styled.div`
  height: 40px;
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

const Content = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
const WriterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Writer = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;
