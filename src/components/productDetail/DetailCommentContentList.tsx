import DetailCommentContent from "./DetailCommentContent";

interface DetailCommentContentListProps {
  productId: number;
}

const comments = [
  {
    id: 5,
    content: "상세 잔기스 사진 있을까요?",
    createdAt: "2024-04-23T13:05:07.675Z",
    updatedAt: "2024-04-23T13:05:07.675Z",
    writer: {
      id: 20,
      nickname: "이용섭",
      image:
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/20/1713876617092/123123.png",
    },
  },
  {
    id: 4,
    content: "색상이 어떻게 되는지 궁금해요!",
    createdAt: "2024-04-23T13:04:49.873Z",
    updatedAt: "2024-07-05T10:17:49.873Z",
    writer: {
      id: 20,
      nickname: "이용섭",
      image:
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/20/1713876617092/123123.png",
    },
  },
];
const DetailCommentContentList = ({
  productId,
}: DetailCommentContentListProps) => {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <DetailCommentContent
              content={comment.content}
              updatedAt={comment.updatedAt}
              writer={comment.writer}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DetailCommentContentList;
