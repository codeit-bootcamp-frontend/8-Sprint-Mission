import { useState, ChangeEvent, FormEvent } from "react";

const useFormSubmit = () => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // updatedValues 변수로 현재 formValues 업데이트
    const updatedValues = {
      ...formValues,
      [name]: value,
    };

    setFormValues(updatedValues);
    setIsFormValid(validateForm(updatedValues));
  };

  const validateForm = (values: { [key: string]: string }) => {
    return Object.values(values).every((val) => val.trim().length > 0);
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    onSubmit: (values: { [key: string]: string }) => void
  ) => {
    e.preventDefault();
    const isValid = validateForm(formValues); // 현재 formValues로 유효성 검사

    if (isValid) {
      onSubmit(formValues);
      resetFormValues();
    }
  };

  // 폼 값 초기화
  const resetFormValues = () => {
    setFormValues({});
    setIsFormValid(false);
  };

  return {
    formValues,
    handleInputChange,
    handleSubmit,
    resetFormValues,
    isFormValid,
  };
};

export default useFormSubmit;
