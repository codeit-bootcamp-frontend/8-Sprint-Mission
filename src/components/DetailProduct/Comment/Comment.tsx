import CommnetForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Comment({ commentList }: CommentProps) {
  return (
    <article style={{ marginBottom: "10rem" }}>
      <CommnetForm />
      <CommentList commentList={commentList} />
    </article>
  );
}
