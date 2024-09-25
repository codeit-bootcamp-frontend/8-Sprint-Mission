import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const formatDate = (createdAt: Date) => {
  return dayjs(createdAt).format("YYYY. MM. DD");
};

export default formatDate;
