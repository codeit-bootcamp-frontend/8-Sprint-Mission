import { Article } from '@/lib/axios';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

type Props = {
  board: Article;
};

function RecentInfo({ board }: Props) {
  const createDate = dayjs(board.createdAt).format('YYYY. MM. DD');
  return (
    <div className="mt-4 flex items-center gap-[8px] font-md-14px-regular">
      <Image width={24} height={24} src="/initial_profile.png" alt="profile" />
      <span className="text-secondary-600">{board.writer.nickname}</span>
      <span className="grow text-secondary-400">{createDate}</span>
      <div className="flex items-center gap-[4px] text-secondary-500">
        <Image width={16} height={16} src="/heart_empty.png" alt="like" />
        <span>{board.likeCount > 9999 ? '9999+' : board.likeCount}</span>
      </div>
    </div>
  );
}

export default RecentInfo;
