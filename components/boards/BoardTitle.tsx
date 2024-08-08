import Image from 'next/image';
import { ChangeEvent, FormEvent } from 'react';

type Props = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function BoardTitle({ value, onChange, setIsLoading }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    onChange(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(() => true);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold">게시글</h1>
        <button
          type="button"
          className="font-lg-16px-semibold rounded-[8px] bg-primary-100 px-[23px] py-[8px] text-white"
        >
          글쓰기
        </button>
      </div>
      <div className="mt-[16px] flex gap-[13px]">
        <form className="relative flex grow" onSubmit={handleSubmit}>
          <label
            htmlFor="input_search"
            className="absolute left-[15px] top-[12px]"
          >
            <Image
              width={20}
              height={20}
              src="/search_icon.png"
              alt="input search"
            />
          </label>
          <input
            id="input_search"
            className="placeholder:font-lg-16px-regular w-full rounded-[8px] bg-secondary-100 py-[6px] pl-[40px] pr-[16px]"
            placeholder="검색할 상품을 입력해주세요"
            value={value}
            onChange={handleChange}
          />
        </form>
        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[8px] border-[1px]">
          <Image
            width={24}
            height={24}
            src="/sort_icon.png"
            alt="sort dropdown"
          />
        </div>
      </div>
    </>
  );
}

export default BoardTitle;
