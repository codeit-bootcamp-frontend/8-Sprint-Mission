import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ko');
dayjs.extend(relativeTime);

function formatTimeFromNow(date: string) {
  return dayjs(date).fromNow();
}

export default formatTimeFromNow;
