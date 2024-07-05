interface DifferTimeProps {
  updatedAt: string;
}

const useDifferTime = ({ updatedAt }: DifferTimeProps) => {
  const now = new Date();
  const updated = new Date(updatedAt);
  let differTime = "";
  if (now.getFullYear() !== updated.getFullYear()) {
    differTime = `${now.getFullYear() - updated.getFullYear()}년 전`;
  } else if (now.getMonth() !== updated.getMonth()) {
    differTime = `${now.getMonth() - updated.getMonth()}개월 전`;
  } else if (now.getDay() !== updated.getDay()) {
    differTime = `${now.getDay() - updated.getDay()}일 전`;
  } else if (now.getHours() !== updated.getHours()) {
    differTime = `${now.getHours() - updated.getHours()}시간 전`;
  } else if (now.getMinutes() !== updated.getMinutes()) {
    differTime = `${now.getMinutes() - updated.getMinutes()}분 전`;
  } else {
    differTime = "방금 전";
  }
  return differTime;
};

export default useDifferTime;
