type AddItemFieldsetNameType = 'title' | 'description' | 'price' | 'tag';

export interface IAddItemFieldset {
  subTitle: string;
  name: AddItemFieldsetNameType;
  placeholder: string;
}

export type ObjectType = string | File[];

export interface IFormValue extends Record<string, ObjectType> {
  imgFiles: File[];
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
