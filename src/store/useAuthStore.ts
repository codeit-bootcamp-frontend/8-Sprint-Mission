import { OptionalPick } from '@lib/utils/OptionalPick';
import { BasicType } from '@type/BasicTypes';
import { create } from 'zustand';
import { combine, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type User =
  | (OptionalPick<
      BasicType,
      'nickname' | 'createdAt' | 'updatedAt' | 'email',
      'id'
    > & { image?: string | null })
  | null;

export type AuthState = {
  user: User;
} & NullablePick<BasicType, 'accessToken' | 'refreshToken'>;

export type AuthActions = {
  setUser: (user: User) => void;
  setAccessToken: (accessToken: Pick<BasicType, 'accessToken'>) => void;
  setRefreshToken: (refreshToken: Pick<BasicType, 'refreshToken'>) => void;
  clearAuth: () => void;
  clearTokens: () => void;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

export const useAuthStore = create(
  persist(
    subscribeWithSelector(
      immer(
        combine(initialState, (set) => ({
          setUser: (user: User | null) => {
            set((state) => {
              state.user = user;
            });
          },
          setAccessToken: (accessToken: BasicType['accessToken']) => {
            set((state) => {
              state.accessToken = accessToken;
            });
          },
          setRefreshToken: (refreshToken: BasicType['refreshToken']) => {
            set((state) => {
              state.refreshToken = refreshToken;
            });
          },
          clearAuth: () => {
            set((state) => {
              state.user = null;
              state.accessToken = null;
              state.refreshToken = null;
            });
          },
          clearTokens: () => {
            set((state) => {
              state.accessToken = null;
              state.refreshToken = null;
            });
          },
        }))
      )
    ),
    {
      name: 'authStore',
      getStorage: () => localStorage,
    }
  )
);
