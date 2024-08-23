import { StorageNameOfUserInfo } from 'core/config/context/AuthContext';
import localStorageTools from 'lib/localStorage/localStorageTools';
import {
  ErrorMessage,
  RefreshTokenDto,
  RefreshTokenResponse,
  UserInfo,
} from './types';

const BASE_URL = process.env.REACT_APP_BASE_URL || '';
const { setInfo, getInfo } = localStorageTools();
class APIHandler {
  private baseUrl?: string;
  private user?: UserInfo['user'];
  private accessToken?: UserInfo['accessToken'];
  private refreshToken?: UserInfo['refreshToken'];

  constructor(baseUrl: string) {
    const userInfo = getInfo('userInfo');

    this.baseUrl = baseUrl;
    if (userInfo) {
      this.user = userInfo['user'];
      this.accessToken = userInfo['accessToken'];
      this.refreshToken = userInfo['refreshToken'];
    }
  }

  private dataHandler = async <T = any, ErrorType = ErrorMessage>(
    response: Response,
    options?: RequestInit,
  ) => {
    let data: T | ErrorType | undefined;
    switch (response.status) {
      case 200:
        data = response.json() as T;
        break;
      case 201:
        data = response.json() as T;
        break;
      case 204:
        break;
      case 400:
        data = (await response.json()) as ErrorType;
        break;
      case 401:
        if (this.refreshToken) {
          try {
            const refreshedData = await this.post<
              RefreshTokenDto,
              RefreshTokenResponse
            >('refresh-token', { refreshToken: this.refreshToken });
            if (!refreshedData) return;
            if ('accessToken' in refreshedData) {
              const newAccessToken = refreshedData?.accessToken;

              const _options: RequestInit = {
                ...options,
                headers: {
                  ...options?.headers,
                  Authentication: `Bearer ${newAccessToken}`,
                },
              };
              const newResponse = await fetch(response.url, _options);

              if (newResponse.ok) {
                const newUserInfo = {
                  user: this.user,
                  accessToken: this.accessToken,
                  refreshToken: this.refreshToken,
                };
                setInfo(StorageNameOfUserInfo, newUserInfo);
                return newResponse.json() as T;
              } else {
                return newResponse.json() as ErrorType;
              }
            }
          } catch (error) {
            Promise.reject(error);
          }
        }
        break;
      case 403:
        throw new Error('forbidden');

      case 404:
        throw new Error('잘못된 url입니다.');

      default:
        throw new Error('알 수 없는 에러입니다.');
    }
    return data;
  };

  private apiHandler = async <T = any, ErrorType = ErrorMessage>(
    path: string,
    options?: RequestInit,
  ) => {
    const headers = new Headers({
      'Content-type': 'application/json',
      ...options?.headers,
    });
    if (this.accessToken) {
      headers.set('Authentication', `Bearer ${this.accessToken}`);
    }
    const _options = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(`${this.baseUrl}/${path}`, _options);
      return this.dataHandler<T, ErrorType>(response);
    } catch (error) {
      Promise.reject(error);
    }
  };

  public async get<T = any>(
    path: string,
    queryData?: Record<string, string>,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    let query = path;
    if (queryData) {
      query +=
        '?' +
        Object.entries(queryData)
          .map(([key, val]) => `${key}=${val}`)
          .join('&');
    }

    return await this.apiHandler<T>(query, {
      method: 'GET',
      ...options,
    });
  }
  public async post<
    BodyType = any,
    ResponseType = ReturnType<typeof fetch>,
    ErrorType = ErrorMessage,
  >(
    path: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType, ErrorType>(path, {
      method: 'POST',
      ...options,
      body: JSON.stringify(body),
    });
  }

  public async patch<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    path: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(path, {
      method: 'POST',
      ...options,
      body: JSON.stringify(body),
    });
  }
  public async put<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    path: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(path, {
      method: 'POST',
      ...options,
      body: JSON.stringify(body),
    });
  }
  public async delete<T = any>(
    path: string,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<T>(path, {
      method: 'POST',
      ...options,
    });
  }
}

const http = new APIHandler(BASE_URL);

export default http;
