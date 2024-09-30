interface Tag {
  id: string;
  name?: string;
}

interface FormInitialValues {
  imgFile: File | null;
  name: string;
  description: string;
  price: string;
  tags: Tag[];
}

type ChangeValueType = (
  name: string,
  value: string | null | Tag[] | number | File | readonly string[]
) => void;

export type { FormInitialValues, ChangeValueType };
