import useFetchDetailComments from "lib/hooks/useFetchDetailCommets";
import DetailCommentContent from "./DetailCommentContent";

interface DetailCommentContentListProps {
  productId: number;
}

const DetailCommentContentList = ({
  productId,
}: DetailCommentContentListProps) => {
  const { detailComments, nextCursor } = useFetchDetailComments({
    productId,
    limit: 3,
    cursor: null,
  });
  return (
    <ul>
      {detailComments.map((comment) => {
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
