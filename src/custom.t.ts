import React from "react";

export type StateType =
  | boolean
  | string
  | number
  | Record<any, any>
  | Array<any>
  | Function
  | null
  | undefined;

export type SetStateType<T> = React.SetStateAction<T>;

export type DispatchType<T> = React.Dispatch<SetStateType<T>>;

export type DispatchTypeObject<T> = {
  [key: string]: DispatchType<T>;
};

export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export type RenderDataType = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  src?: string;
};

export type RenderDataArray = RenderDataType[];

export type PageRequestQuery = {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword?: string;
};

export type PageType = {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
};

export type PageInfoType = {
  current: number;
  start: number;
  end: number;
  prev: boolean;
  next: boolean;
  pageList: number[];
  totalPages: number;
};

export type PageResponseType = {
  list: PageType[];
  info: PageInfoType;
  totalCount: number;
};
