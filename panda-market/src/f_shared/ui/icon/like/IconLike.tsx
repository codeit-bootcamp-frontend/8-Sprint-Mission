import { match } from 'ts-pattern';

import ActiveLikeIcon from '@/f_shared/assets/icons/ic_heart/active_heart.svg';
import InactiveLikeIcon from '@/f_shared/assets/icons/ic_heart/inactive_heart.svg';

interface IconLikeProps {
  isLike: boolean;
}

type IconLikeType = { type: 'unlike' } | { type: 'like' };

export const IconLike = ({ isLike }: IconLikeProps) => {
  const likeIconType: IconLikeType = { type: isLike ? 'like' : 'unlike' };
  const IconContent = match(likeIconType)
    .with({ type: 'like' }, () => <ActiveLikeIcon />)
    .with({ type: 'unlike' }, () => <InactiveLikeIcon />)
    .exhaustive();
  return <>{IconContent}</>;
};
