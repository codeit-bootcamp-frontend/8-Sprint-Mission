interface FormButtonProps {
  isButtonDisabled: boolean;
  text: string;
}

function FormButton({ isButtonDisabled, text }: FormButtonProps) {
  return (
    <button
      className="w-full rounded-full bg-brand-blue py-3 text-xl font-semibold text-gray-100 disabled:bg-gray-400"
      type="submit"
      value={text}
      disabled={isButtonDisabled}
    >
      {text}
    </button>
  );
}

export default FormButton;
