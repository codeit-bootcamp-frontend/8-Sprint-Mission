export default function convertTime(getTime: Date) {
  const startTime = new Date(getTime);
  const endTime = new Date();

  const seconds = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
  if (seconds < 60) return "방금 전";

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 60) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 60) return `${Math.floor(days)}일 전`;

  return `${startTime.toLocaleDateString()}`;
}
