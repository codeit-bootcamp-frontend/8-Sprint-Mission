import CommnetForm from './CommentForm';
import CommentList from './CommentList';

export default function Comment({ comment }) {
  return (
    <article style={{ marginBottom: '10rem' }}>
      <CommnetForm />
      <CommentList commentList={comment} />
    </article>
  );
}
