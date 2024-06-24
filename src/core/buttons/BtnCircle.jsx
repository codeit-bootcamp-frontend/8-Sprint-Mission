import "./buttons.css";

const BtnCircle = ({ onClick, disabled, isActive, children }) => {
  const className = `btn-circle ${isActive ? "active" : ""}`;
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnCircle;
