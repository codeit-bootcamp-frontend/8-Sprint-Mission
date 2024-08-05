function FormatRelativeTime({ time }) {
  const dateObject = new Date(time);
  const targetDate = dateObject.getTime();

  const liveDateObject = new Date();
  const now = liveDateObject.getTime();
  const diff = now - targetDate;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 31) {
    return `${days}일 전`;
  } else {
    return `${months}개월 전`;
  }
}

export default FormatRelativeTime;
