interface SimpleInputProps {
  lable: string;
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder: string;
  isLabelVisible: boolean;
}

export default function SimpleInput({
  lable = '',
  name = '',
  type = 'text',
  placeholder = '',
  isLabelVisible = true,
}: SimpleInputProps) {
  return (
    <>
      <div className="flex w-full justify-center items-start flex-col">
        {isLabelVisible && (
          <label className="mb-4 text-base font-semibold text-gray-900">
            {lable}
          </label>
        )}
        <input
          className="flex items-start p-6 w-full h-26 rounded-xl bg-gray-50 border-none placeholder-blue"
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
