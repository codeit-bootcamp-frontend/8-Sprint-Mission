import FormatRelativeTime from "@/utils/FormatRelativeTime";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import Image from "next/image";

const comment = {
  writer: {
    image: "/image/product_img_default.png",
    nickname: "송경민",
    id: 12,
  },
  updatedAt: "2024-08-19T13:44:29.935Z",
  createdAt: "2024-08-19T13:44:29.935Z",
  content: "잔기스 있나요?",
  id: 1,
};

const StyledSection = styled.section`
  margin-top: 100px;
  border-bottom: 1px solid var(--gray-200);
  background-color: var(--gray-20);
`;
const StyledList = styled.ul`
  padding: 0;
`;
const StyledListItem = styled.li`
  list-style-type: none;
`;
const StyledContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
`;
const StyledBottomSection = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const StyledWriterImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StyledNickname = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;
const StyledTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-400);
  margin: 0;
`;

const StyledEmptyComment = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: var(--gray-400);
`;

interface Comment {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

function ArticleCommentList({ id }: any) {
  const [comments, setComments] = useState<Comment[]>([]);

  async function getArticleComments() {
    const query = {
      limit: 10,
    };
    const res = await axios.get(
      `/articles/${id}/comments?limit=${query.limit}`
    );
    const nextComments = res.data.list;
    setComments(nextComments);
  }

  useEffect(() => {
    getArticleComments();
  }, [id]);

  if (comments.length === 0) {
    return (
      <div className="empty-comment" style={{ textAlign: "center" }}>
        <Image
          unoptimized={true}
          width={140}
          height={140}
          src="/image/img_comment_empty.png"
          alt="No comments"
        />
        <StyledEmptyComment>
          아직 댓글이 없어요,
          <br /> 지금 댓글을 달아보세요!
        </StyledEmptyComment>
      </div>
    );
  }
  return (
    <div>
      <StyledSection>
        <StyledList>
          {comments.map((comment) => (
            <StyledListItem key={comment.id}>
              <StyledContent>{comment.content}</StyledContent>
              <StyledBottomSection>
                <StyledWriterImg
                  src={
                    comment.writer.image
                      ? comment.writer.image
                      : "/image/profile_img_none.png"
                  }
                  alt="프로필 이미지"
                />
                <StyledInfo>
                  <StyledNickname>{comment.writer.nickname}</StyledNickname>
                  <StyledTime>
                    <FormatRelativeTime time={comment.updatedAt} />
                  </StyledTime>
                </StyledInfo>
              </StyledBottomSection>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledSection>
    </div>
  );
}

export default ArticleCommentList;
