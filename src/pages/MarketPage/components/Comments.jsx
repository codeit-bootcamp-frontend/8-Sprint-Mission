import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../../API/CommentsAPI";

const timeSince = (date) => {
  const now = new Date();
  const updatedAt = new Date(date);
  const seconds = Math.floor((now - updatedAt) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval}년 전`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval}개월 전`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval}일 전`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval}시간 전`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval}분 전`;

  return `${Math.floor(seconds)}초 전`;
};

function CommentItem({ item }) {
  return (
    <div>
      <h1>{item.content}</h1>
      <img src={item.images} alt={item.name} />
      <p>{item.nickname}</p>
      <p>{timeSince(item.updatedAt)}</p>
    </div>
  );
}

function Comment() {
  const { id } = useParams(); // URL에서 id 값을 가져옴
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const data = await getComments(id);
        setItemList(data.list);
      } catch (error) {
        console.error("데이터를 가져오지 못했습니다", error);
      }
    };
    fetchAndProcessData();
  }, [id]);

  return (
    <ul>
      {itemList.map((item) => (
        <li key={item.id}>
          <CommentItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default Comment;
