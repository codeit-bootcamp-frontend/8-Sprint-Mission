import useFetchDetailComments from "lib/hooks/useFetchDetailCommets";
import DetailCommentContent from "./DetailCommentContent";
import ErrorBound from "core/errorBound/ErrorBound";

interface DetailCommentContentListProps {
  productId: number;
}

const DetailCommentContentList = ({
  productId,
}: DetailCommentContentListProps) => {
  const { isError, detailComments, nextCursor } = useFetchDetailComments({
    productId,
    limit: 3,
    cursor: null,
  });
  return (
    <ErrorBound isError={isError} instead={<div>Error</div>}>
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
    </ErrorBound>
  );
};

export default DetailCommentContentList;
