import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../../api/itemApi";
import TimeCheck from "./TimeCheck";
import BackIcon from "../../../assets/images/icons/ic_back.png";
import EmptyImg from "../../../assets/images/other/Img_inquiry_empty.png";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 240px;
`;

const HeadTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: #111827;
  padding-bottom: 16px;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 104px;
  border-radius: 12px;
  padding: 16px 24px;
  font-weight: 400;
  font-size: 16px;
  resize: none;
  display: flex;
  align-items: flex-start;
  background-color: #f3f4f6;
  border: none;

  &::placeholder {
    color: #9ca3af;
  }
`;

const Button = styled.button`
  width: 74px;
  height: 42px;
  border-radius: 8px;
  padding: 12px 23px;
  background-color: ${({ hasContent }) => (hasContent ? "#3692ff" : "#9ca3af")};
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  margin: 16px 0px 0px auto;
`;

const EmptyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9ca3af;
  margin-bottom: 24px;
`;

const EmptyCommentImg = styled.img`
  width: 200px;
  height: 200px;
`;

const CommentContainer = styled.div`
  height: 110px;
  border-bottom: 1px solid #e5e7eb;
  margin: 24px 0;
`;

const CommentContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #1f2937;
  margin-bottom: 24px;
  line-height: 22px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NicknameContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

const Nickname = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #4b5563;
`;

const Time = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #9ca3af;
`;

const ItemBackLink = styled.div`
  width: 240px;
  border-radius: 40px;
  padding: 12px 0px;
  background-color: #3692ff;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const BackIconImage = styled.img`
  margin-left: 10px;
  width: 24px;
  height: 24px;
`;

function CommentsSection() {
  const { productid } = useParams();
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const params = { productid, comments: true, limit: 3 };
        const response = await getProducts(params);

        setComments(response.list);
      } catch (error) {
        console.error("댓글을 불러오지 못했습니다.", error);
      }
    };

    fetchComments();
  }, [productid]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  if (!comments) {
    return <Container>댓글을 불러오는 중입니다.</Container>;
  }

  return (
    <Container>
      <HeadTitle>문의하기</HeadTitle>
      <form>
        <TextInput
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          type="text"
          onChange={handleInputChange}
        />
        <Button type="submit" hasContent={inputValue.length > 0}>
          등록
        </Button>
      </form>
      {comments.length === 0 ? (
        <EmptyText>
          <EmptyCommentImg src={EmptyImg} alt="문의없음 이미지" />
          아직 문의가 없습니다.
        </EmptyText>
      ) : (
        comments.map((comment) => (
          <CommentContainer key={comment.id}>
            <CommentContent>{comment.content}</CommentContent>
            <ProfileContainer>
              <ProfileImg
                src={comment.writer.image}
                alt="댓글 작성자 프로필사진"
              />
              <NicknameContainer>
                <Nickname>{comment.writer.nickname}</Nickname>
                <Time>{TimeCheck(comment.createdAt)}</Time>
              </NicknameContainer>
            </ProfileContainer>
          </CommentContainer>
        ))
      )}
      <Link to={`/items`}>
        <ItemBackLink>
          목록으로 돌아가기
          <BackIconImage src={BackIcon} alt="뒤로가기 아이콘" />
        </ItemBackLink>
      </Link>
    </Container>
  );
}

export default CommentsSection;
