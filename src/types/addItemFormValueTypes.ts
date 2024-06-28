export type ObjectType = string | File[];

export interface IFormValue extends Record<string, ObjectType> {
  imgfiles: File[];
  title: string;
  description: string;
  price: string;
  tag: string;
}
