import { ReactElement } from 'react';
import Layout from '@/layouts/Layout';
import Link from 'next/link';
import LandingItem from '@/components/landing/LandingItem';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mt-[70px]">
      <div className='h-[540px] w-full bg-[#CFE5FF] bg-[url("../public/landing/Img_home_top@3x.png")] bg-[length:448px_204px] bg-bottom bg-no-repeat'>
        <div className="mx-auto flex w-[240px] flex-col items-center justify-center gap-[18px] pt-[48px]">
          <h1 className="flex flex-col items-center justify-center text-[32px] font-bold leading-[44.8px]">
            <span>일상의 모든 물건을</span>
            <span>거래해보세요</span>
          </h1>
          <Link
            className="rounded-full bg-primary-100 px-[71px] py-[11px] text-white font-lg-18px-semibold"
            href="/items"
          >
            구경하러 가기
          </Link>
        </div>
      </div>
      <div className="mt-[52px] flex flex-col items-center justify-center gap-[40px]">
        <LandingItem
          src="/landing/Img_home_01@3x.png"
          badge="Hot item"
          title="인기 상품을 확인해보세요"
        >
          <span>가장 HOT한 중고거래 물품을</span>
          <span>판다 마켓에서 확인해보세요</span>
        </LandingItem>
        <LandingItem
          src="/landing/Img_home_02@3x.png"
          badge="Search"
          title="구매를 원하는 상품을 검색하세요"
          align="end"
        >
          <span>구매하고 싶은 물품은 검색해서</span>
          <span>쉽게 찾아보세요</span>
        </LandingItem>
        <LandingItem
          src="/landing/Img_home_03@3x.png"
          badge="Register"
          title="판매를 원하는 상품을 등록하세요"
        >
          <span>어떤 물건이든 판매하고 싶은 상품을</span>
          <span>쉽게 등록하세요</span>
        </LandingItem>
      </div>
      <div className='mt-[83px] h-[540px] w-full bg-[#CFE5FF] bg-[url("../public/landing/Img_home_bottom@3x.png")] bg-[length:375px_198px] bg-bottom bg-no-repeat'>
        <div className="mx-auto flex w-[240px] flex-col items-center justify-center gap-[18px] pt-[112px]">
          <h1 className="flex flex-col items-center justify-center text-[32px] font-bold leading-[44.8px]">
            <span>믿을 수 있는</span>
            <span>판다마켓 중고 거래</span>
          </h1>
        </div>
      </div>
      <footer className="grid auto-rows-min grid-cols-[minmax(100px,_1fr)_minmax(33px,_1fr)_minmax(116px,_1fr)] grid-rows-2 items-center gap-y-[60px] bg-[#111322] p-[32px] text-[#CFCFCF]">
        <span>Privacy Policy</span>
        <span className="text-center">FAQ</span>
        <div className="flex h-[18px] w-[116px] justify-between">
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
        <span className="col-span-2 text-[#676767]">©codeit - 2023</span>
      </footer>
      <div className="mb-[100px]" />
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
