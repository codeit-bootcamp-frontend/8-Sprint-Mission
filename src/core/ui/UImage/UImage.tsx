import { OptionalPick } from '@lib/utils/OptionalPick';
import styles from './UImage.module.scss';
import { BasicType } from '@type/BasicTypes';
import clsx from 'clsx';

type UImageProps = OptionalPick<
  BasicType,
  'src',
  'alt' | 'className' | 'isRound'
>;

export const UImage = ({ ...props }: UImageProps) => {
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
