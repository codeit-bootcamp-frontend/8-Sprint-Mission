import { ArticleComment } from '@/types/Article';
import Image from 'next/image';
import { ReactElement } from 'react';
import VerticalDivider from '@/components/elements/VerticalDivider';
import formatTimeFromNow from '@/lib/utils/fotmatTimeFromNow';

type Props = {
  comments: ArticleComment[];
  imageWhenEmpty?: string;
  textWhenEmpty?: ReactElement;
};

function CommentList({ comments, imageWhenEmpty, textWhenEmpty }: Props) {
  if (comments.length === 0)
    return (
      <div className="flex flex-col items-center gap-4 text-secondary-400 font-lg-16px-regular">
        <Image
          width={140}
          height={140}
          src={imageWhenEmpty ?? '/empty_reply.png'}
          alt="empty reply"
        />
        <p className="flex flex-col items-center">
          {textWhenEmpty ?? (
            <>
              <span>아직 댓글이 없어요,</span>
              <span>지금 댓글을 달아보세요!</span>
            </>
          )}
        </p>
      </div>
    );

  return (
    <ul className="mt-6">
      {comments.map(comment => (
        <li key={comment.id}>
          <div className="bg-[#FCFCFC ] pb-2">
            <div className="flex items-center justify-between">
              <p>{comment.content}</p>
              <Image
                width={24}
                height={24}
                src="/icon/kebab.png"
                alt="options"
              />
            </div>
            <div className="mt-6 flex items-start gap-2">
              <Image
                width={32}
                height={32}
                src={comment.writer.image ?? '/initial_profile.png'}
                alt="profile"
              />
              <div className="flex flex-col gap-1">
                <span className="text-secondary-600 font-xs-12px-regular">
                  {comment.writer.nickname}
                </span>
                <span className="text-secondary-400 font-xs-12px-regular">
                  {formatTimeFromNow(comment.updatedAt)}
                </span>
              </div>
            </div>
          </div>
          <VerticalDivider className="mb-4" />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
