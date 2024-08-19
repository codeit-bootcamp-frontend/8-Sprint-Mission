import s from './CommentItem.module.scss';
import KebabIcon from '@/public/svg/ic_kebab.svg';
import DefaultProfile from '@/public/svg/ic_profile.svg';
import Image from 'next/image';

type CommentItem = {
  item: Comments;
};

function CommentItem({ item }: CommentItem) {
  const authorInfo = item.writer;

  return (
    <div className={s.contain}>
      <button className={s.seeMore}>
        <KebabIcon />
      </button>

      <p>{item.content}</p>

      <div className={s.profile}>
        {authorInfo.image ? (
          <Image
            src={authorInfo.image}
            alt={`${authorInfo.nickname}님의 프로필 사진`}
            width={32}
            height={32}
            style={{ borderRadius: '50%' }}
          />
        ) : (
          <DefaultProfile aria-label={`${authorInfo.nickname}님의 프로필 사진`} />
        )}

        <p className={s.username}>{authorInfo.nickname}</p>
      </div>
    </div>
  );
}

export default CommentItem;
