import { ReactElement } from 'react';
import Layout from '@/layouts/Layout';
import Link from 'next/link';
import LandingItem from '@/components/landing/LandingItem';
import Image from 'next/image';
import cn from '@/lib/utils';

export default function Home() {
  return (
    <main className="mt-[70px]">
      <div className='h-[540px] w-full bg-[#CFE5FF] bg-[url("../public/landing/Img_home_top@3x.png")] bg-[length:448px_204px] bg-bottom bg-no-repeat tablet:h-[771px] tablet:bg-[length:744px_340px] desktop:h-[540px] desktop:bg-[bottom_right_30%]'>
        <div className="mx-auto flex w-full max-w-[1110px] flex-col items-center justify-center gap-[18px] pt-12 tablet:gap-6 tablet:pt-[84px] desktop:items-start desktop:pt-60">
          <h1 className="flex flex-col items-center justify-center text-[32px] font-bold leading-[44.8px] tablet:flex-row tablet:text-[40px] tablet:leading-[56px] desktop:flex-col desktop:items-start">
            <span>일상의 모든 물건을</span>
            <span>거래해보세요</span>
          </h1>
          <Link
            className="rounded-full bg-primary-100 px-[71px] py-[11px] text-white font-lg-18px-semibold tablet:px-[124px] tablet:py-4"
            href="/items"
          >
            구경하러 가기
          </Link>
        </div>
      </div>
      <div className="mx-4 mt-[52px] flex max-w-[1200px] flex-col items-center justify-center gap-[40px] tablet:mx-6 tablet:gap-[52px] desktop:mx-auto desktop:mt-[138px] desktop:gap-[276px]">
        <LandingItem src="/landing/Img_home_01@3x.png">
          <LandingItem.Badge>Hot item</LandingItem.Badge>
          <LandingItem.Title>
            <span>인기 상품을</span>
            <span>확인해보세요</span>
          </LandingItem.Title>
          <LandingItem.Content>
            <span>가장 HOT한 중고거래 물품을</span>
            <span>판다 마켓에서 확인해보세요</span>
          </LandingItem.Content>
        </LandingItem>
        <LandingItem src="/landing/Img_home_02@3x.png" align="end">
          <LandingItem.Badge>Search</LandingItem.Badge>
          <LandingItem.Title>
            <span>구매를 원하는</span> <span>상품을 검색하세요</span>
          </LandingItem.Title>
          <LandingItem.Content className="items-end">
            <span>구매하고 싶은 물품은 검색해서</span>
            <span>쉽게 찾아보세요</span>
          </LandingItem.Content>
        </LandingItem>
        <LandingItem src="/landing/Img_home_03@3x.png">
          <LandingItem.Badge>Register</LandingItem.Badge>
          <LandingItem.Title>
            <span>판매를 원하는</span> <span>상품을 등록하세요</span>
          </LandingItem.Title>
          <LandingItem.Content>
            <span>어떤 물건이든 판매하고 싶은 상품을</span>
            <span>쉽게 등록하세요</span>
          </LandingItem.Content>
        </LandingItem>
      </div>
      <div className='mt-[83px] h-[540px] w-full bg-[#CFE5FF] bg-[url("../public/landing/Img_home_bottom@3x.png")] bg-[length:375px_198px] bg-bottom bg-no-repeat tablet:mt-14 tablet:h-[927px] tablet:bg-[length:744px_397px] desktop:mt-[276px] desktop:h-[540px] desktop:bg-[bottom_right_30%]'>
        <div className="mx-auto flex w-full max-w-[1110px] flex-col items-center justify-center gap-[18px] pt-[112px] tablet:pt-[201px] desktop:items-start desktop:pt-60">
          <h1 className="flex flex-col items-center justify-center text-[32px] font-bold leading-[44.8px] tablet:text-[40px] tablet:leading-[56px] desktop:flex-col desktop:items-start">
            <span>믿을 수 있는</span>
            <span>판다마켓 중고 거래</span>
          </h1>
        </div>
      </div>
      <footer
        className={cn(
          'grid auto-rows-min grid-cols-[minmax(150px,_1fr)_minmax(116px,_1fr)] grid-rows-2 items-center gap-y-[60px] bg-[#111322] p-[32px] text-[#CFCFCF] tablet:place-items-center',
          'tablet:grid-cols-[minmax(96px,_1fr)_minmax(128px,_1fr)_minmax(116px,_1fr)] tablet:grid-rows-1 tablet:pb-[108px]'
        )}
      >
        <span className="col-span-2 row-start-2 text-[#676767] tablet:col-span-1 tablet:row-start-1">
          ©codeit - 2023
        </span>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span className="text-center">FAQ</span>
        </div>
        <div className="flex h-[18px] w-[116px] justify-between place-self-end tablet:place-self-center">
          <Image
            width={18}
            height={18}
            src="/icon/facebook.png"
            alt="facebook link"
          />
          <Image
            width={18}
            height={18}
            src="/icon/twitter.png"
            alt="twitter link"
          />
          <Image
            width={18}
            height={18}
            src="/icon/youtube.png"
            alt="youtube link"
          />
          <Image
            width={18}
            height={18}
            src="/icon/instagram.png"
            alt="instagram link"
          />
        </div>
      </footer>
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
