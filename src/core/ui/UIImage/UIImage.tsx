import styles from './UIImage.module.scss';

import { OptionalPick } from '@lib/utils/OptionalPick';
import { BasicType } from '@type/BasicTypes';
import clsx from 'clsx';
import Image from 'next/image';

type UIImageProps = OptionalPick<
  BasicType,
  'src',
  'alt' | 'className' | 'isRound'
>;

const UIImage = ({ ...props }: UIImageProps) => {
  return (
    <>
      <Image
        className={clsx(
          { [styles['image--round']]: props.isRound },
          props.className
        )}
        src={props.src || ''}
        alt={props.alt}
        width={50}
        height={50}
      />
    </>
  );
};

export default UIImage;
