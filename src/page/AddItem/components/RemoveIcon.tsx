import { MouseEventHandler } from 'react';
import './RemoveIcon.css';
import { ReactComponent as XIcon } from '@/asset/svg/ic_x.svg';

interface RemoveIconProps {
  className?: string;
  label: string;
  onClick: MouseEventHandler<SVGSVGElement>;
}

function RemoveIcon({ className, label, onClick }: RemoveIconProps) {
  return <XIcon className={`deleteIcon ${className}`} aria-label={`${label} 삭제`} onClick={onClick} />;
}

export default RemoveIcon;
