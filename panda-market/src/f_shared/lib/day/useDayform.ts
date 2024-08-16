import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativetime from 'dayjs/plugin/relativeTime';

type DateFormat = 'format' | 'fromNow';

interface DayFormParams {
  dateStr: string;
  formType: DateFormat;
  formatStr?: string;
}

export const useDayForm = ({
  dateStr,
  formType,
  formatStr = '',
}: DayFormParams) => {
  dayjs.locale('ko');
  dayjs.extend(relativetime);
  let formedDate = '';
  switch (formType) {
    case 'format':
      formedDate = dayjs(dateStr).format(formatStr);
      break;
    case 'fromNow':
      formedDate = dayjs(dateStr).fromNow();
      break;

    default:
      formedDate = 'form type error';
      break;
  }
  return { formedDate };
};
