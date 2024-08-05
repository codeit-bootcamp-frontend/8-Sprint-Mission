type AddItemFieldsetNameType = 'title' | 'description' | 'price' | 'tag';

export interface IAddItemFieldset {
  subTitle: string;
  name: AddItemFieldsetNameType;
  placeholder: string;
}

export type FormObjectType = string | File[];

export interface IFormValue extends Record<string, FormObjectType> {
  imgFiles: File[];
  title: string;
  description: string;
  price: string;
  tag: string;
}

export interface IImagePreview {
  id: string;
  imgUrl: string;
}

export interface ITag {
  id: string;
  tagContent: string;
}
