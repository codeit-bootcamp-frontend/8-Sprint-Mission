import React, {
  useState,
  useMemo,
  useCallback,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
} from "react";
import FileInput from "@/components/form/FileInput";
import TextArea from "@/components/form/TextArea";
import TextInput from "@/components/form/TextInput";
import Button from "@/components/ui/Button";

interface Tag {
  id: string;
  name: string;
}

interface FormValues {
  imgFile: File | null;
  product: string;
  content: string;
  price: number;
  tag: Tag[];
}

const INITIAL_VALUES: FormValues = {
  imgFile: null,
  product: "",
  content: "",
  price: 0,
  tag: [],
};

function AddBoard() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [resetTagInput, setResetTagInput] = useState<boolean>(false);

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setResetTagInput(true);
  };

  const isFormValid = useMemo(() => {
    const { product, content, price, tag } = values;
    return (
      product.trim() !== "" &&
      content.trim() !== "" &&
      price > 0 &&
      tag.length > 0
    );
  }, [values]);

  const handleChange = useCallback((name: string, value: unknown) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

    if (type === "file" && files && files.length > 0) {
      handleChange(name, files[0]);
    } else {
      handleChange(name, value);
    }
  };

  const handleTagListChange = useCallback(
    (tagList: Tag[]) => {
      handleChange("tag", tagList);
    },
    [handleChange]
  );

  const handleFormKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    // textarea 안에서는 Enter 키를 허용
    if (
      event.key === "Enter" &&
      (event.target as HTMLElement).tagName !== "TEXTAREA"
    ) {
      event.preventDefault();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    alert("등록되었습니다");
    console.log(values);
    resetForm();
  };
  return (
    <section>
      <form>
        <div className="section-header">
          <h2 className="title">게시글 쓰기</h2>
          <Button size="sm" color="primary" type="submit">
            등록
          </Button>
        </div>
        <TextInput
          label="제목"
          name="article-title"
          value={values.product}
          onChange={handleInputChange}
          placeholder="제목을 입력해주세요"
        />
        <TextArea
          label="내용"
          name="content"
          value={values.content}
          onChange={handleInputChange}
          placeholder="내용을 입력해주세요"
          rows={10}
        />
        <FileInput
          label="이미지"
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default AddBoard;
