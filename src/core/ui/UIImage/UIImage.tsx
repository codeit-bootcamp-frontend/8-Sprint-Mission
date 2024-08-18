import styles from './UIImage.module.scss';

import { OptionalPick } from '@lib/utils/OptionalPick';
import { BasicType } from '@type/BasicTypes';
import clsx from 'clsx';

type UIImageProps = OptionalPick<
  BasicType,
  'src',
  'alt' | 'className' | 'isRound'
>;

const UIImage = ({ ...props }: UIImageProps) => {
  return (
    <>
      <img
        className={clsx(
          { [styles['image--round']]: props.isRound },
          props.className
        )}
        src={props.src}
        alt={props.src}
      />
    </>
  );
};

export default UIImage;
