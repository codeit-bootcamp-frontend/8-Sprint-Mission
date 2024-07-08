import { Suspense } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentSection() {
  return (
    <div>
      <CommentForm />
      <Suspense fallback={<div>Loading...</div>}>
        <CommentList />
      </Suspense>
    </div>
  );
}

export default CommentSection;
