export function countTime(params) {
  const now = new Date();
  const createdAt = new Date(params.createdAt);
  const diff = (now - createdAt) / 60000;

  if (diff < 60) {
    return `${Math.floor(diff)}분 전`;
  } else if (diff < 1440) {
    // 1440분 = 24시간
    return `${Math.floor(diff / 60)}시간 전`;
  } else {
    return `${Math.floor(diff / 1440)}일 전`;
  }
}
