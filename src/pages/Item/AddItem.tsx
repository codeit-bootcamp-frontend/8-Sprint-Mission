import React, {
  useState,
  useMemo,
  useCallback,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
} from "react";
import { Helmet } from "react-helmet";
import "./AddItem.scss";
import Header from "../../layout/Header";
import FileInput from "../../components/form/FileInput";
import TagInput from "../../components/form/TagInput";
import TextInput from "../../components/form/TextInput";
import TextArea from "../../components/form/TextArea";
import NumberInput from "../../components/form/NumberInput";

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

const AddItem: React.FC = () => {
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
    const { name, value, type, files } = e.target;

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
    <>
      <Helmet>
        <title>판다마켓 - 상품 등록</title>
      </Helmet>
      <Header />
      <main className="main-top">
        <section className="product-register-wrap">
          <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
            <div className="section-header">
              <h2 className="title">상품 등록하기</h2>
              <button
                className="btn-primary btn-sm"
                type="submit"
                disabled={!isFormValid}
              >
                등록
              </button>
            </div>
            <FileInput
              label="상품이미지"
              name="imgFile"
              value={values.imgFile}
              onChange={handleChange}
            />
            <TextInput
              label="상품명"
              name="product"
              value={values.product}
              onChange={handleInputChange}
              placeholder="상품명을 입력해주세요"
            />
            <TextArea
              label="상품 소개"
              name="content"
              value={values.content}
              onChange={handleInputChange}
              placeholder="상품 소개를 입력해주세요"
              rows={10}
            />
            <NumberInput
              label="판매가격"
              name="price"
              value={values.price}
              onChange={handleInputChange}
              placeholder="판매 가격을 입력해주세요"
            />
            <TagInput
              label="태그"
              name="tag"
              value={values.tag}
              onTagListChange={handleTagListChange}
              reset={resetTagInput}
              placeholder="태그를 입력 후 Enter를 눌러 추가하세요"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default AddItem;
