import { Article } from '@/pages/api/client';

import dayjs from 'dayjs';
import Image from 'next/image';

type Props = {
  board: Article;
};

function BestInfo({ board }: Props) {
  const createDate = dayjs(board.createdAt).format('YYYY. MM. DD');
  return (
    <div className="font-md-14px-regular mt-[40px] flex items-center gap-[8px]">
      <span className="text-secondary-600">{board.writer.nickname}</span>
      <div className="flex grow items-center gap-[4px] text-secondary-500">
        <Image width={16} height={16} src="/heart_empty.png" alt="like" />
        <span>{board.likeCount > 9999 ? '9999+' : board.likeCount}</span>
      </div>
      <span className="text-secondary-400">{createDate}</span>
    </div>
  );
}

export default BestInfo;
