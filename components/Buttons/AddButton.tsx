interface AddButtonProps {
  buttonText: string;
}

function AddButton({ buttonText }: AddButtonProps) {
  return (
    <button className="rounded-lg bg-gray-400 px-6 py-2 text-gray-100">
      {buttonText}
    </button>
  );
}

export default AddButton;
