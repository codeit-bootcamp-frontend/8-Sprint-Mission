export const formatDate = (date: string) => {
  const newdate = new Date(date);

  const year = newdate.getFullYear();
  const month = String(newdate.getMonth() + 1).padStart(2, "0");
  const day = String(newdate.getDate()).padStart(2, "0");

  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
};
