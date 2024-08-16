export interface articleType {
  title: string;
  content: string;
  image: string;
}

export interface FileInputType {
  value: File | null;
  onChange: (file: File | null) => void;
}
