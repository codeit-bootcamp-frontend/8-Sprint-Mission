import Image from 'components/@shared/Image';
import useProductCommentsQuery from 'queries/useProductCommentsQuery';
import { useParams } from 'react-router-dom';
import emptyImg from 'assets/images/productDetail/inquiry-empty.png';
import Comment from './Comment';

function InquiryList() {
  const { id } = useParams();
  const {
    data: { list: comments },
  } = useProductCommentsQuery({ productId: id });

  return (
    <>
      {comments.length > 0 ? (
        comments.map(comment => (
          <Comment key={comment.id} content={comment.content} createdAt={comment.createdAt} writer={comment.writer} />
        ))
      ) : (
        <Image src={emptyImg} alt={'코멘트가 없습니다'} />
      )}
    </>
  );
}

export default InquiryList;
