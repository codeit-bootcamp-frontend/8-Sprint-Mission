import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className='grid grid-rows-[1fr_2fr_1fr] w-full p-1 bg-white z-50 sm:flex sm:justify-between sm:fixed sm:inset-x-0 sm:top-0 sm:items-center sm:h-header sm:px-4 xl:container xl:mx-auto'>
        <picture
          className='flex justify-center w-full shadow-md cursor-pointe sm:w-auto sm:shadow-none'
          onClick={() => router.push("/")}>
          <source
            media='(min-width: 48em)'
            srcSet={"ic_panda_market_sm.svg"}
            width={153}
            height={51}
          />
          <source
            media='(min-width: 0)'
            srcSet={"ic_panda_market_typo.svg"}
            width={103}
            height={51}
          />
          <img alt='판다마켓' />
        </picture>
        <nav className='sm:ms-[3%] sm:me-auto'>
          <ul className='grid grid-flow-row auto-rows-fr h-full whitespace-nowrap sm:grid-flow-col sm:auto-cols-fr sm:gap-x-2'>
            <li
              className='flex justify-center items-center w-full shadow-md sm:shadow-none'
              onClick={() => router.push("/board")}>
              <p>자유게시판</p>
            </li>
            <li
              className='flex justify-center items-center w-full shadow-md sm:shadow-none'
              onClick={() => router.push("/items")}>
              <p>중고마켓</p>
            </li>
          </ul>
        </nav>
        <button
          className='btn btn-primary sm:btn-small sm:ml-2'
          onClick={() => router.push("/login")}>
          로그인
        </button>
      </header>
      <div className='sm:h-header'></div>
    </>
  );
}
