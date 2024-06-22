import { useState } from 'react';
import useDidMountEffect from './useDidMountEffect';

type inputName = 'email' | 'password' | 'nickname' | 'verifyPassword';
export type validType = 'default' | 'valid' | 'unvalid';
export interface IAuthForm {
  email: string;
  password: string;
  nickname?: string;
  verifyPassword?: string;
}

// 서로 목적이 다른 타입이지만 내용이 같기 때문에 아래와 같이 처리
type IValidMessages = IAuthForm;

export interface IValidationResult {
  email: validType;
  password: validType;
  nickname?: validType;
  verifyPassword?: validType;
}

const transformFormObject = <T>(initialValue: T, formObject: IAuthForm): Record<inputName, T> => {
  const keys = Object.keys(formObject) as inputName[];
  const newObject: Record<inputName, T> = keys.reduce(
    (accObj, key) => {
      accObj[key] = initialValue;
      return accObj;
    },
    {} as Record<inputName, T>,
  );
  return newObject;
};

const useValidForm = (
  form: IAuthForm,
): {
  validMessages: IValidMessages;
  validationResult: IValidationResult;
  isFormValid: boolean;
  validateForm: () => void;
} => {
  const [validMessages, setValidMessages] = useState<IValidMessages>(() => transformFormObject<string>('', form));
  const [validationResult, setValidationResult] = useState<IValidationResult>(() =>
    transformFormObject<validType>('default', form),
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isAllInputValid = Object.values(validationResult).every(v => v === 'valid');
    if (isAllInputValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  console.log(validationResult);

  useDidMountEffect(() => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (form.email === '') {
      setValidMessages(prevState => ({ ...prevState, email: '이메일을 입력해주세요' }));
      setValidationResult(prevState => ({ ...prevState, email: 'unvalid' }));
    } else if (!regex.test(form.email)) {
      setValidMessages(prevState => ({ ...prevState, email: '잘못된 이메일 형식입니다' }));
      setValidationResult(prevState => ({ ...prevState, email: 'unvalid' }));
    } else {
      setValidationResult(prevState => ({ ...prevState, email: 'valid' }));
    }
  }, [form.email]);

  useDidMountEffect(() => {
    // 로그인 페이지에서는 nickname input이 없기 때문
    if (!Object.keys(form).includes('nickname')) return;

    if (form.nickname === '') {
      setValidMessages(prevState => ({ ...prevState, nickname: '닉네임을 입력해주세요' }));
      setValidationResult(prevState => ({ ...prevState, nickname: 'unvalid' }));
    } else {
      setValidationResult(prevState => ({ ...prevState, nickname: 'valid' }));
    }
  }, [form.nickname]);

  useDidMountEffect(() => {
    if (form.password === '') {
      setValidMessages(prevState => ({ ...prevState, password: '비밀번호를 입력해주세요' }));
      setValidationResult(prevState => ({ ...prevState, password: 'unvalid' }));
    } else if (form.password.length < 8) {
      setValidMessages(prevState => ({ ...prevState, password: '비밀번호를 8자 이상 입력해주세요' }));
      setValidationResult(prevState => ({ ...prevState, password: 'unvalid' }));
    } else {
      setValidationResult(prevState => ({ ...prevState, password: 'valid' }));
    }

    // 로그인 페이지에서는 verifyPassword input이 없기 때문
    if (!Object.keys(form).includes('verifyPassword')) return;

    if (form.password !== form.verifyPassword) {
      setValidMessages(prevState => ({ ...prevState, verifyPassword: '비밀번호가 일치하지 않습니다' }));
      setValidationResult(prevState => ({ ...prevState, verifyPassword: 'unvalid' }));
    } else if (form.password === '' || form.verifyPassword === '') {
      setValidationResult(prevState => ({ ...prevState, verifyPassword: 'default' }));
    } else {
      setValidationResult(prevState => ({ ...prevState, verifyPassword: 'valid' }));
    }
  }, [form.verifyPassword, form.password]);

  return { validMessages, validationResult, isFormValid, validateForm };
};

export default useValidForm;
