import { Article } from '@/lib/api';
import Image from 'next/image';

type Props = {
  board: Article;
};

function BestContent({ board }: Props) {
  return (
    <div className="flex justify-between pt-4">
      <h1 className="text-secondary-800 font-2lg-18px-semibold desktop:font-xl-20px-semibold">
        {board.title}
      </h1>
      <div className="border-1 relative h-[72px] w-[72px] border-secondary-200">
        <Image
          className="aspect-square w-full rounded-[20px]"
          fill
          src={board.image}
          alt="best article"
        />
      </div>
    </div>
  );
}

export default BestContent;
