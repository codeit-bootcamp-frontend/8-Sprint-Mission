// formTypes.ts
export interface FormValues {
  imgFile: File | null;
  product: string;
  content: string;
  price: number;
  tag: Tag[];
}

export interface InqueryFormProps {
  newComment: string;
  setNewComment: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface Tag {
  id: number;
  name: string;
}

export interface TagInputProps {
  label: string;
  name: string;
  value: Tag[]; // 수정된 부분: Tag 배열
  onTagListChange: (tags: Tag[]) => void; // 수정된 부분: Tag 배열
  reset?: boolean;
  placeholder?: string;
}
