interface Tag {
  id: string;
  name: string;
}

interface FormInitialValues {
  imgFile: File | null;
  title: string;
  description: string;
  price: string;
  tag: Tag[];
}

type ChangeValueType = (
  name: string,
  value: string | null | Tag[] | number | File | readonly string[]
) => void;

export type { FormInitialValues, ChangeValueType };
