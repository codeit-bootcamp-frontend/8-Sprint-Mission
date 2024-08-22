interface FormButtonProps {
  isFormValid: boolean;
  className?: string;
  buttonText?: string;
}

function FormButton({
  isFormValid,
  className,
  buttonText = "등록",
}: FormButtonProps) {
  return (
    <button
      type="submit"
      className={`${className} text-white ${
        isFormValid ? "bg-brand" : "bg-gray-400"
      }`}
      disabled={!isFormValid}
    >
      {buttonText}
    </button>
  );
}

export default FormButton;
