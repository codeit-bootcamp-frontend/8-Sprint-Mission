import { OptionalPick } from '@/src/lib/utils/OptionalPick';
import styles from './UImage.module.scss';
import { BasicType } from '@/src/types/BasicTypes';

type UImageProps = OptionalPick<
  BasicType,
  'src',
  'alt' | 'className' | 'isRound'
>;

export const UImage = ({ ...props }: UImageProps) => {
  return (
    <>
      <img className={props.className} src={props.src} alt={props.src} />
    </>
  );
};
