import "./buttons.css";

interface BtnCircleProps {
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  isActive?: boolean;
  children?: string | React.ReactNode;
}

const BtnCircle = ({
  onClick = () => {},
  disabled = false,
  isActive = false,
  children = "",
}: BtnCircleProps) => {
  const className = `btn-circle ${isActive ? "active" : ""}`;
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onClick(e);
  };
  return (
    <button disabled={disabled} className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default BtnCircle;
