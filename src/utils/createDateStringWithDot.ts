/**
 * date string을 받아서 yyyy. mm. dd 형태로 반환해주는 함수
 * @param dateString string 형태의 날짜를 받음 ex. "2024-07-29T05:45:03.250Z"
 */
export default function createDateStringWithDot(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = (date.getDay() + 1).toString().padStart(2, "0");

  const dateWithDot = `${year}. ${month}. ${day}`;

  return dateWithDot;
}
