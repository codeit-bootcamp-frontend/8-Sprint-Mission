import Image from "next/image";
import { Product } from "@/lib/definitions";

export default function Item({
  images,
  name,
  price,
  description,
  favoriteCount,
}: Omit<Product, "id">) {
  return (
    <li className='flex flex-col gap-y-[0.375rem] w-full'>
      <div className='relative w-full pt-[100%] overflow-hidden'>
        <Image className='absolute top-0 left-0' priority src={images[0]} alt={name} fill />
      </div>
      <p className='text-sm font-medium'>{description}</p>
      <p className='font-bold'>{price}원</p>
      <div className='flex w-fit cursor-pointer'>
        <Image priority src='ic_like_sm_inactive.svg' alt='좋아요' width={16} height={16} />
        <span>{favoriteCount}</span>
      </div>
    </li>
  );
}
