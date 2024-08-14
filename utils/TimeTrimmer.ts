function DateTrimmer(date: string) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더합니다
  const day = String(newDate.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export default DateTrimmer;
