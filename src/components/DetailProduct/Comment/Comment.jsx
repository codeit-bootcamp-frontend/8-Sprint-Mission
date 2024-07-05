import CommnetForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Comment({ comment }) {
  return (
    <>
      <CommnetForm />
      <CommentList commentList={comment} />
    </>
  );
}
