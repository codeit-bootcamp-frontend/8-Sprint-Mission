export interface articleType {
  title: string;
  content: string;
  image: string | null;
}

export interface FileInputType {
  value: File | null;
  fileChange: (file: File | null) => void;
  previewChange: (preview: string | null) => void;
}
