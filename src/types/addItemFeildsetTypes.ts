type AddItemFeildsetNameType = 'title' | 'description' | 'price' | 'tag';

export interface IAddItemFeildset {
  subTitle: string;
  name: AddItemFeildsetNameType;
  placeholder: string;
}
