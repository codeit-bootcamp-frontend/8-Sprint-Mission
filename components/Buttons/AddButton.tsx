interface AddButtonProps {
  buttonText: string;
  isFormComplete?: boolean;
  onClick: () => void;
}

function AddButton({
  buttonText,
  isFormComplete = false,
  onClick,
}: AddButtonProps) {
  let buttonClassNames = `rounded-lg px-6 py-2 text-gray-100 ${isFormComplete ? "bg-brand-blue" : "bg-gray-400"}`;

  return (
    <button
      className={buttonClassNames}
      disabled={!isFormComplete}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default AddButton;
