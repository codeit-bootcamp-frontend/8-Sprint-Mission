interface AddButtonProps {
  buttonText: string;
  isFormComplete: boolean;
}

function AddButton({ buttonText, isFormComplete = false }: AddButtonProps) {
  let buttonClassNames = `rounded-lg px-6 py-2 text-gray-100 ${isFormComplete ? "bg-brand-blue" : "bg-gray-400"}`;

  return (
    <button className={buttonClassNames} disabled={!isFormComplete}>
      {buttonText}
    </button>
  );
}

export default AddButton;
