export const formatHowAgo = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const nowDate = new Date();
  const secondGap = Math.floor(
    (nowDate.getTime() - createdDate.getTime()) / 1000
  );
  if (secondGap < 60) {
    return `${secondGap}초 전`;
  }
  const minuteGap = Math.floor(secondGap / 60);
  if (minuteGap < 60) {
    return `${minuteGap}분 전`;
  }
  const hourGap = Math.floor(minuteGap / 60);
  if (hourGap < 24) {
    return `${hourGap}시간 전`;
  }
  const dayGap = Math.floor(hourGap / 24);
  return `${dayGap}일 전`;
};
