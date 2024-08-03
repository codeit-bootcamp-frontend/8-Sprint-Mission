import { useEffect, useState } from "react";
import { getComment } from "../../api";
import emptyComment from "../../img/Img_inquiry_empty.png";
import "./CommentList.css";

interface CommentItem {
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
  writer: Writer;
}

interface Writer {
  image: string;
  nickname: string;
  id: number;
}

interface CommentItemProp {
  item: CommentItem;
}

interface CommentListProps {
  productSlug: string;
}

function CommentListItem({ item }: CommentItemProp) {
  return (
    <div className="commentWrapper">
      <span className="commentContent"> {item.content}</span>

      <div className="writerWraaper">
        <img src={item.writer.image} className="commentImg"></img>
        <div className="writer">
          <span className="writerNickname">{item.writer.nickname}</span>
          <span className="updatedAt">{item.updatedAt}</span>
        </div>
      </div>
    </div>
  );
}

function CommentList({ productSlug }: CommentListProps) {
  const [items, setItems] = useState<CommentItem[]>([]);

  const handleLoad = async () => {
    const { list } = await getComment(productSlug);
    setItems(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => {
          return <CommentListItem key={item.id} item={item} />;
        })
      ) : (
        <div className="emptyComment">
          <img src={emptyComment}></img>
          <span className="emptyCommentText">아직 문의가 없습니다.</span>
        </div>
      )}
    </div>
  );
}

export default CommentList;
