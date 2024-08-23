import styles from './UIIcon.module.scss';

import { OptionalPick } from '@lib/utils/OptionalPick';
import { BasicType } from '@type/BasicTypes';
import Image from 'next/image';
import clsx from 'clsx';

type UIIconProps = OptionalPick<
  BasicType,
  'alt' | 'className' | 'wrapperClassName',
  'src'
>;

const UIIcon = ({ ...props }: UIIconProps) => {
  return (
    <>
      <div className={clsx(props.wrapperClassName, styles['icon'])}>
        <Image
          className={clsx(props.className, styles['icon__image'])}
          src={props.src}
          alt={props.alt || ''}
        />
      </div>
    </>
  );
};

export default UIIcon;
