import "./buttons.css";

const BtnSmall = ({ onClick, children, disabled }) => {
  return (
    <button className="btn-small" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default BtnSmall;
