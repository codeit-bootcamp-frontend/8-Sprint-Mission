import { DeviceContext } from '@/contexts/DeviceContext';
import { ArticlesQuery } from '@/pages/api/client';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';

type Props = {
  keyword: string;
  orderBy: ArticlesQuery['orderBy'];
  onChangeKeyword: React.Dispatch<React.SetStateAction<string>>;
  onChangeOrderBy: React.Dispatch<
    React.SetStateAction<ArticlesQuery['orderBy']>
  >;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function BoardTitle({
  keyword,
  orderBy,
  onChangeKeyword,
  onChangeOrderBy,
  setIsLoading,
}: Props) {
  const device = useContext(DeviceContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  let orderName;
  if (orderBy === 'recent') orderName = '최신순';
  else orderName = '좋아요순';

  const handleIsOpen = () => {
    setIsOpen(p => !p);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    onChangeKeyword(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(() => true);
  };

  const handleChangeOrderBy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    const order = currentTarget.dataset.order as ArticlesQuery['orderBy'];
    onChangeOrderBy(prev => {
      if (prev !== order) setIsLoading(() => true);
      return order;
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-xl-20px-bold">게시글</h1>
        <button
          type="button"
          className="rounded-[8px] bg-primary-100 px-[23px] py-[8px] text-white font-lg-16px-semibold"
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
            className="w-full rounded-[8px] bg-secondary-100 py-[6px] pl-[40px] pr-[16px] placeholder:font-lg-16px-regular"
            placeholder="검색할 상품을 입력해주세요"
            value={keyword}
            onChange={handleChange}
          />
        </form>
        <div
          className="relative flex items-center justify-center rounded-[8px] border-[1px] p-[9px]"
          onClick={handleIsOpen}
          onKeyDown={handleIsOpen}
          role="option"
          aria-selected="true"
          tabIndex={0}
        >
          {mounted && device === 'mobile' ? (
            <Image
              width={24}
              height={24}
              src="/sort_icon.png"
              alt="sort dropdown"
            />
          ) : (
            <div className="flex items-center justify-between gap-[24px]">
              <p>{orderName}</p>
              <Image
                width={24}
                height={24}
                src="/icon/arrow_down.png"
                alt="open orderList"
              />
            </div>
          )}
          {isOpen && (
            <ul className="absolute right-0 top-[54px] z-10 w-[130px] rounded-[10px] border-[1px] border-secondary-200 bg-white py-[4px]">
              <li className="h-[46px] w-full hover:bg-gray-200">
                <button
                  className="h-full w-full"
                  type="button"
                  data-order="recent"
                  onClick={handleChangeOrderBy}
                >
                  최신순
                </button>
              </li>
              <li className="h-[46px] w-full hover:bg-gray-200">
                <button
                  className="h-full w-full"
                  type="button"
                  data-order="like"
                  onClick={handleChangeOrderBy}
                >
                  좋아요순
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default BoardTitle;
