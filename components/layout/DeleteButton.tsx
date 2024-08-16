import { MouseEventHandler } from 'react';
import s from './DeleteButton.module.scss';
import XIcon from '@/public/svg/ic_x.svg';

type DeleteButton = {
  className: string;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function DeleteButton({ className, label, onClick }: DeleteButton) {
  return (
    <button className={className} aria-label={label} onClick={onClick}>
      <XIcon className={s.deleteIcon} />
    </button>
  );
}

export default DeleteButton;
