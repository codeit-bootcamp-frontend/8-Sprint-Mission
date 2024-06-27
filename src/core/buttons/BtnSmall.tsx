import "./buttons.css";

interface BtnSmallProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: string | React.ReactNode;
  disabled: boolean;
}

const BtnSmall = ({ onClick, children, disabled }: BtnSmallProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onClick(e);
  };
  return (
    <button className="btn-small" onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default BtnSmall;
