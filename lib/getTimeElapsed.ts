import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const getTimeElapsed = (updatedTime: Date) => {
  return dayjs(updatedTime).fromNow();
};

export default getTimeElapsed;
