import { useEffect, useState } from 'react';

export type validType = 'default' | 'valid' | 'unvalid';

interface IValidForm {
  email: string;
  password: string;
  nickname?: string;
  verifyPassword?: string;
}

interface IIsValid {
  email: validType;
  password: validType;
  nickname?: validType;
  verifyPassword?: validType;
}

const useValidForm = (form: IValidForm): { validText: IValidForm; isValid: IIsValid } => {
  const [validText, setValidText] = useState<IValidForm>({
    email: '',
    nickname: '',
    password: '',
    verifyPassword: '',
  });
  const [isValid, setIsValid] = useState<IIsValid>({
    email: 'default',
    nickname: 'default',
    password: 'default',
    verifyPassword: 'default',
  });

  useEffect(() => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (form.email === '') {
      setValidText({ ...validText, email: '이메일을 입력해주세요' });
      setIsValid({ ...isValid, email: 'unvalid' });
    } else if (!regex.test(form.email)) {
      setValidText({ ...validText, email: '잘못된 이메일 형식입니다' });
      setIsValid({ ...isValid, email: 'unvalid' });
    } else {
      setIsValid({ ...isValid, email: 'valid' });
    }
  }, [form.email]);

  useEffect(() => {
    if (form.password === '') {
      setValidText({ ...validText, password: '비밀번호를 입력해주세요' });
      setIsValid({ ...isValid, password: 'unvalid' });
    } else if (form.password.length < 8) {
      setValidText({ ...validText, password: '비밀번호를 8자 이상 입력해주세요' });
      setIsValid({ ...isValid, password: 'unvalid' });
    } else {
      setIsValid({ ...isValid, password: 'valid' });
    }
  }, [form.password]);

  useEffect(() => {
    if (form.nickname === '') {
      setValidText({ ...validText, nickname: '닉네임을 입력해주세요' });
      setIsValid({ ...isValid, nickname: 'unvalid' });
    } else {
      setIsValid({ ...isValid, nickname: 'valid' });
    }
  }, [form.nickname]);

  useEffect(() => {
    if (form.password !== form.verifyPassword) {
      setValidText({ ...validText, verifyPassword: '비밀번호가 일치하지 않습니다' });
      setIsValid({ ...isValid, verifyPassword: 'unvalid' });
    } else {
      setIsValid({ ...isValid, verifyPassword: 'valid' });
    }
  }, [form.verifyPassword]);

  return { validText, isValid };
};

export default useValidForm;
