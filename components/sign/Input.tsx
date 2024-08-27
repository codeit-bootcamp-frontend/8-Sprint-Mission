import cn from '@/lib/utils';
import { ErrorMessage } from '@hookform/error-message';
import Image from 'next/image';
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  useForm,
} from 'react-hook-form';

type Props<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  type: string;
  onVisible?: (name: 'password' | 'passwordCheck') => void;
  onTrigger?: () => void;
  placeholder: string;
  register: ReturnType<typeof useForm<T>>['register'];
  validation: RegisterOptions<T, Path<T>>;
  errors: FieldErrors;
};

function Input<T extends FieldValues>({
  id,
  label,
  type,
  onVisible,
  placeholder,
  register,
  onTrigger,
  validation,
  errors,
}: Props<T>) {
  const { ref, ...rest } = register(id, validation);
  const name = id as string;
  const visibleIcon =
    type !== 'password' ? '/icon/visibility.png' : '/icon/invisibility.png';

  const handleVisible = () => {
    if (onVisible) {
      onVisible(name as 'password' | 'passwordCheck');
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onTrigger) onTrigger();
    if (rest.onBlur) rest.onBlur(event);
  };

  return (
    <div className="relative flex flex-col gap-2">
      <label className="font-lg-14px-bold" htmlFor={id}>
        {label}
      </label>
      <input
        className={cn(
          'rounded-xl bg-secondary-100 px-6 py-[15px] placeholder:font-lg-16px-regular hover:border-primary-100',
          errors[name] ? 'border-[1px] border-[#F74747]' : ''
        )}
        type={type}
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        onBlur={handleBlur}
      />
      {onVisible && (
        <button
          type="button"
          className="absolute right-4 top-12"
          onClick={handleVisible}
        >
          <Image
            width={24}
            height={24}
            src={visibleIcon}
            alt="visibility btn"
          />
        </button>
      )}
      {errors && (
        <ErrorMessage
          className="pl-6 text-error font-lg-14px-semibold"
          name={name}
          errors={errors}
          as="span"
        />
      )}
    </div>
  );
}

export default Input;
