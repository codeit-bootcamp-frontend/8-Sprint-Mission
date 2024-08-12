interface MainProps {
  children: React.ReactNode;
  className?: string;
}

function Main({ children, className }: MainProps) {
  return (
    <main
      className={`${className} max-w-[1200px] pt-24 pb-12 mx-auto gap-6 flex flex-col font-pretendard 
      max-md:w-full max-md:px-4 max-xl:w-full max-xl:px-6`}
    >
      {children}
    </main>
  );
}

export default Main;
