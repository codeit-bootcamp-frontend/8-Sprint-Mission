import { getProductComments } from "../../../lib/api";
import ModifyComment from "../../../assets/ic_kebab.svg";
import ProfileImg from "../../../assets/ic_profile.svg";
import "./CommentsList.css";
import CommentEmptyImg from "../../../assets/Img_inquiry_empty.svg";
import { useQuery } from "@tanstack/react-query";

interface CommentType {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  writer: {
    nickname: string;
  };
}

interface CommentProps {
  item: CommentType;
}

const Comment = ({ item }: CommentProps) => {
  const createdDate = new Date(item.createdAt);
  const updatedDate = new Date(item.updatedAt);

  const timeDifference = updatedDate.getTime() - createdDate.getTime();

  const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));

  return (
    <>
      <section className="comment-title">
        <p className="content">{item.content}</p>
        <img src={ModifyComment} alt="수정 아이콘" />
      </section>
      <section className="comment-profile">
        <img src={ProfileImg} alt="프로필 이미지" />
        <div className="comment-writer">
          <p className="nickname">{item.writer.nickname}</p>
          <p className="time">{hoursDifference}시간 전</p>
        </div>
      </section>
      <hr className="comment-line-divider" />
    </>
  );
};

const CommentEmpty = () => {
  return (
    <>
      <img
        className="empty-img"
        src={CommentEmptyImg}
        alt="아직 문의가 없어요 이미지"
      />
      <p className="empty-title">아직 문의가 없어요</p>
    </>
  );
};

interface ProductIdProps {
  productId: number;
}

function CommentsList({ productId }: ProductIdProps) {
  const params = { limit: 10 };
  const { data, isError } = useQuery<{
    list: CommentType[] | [];
  }>({
    queryKey: ["comments", { productId, params }],
    queryFn: () => getProductComments({ productId, params }),
  });
  console.log(data);
  const comments = data?.list || [];

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  if (!comments) {
    return <CommentEmpty />;
  }
  return (
    <div className="comment-list-container">
      {comments.map((item: CommentType) => (
        <Comment item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CommentsList;
