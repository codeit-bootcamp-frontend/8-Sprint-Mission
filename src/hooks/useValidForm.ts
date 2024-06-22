import { useEffect, useState } from 'react';

export type validType = 'default' | 'valid' | 'unvalid';
export interface IValidForm {
  email: string;
  password: string;
  nickname?: string;
  verifyPassword?: string;
}

// 서로 목적이 다른 타입이지만 내용이 같기 때문에 아래와 같이 처리
type IValidMessages = IValidForm;

export interface IValidationResult {
  email: validType;
  password: validType;
  nickname?: validType;
  verifyPassword?: validType;
}

const useValidForm = (
  form: IValidForm,
): {
  validMessages: IValidMessages;
  validationResult: IValidationResult;
} => {
  const [validMessages, setValidMessages] = useState<IValidMessages>({
    email: '',
    nickname: '',
    password: '',
    verifyPassword: '',
  });
  const [validationResult, setValidationResult] = useState<IValidationResult>({
    email: 'default',
    nickname: 'default',
    password: 'default',
    verifyPassword: 'default',
  });

  useEffect(() => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (form.email === '') {
      setValidMessages({ ...validMessages, email: '이메일을 입력해주세요' });
      setValidationResult({ ...validationResult, email: 'unvalid' });
    } else if (!regex.test(form.email)) {
      setValidMessages({ ...validMessages, email: '잘못된 이메일 형식입니다' });
      setValidationResult({ ...validationResult, email: 'unvalid' });
    } else {
      setValidationResult({ ...validationResult, email: 'valid' });
    }
  }, [form.email]);

  useEffect(() => {
    if (form.password === '') {
      setValidMessages({ ...validMessages, password: '비밀번호를 입력해주세요' });
      setValidationResult({ ...validationResult, password: 'unvalid' });
    } else if (form.password.length < 8) {
      setValidMessages({ ...validMessages, password: '비밀번호를 8자 이상 입력해주세요' });
      setValidationResult({ ...validationResult, password: 'unvalid' });
    } else {
      setValidationResult({ ...validationResult, password: 'valid' });
    }
  }, [form.password]);

  useEffect(() => {
    if (form.nickname === '') {
      setValidMessages({ ...validMessages, nickname: '닉네임을 입력해주세요' });
      setValidationResult({ ...validationResult, nickname: 'unvalid' });
    } else {
      setValidationResult({ ...validationResult, nickname: 'valid' });
    }
  }, [form.nickname]);

  useEffect(() => {
    if (form.password !== form.verifyPassword) {
      setValidMessages({ ...validMessages, verifyPassword: '비밀번호가 일치하지 않습니다' });
      setValidationResult({ ...validationResult, verifyPassword: 'unvalid' });
    } else {
      setValidationResult({ ...validationResult, verifyPassword: 'valid' });
    }
  }, [form.verifyPassword]);

  return { validMessages, validationResult };
};

export default useValidForm;
