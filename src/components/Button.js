import './Button.css';




function Button({ children, onClick, select = '' }) {
  const classNames = `Button ${select}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
