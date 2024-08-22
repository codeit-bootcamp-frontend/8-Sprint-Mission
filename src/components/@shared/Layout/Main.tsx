interface MainProps {
  children: React.ReactNode;
  isHome?: boolean;
  className?: string;
}

function Main({ children, isHome, className }: MainProps) {
  return (
    <main
      className={`
        ${
          isHome
            ? "w-full pt-[70px] gap-6 flex flex-col font-pretendard "
            : `${className} max-w-[1200px] pt-24 pb-12 mx-auto gap-6 flex flex-col font-pretendard max-md:w-full max-md:px-4 max-xl:w-full max-xl:px-6`
        }
      `}
    >
      {children}
    </main>
  );
}

export default Main;
