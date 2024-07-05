import './Button.css';




function Button({ children, onClick, select = '', width = '' }) {
  const classNames = `Button ${select} ${width}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
