import CancelLogo from "../assets/ic_X@3x.png";

function Cancel({ value, onCancel }) {
  const handleCancel = () => {
    if (!value) onCancel();
    onCancel(value);
  };

  return (
    <img
      onClick={handleCancel}
      width={22}
      height={22}
      src={CancelLogo}
      alt="cancel"
    />
  );
}

export default Cancel;
