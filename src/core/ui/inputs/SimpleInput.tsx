import React, { forwardRef } from 'react';

interface SimpleInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  isLabelVisible: boolean;
}

const SimpleInput = forwardRef<HTMLInputElement, SimpleInputProps>(
  (
    {
      label = '',
      name = '',
      type = 'text',
      placeholder = '',
      isLabelVisible = true,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="flex w-full justify-center items-start flex-col">
        {isLabelVisible && (
          <label className="mb-4 text-base font-semibold text-gray-900">
            {label}
          </label>
        )}
        <input
          className="flex items-start p-6 w-full h-26 rounded-xl bg-gray-50 border-none placeholder-blue"
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default SimpleInput;
