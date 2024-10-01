import Button from '@core/ui/buttons/Button';
import ImageFileInput from '@core/ui/inputs/ImageFileInput';
import TagInput from '@core/ui/inputs/TagInput';
import { useState } from 'react';
import { useAddProduct } from '@lib/queries/items.queries';

interface initValue {
  imgFile: any;
  name: string;
  desc: string;
  price: number;
  tags: string[];
}

const INITIAL_VALUES: initValue = {
  imgFile: null,
  name: '',
  desc: '',
  price: 0,
  tags: [],
};

function AddItems() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [initialPreview] = useState<string>('');

  const isAllValid =
    values.name && values.desc && values.price && values.tags.length > 0;

  const addProductMutation = useAddProduct();

  const handleChange = (name: string, value: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const addTag = (tag: string) => {
    if (!values.tags.includes(tag)) {
      handleChange(
        'tags',
        values.tags.length > 0 ? [...values.tags, tag] : [tag]
      );
    }
  };

  const removeTag = (targetTag: string) => {
    handleChange(
      'tags',
      values.tags.filter((tag) => tag !== targetTag)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAllValid) {
      try {
        await addProductMutation.mutateAsync({
          name: values.name,
          description: values.desc,
          price: Number(values.price),
          tags: values.tags,
          images: [values.imgFile], // 이미지 처리 로직에 따라 수정 필요
        });
      } catch (error) {
        console.error('상품 등록 실패:', error);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-24 px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold">상품 등록하기</div>
        <div>
          <Button
            text="등록"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
            }}
            isDisabled={!isAllValid}
          />
        </div>
      </div>
      <div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start">
            <label className="mb-3 text-lg font-bold text-gray-800">
              상품 이미지
            </label>
            <div>
              <ImageFileInput
                name="imgFile"
                value={values.imgFile}
                initialPreview={initialPreview}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="name"
              className="mb-3 text-lg font-bold text-gray-800"
            >
              상품명
            </label>
            <input
              className="w-full h-14 px-6 py-4 text-base bg-gray-100 rounded-xl focus:outline-blue-500 placeholder-gray-400"
              type="text"
              name="name"
              value={values.name}
              placeholder="상품명을 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="desc"
              className="mb-3 text-lg font-bold text-gray-800"
            >
              상품 소개
            </label>
            <textarea
              className="w-full h-80 px-6 py-4 text-base bg-gray-100 rounded-xl focus:outline-blue-500 placeholder-gray-400 resize-none"
              name="desc"
              value={values.desc}
              placeholder="상품 소개를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="price"
              className="mb-3 text-lg font-bold text-gray-800"
            >
              판매가격
            </label>
            <input
              className="w-full h-14 px-6 py-4 text-base bg-gray-100 rounded-xl focus:outline-blue-500 placeholder-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              name="price"
              value={values.price}
              placeholder="판매가격을 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="mb-3 text-lg font-bold text-gray-800">태그</label>
            <TagInput
              className=""
              name="tags"
              tags={values.tags}
              onAdd={addTag}
              onRemove={removeTag}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItems;
