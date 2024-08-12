type DateFormParams = {
  dateTime: string;
};

export const useDateForm = ({
  dateTime,
}: DateFormParams): { formDate: string } => {
  const date = new Date(dateTime);

  const formDate = `${date.getFullYear()}. ${date.getMonth()}. ${date.getDay()}`;
  return { formDate };
};
