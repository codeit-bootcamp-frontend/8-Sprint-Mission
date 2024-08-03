import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getApiProductsComments } from "./getApi";
import KebabIconImg from "../assets/images/icon/btn_icon/ic_kebab_menu.png";
import ReturnIconImg from "../assets/images/icon/btn_icon/ic_return.png";
import GrayPandaImg from "../assets/images/logo/gray_panda.png";
const PLACEHOLDERTEXT =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";
// @media screen and (max-width: 1199px) and (min-width: 768px) {}
// @media screen and (min-width: 1200px) {}

interface ButtonProps {
  $pass?: boolean;
}

interface ItemsListType<T> {
  list: T[];
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    align-items: center;
    margin-top: 32px;
  }
`;
const CommentsContainer = styled.section`
  padding: 0px 16px 16px 16px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    display: flex;
    padding: 24px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    width: 1200px;
  }
`;
const CommentTopBox = styled.div`
  width: 100%;
  border-top: 1px solid var(--gray200);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const MiniTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--gray900);
`;
const CommentInput = styled.textarea`
  width: 100%;
  height: 104px;
  background-color: var(--gray100);
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }

  &::placeholder {
    color: var(--gray400);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CommentSubmitButton = styled.button<ButtonProps>`
  display: inline-block;
  background-color: ${({ $pass }) => ($pass ? `var(--blue)` : "var(--gray400)")};
  color: #ffffff;
  border-radius: 8px;
  padding: 12px 23px;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray200);
`;
const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CommentText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
  line-height: 22.4px;
  margin: 24px 0px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 8px;
`;
const UserProfileImage = styled.img``;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const UserName = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--gray600);
`;
const TimeAgo = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray400);
`;
const BottomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 166px;
`;
const ReturnButton = styled.button`
  display: inline-flex;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background-color: var(--blue);
  border-radius: 40px;
  margin: 24px 0px;
  padding: 12px 38.5px;
  gap: 10px;
  align-items: center;
`;
const EmptyComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray400);
  line-height: 24px;
`;

function ProductComments() {
  const { selectItem } = useParams();
  const [items, setItems] = useState<ItemsListType<any>>({ list: [] });
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState("");
  const [pass, setPass] = useState(false);
  const navigate = useNavigate();

  const onClickReturn = () => {
    navigate("/items");
  };
  // 댓글 인풋의 입력값 파악
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValues(value);
  };

  // 테스트를 위해 추가한 동작
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(values);
  };

  // 댓글 작성한 시간 변환 함수
  const getTimegap = (posting: string) => {
    const dateString = posting;
    const date = new Date(dateString);
    const timestamp = date.getTime();
    const msgap = Date.now() - timestamp;
    const minutegap = Math.floor(msgap / 60000);
    const hourgap = Math.floor(msgap / 3600000);
    const UploadDate = posting.slice(0, 10);
    if (msgap < 0) {
      return <div>0분전</div>;
    }
    if (hourgap > 24) {
      return <div>{UploadDate}</div>;
    }
    if (minutegap > 60) {
      return <div>{hourgap}시간 전;</div>;
    } else {
      return <div>{minutegap}분 전</div>;
    }
  };

  // 상품 댓글 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getApiProductsComments(selectItem);
        setItems(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectItem]);

  // 입력값 감지 후 조건 충족 시 등록 버튼 활성화
  useEffect(() => {
    function validation() {
      const valueCheck = values.length > 0;
      return valueCheck;
    }
    const isValid = validation();
    setPass(isValid);
  }, [values]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <CommentsContainer>
        <CommentTopBox>
          <MiniTitle>문의하기</MiniTitle>
          <CommentInput placeholder={PLACEHOLDERTEXT} onChange={handleInputChange} />
          <ButtonWrapper>
            <CommentSubmitButton onClick={handleSubmit} $pass={pass}>
              등록
            </CommentSubmitButton>
          </ButtonWrapper>
          <CommentContainer>
            {items.list.length !== 0 ? (
              items.list.map((items) => (
                <CommentBox key={items.id}>
                  <Comment>
                    <CommentText>{items.content}</CommentText>
                    <img src={KebabIconImg} alt="케밥 메뉴 아이콘" width="24px" height="24px" />
                  </Comment>
                  <User>
                    <UserProfileImage src={items.writer.image} width="40px" height="40px" />
                    <UserInfo>
                      <UserName>{items.writer.nickname}</UserName>
                      <TimeAgo>{getTimegap(items.updatedAt)}</TimeAgo>
                    </UserInfo>
                  </User>
                </CommentBox>
              ))
            ) : (
              <EmptyComment>
                <img
                  src={GrayPandaImg}
                  alt="댓글이 없는 경우 이미지"
                  width="200px"
                  height="200px"
                />
                아직 문의가 없습니다.
              </EmptyComment>
            )}
          </CommentContainer>
        </CommentTopBox>
      </CommentsContainer>
      <BottomButton>
        <ReturnButton onClick={onClickReturn}>
          목록으로 돌아가기
          <img src={ReturnIconImg} alt="목록으로 돌아가기 버튼" width="24px" height="24px" />
        </ReturnButton>
      </BottomButton>
    </Main>
  );
}

export default ProductComments;
