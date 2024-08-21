import styles from './UIInputLabel.module.scss';

import clsx from 'clsx';
import { BasicType } from '@type/BasicTypes';
import { OptionalPick } from '@lib/utils/OptionalPick';

type UIInputLabelProps = OptionalPick<BasicType, 'className', 'text'>;

const UIInputLabel = ({ ...props }: UIInputLabelProps) => {
  return (
    <>
      <label className={clsx(styles['label'], props.className)}>
        {props.text}
      </label>
    </>
  );
};

export default UIInputLabel;
