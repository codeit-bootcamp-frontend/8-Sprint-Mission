import { useEffect, useRef } from 'react';
import './Button.css';
function Button({ text = '버튼', onClick = () => {}, isDisabled = false }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.disabled = isDisabled ? true : false;
  }, [isDisabled]);

  return (
    <>
      <button className="btn-default" onClick={onClick} ref={ref}>
        {text}
      </button>
    </>
  );
}
export default Button;
