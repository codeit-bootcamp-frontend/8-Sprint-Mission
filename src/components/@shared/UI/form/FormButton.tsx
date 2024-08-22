interface FormButtonProps {
  isFormValid: boolean;
  className?: string;
}

function FormButton({ isFormValid, className }: FormButtonProps) {
  return (
    <button
      type="submit"
      className={`${className} absolute top-24 right-0 max-xl:right-6 max-md:right-4 text-white w-[74px] h-[42px] rounded-lg ${
        isFormValid ? "bg-brand" : "bg-gray-400"
      }`}
      disabled={!isFormValid}
    >
      등록
    </button>
  );
}

export default FormButton;
