type AddItemFeildsetNameType = 'title' | 'description' | 'price' | 'tag';

export interface IAddItemFeildset {
  subTitle: string;
  name: AddItemFeildsetNameType;
  placeholder: string;
}

export type ObjectType = string | File[];

export interface IFormValue extends Record<string, ObjectType> {
  imgfiles: File[];
  title: string;
  description: string;
  price: string;
  tag: string;
}

export interface IPreview {
  id: string;
  url: string;
}

export interface ITag {
  id: string;
  content: string;
}
