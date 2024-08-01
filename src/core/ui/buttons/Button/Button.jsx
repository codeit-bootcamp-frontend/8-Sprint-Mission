import { useEffect, useRef } from 'react';

import './Button.css';
function Button({
  text = '버튼',
  onClick = () => {},
  isDisabled = false,
  iconFront,
  iconBack,
  customBorderRound,
}) {
  const ref = useRef();

  useEffect(() => {
    ref.current.disabled = isDisabled ? true : false;
  }, [isDisabled]);

  return (
    <>
      <button className="btn-default" onClick={onClick} ref={ref}>
        {iconFront}
        {text}
        {iconBack}
      </button>
    </>
  );
}
export default Button;
