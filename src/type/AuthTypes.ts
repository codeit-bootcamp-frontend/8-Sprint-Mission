import { AuthState } from '@store/useAuthStore';
import { BasicType } from './BasicTypes';

export type AddUserRequest = Pick<
  BasicType,
  'email' | 'nickname' | 'password' | 'passwordConfirmation'
>;

export type SignInUserRequest = Pick<BasicType, 'email' | 'password'>;

export type AddUserResponse = AuthState;

export type SignInUserResponse = AuthState;
