import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Nav from "@/components/Nav";
import Layout from "@/components/Layout";
import IntroCard from "@/components/IntroCard";

import headerImage from "@/assets/images/Img_home_top.png";
import pandaWithTShirtImage from "@/assets/images/Img_home_01.png";
import readingGlassImage from "@/assets/images/Img_home_02.png";
import fileOfProductImage from "@/assets/images/Img_home_03.png";
import facebookIcon from "@/assets/images/ic_facebook.png";
import twitterIcon from "@/assets/images/ic_twitter.png";
import youtubeIcon from "@/assets/images/ic_youtube.png";
import instagramIcon from "@/assets/images/ic_instagram.png";

const CARD_LIST = [
  {
    label: "Hot item",
    title: "인기 상품을 확인해 보세요",
    content: "가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요",
    image: pandaWithTShirtImage,
    alt: "판다가 반팔티를 보고 있는 이미지",
  },
  {
    label: "Search",
    title: "구매를 원하는 상품을 검색하세요",
    content: "구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
    image: readingGlassImage,
    alt: "돋보기로 물음표를 보는 이미지",
  },
  {
    label: "Register",
    title: "판매를 원하는 상품을 등록하세요",
    content: "어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요",
    image: fileOfProductImage,
    alt: "상품 파일이 담긴 폴더를 고르는 이미지",
  },
];

const SNS_LIST = [
  {
    link: "https://www.facebook.com",
    icon: facebookIcon,
    alt: "facebook",
  },
  {
    link: "https://www.twitter.com",
    icon: twitterIcon,
    alt: "twitter",
  },
  {
    link: "https://www.youtube.com",
    icon: youtubeIcon,
    alt: "youtube",
  },
  {
    link: "https://www.instagram.com",
    icon: instagramIcon,
    alt: "instagram",
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <Nav />
      <main className="mt-[4.375rem]">
        <header className="relative h-[33.75rem] bg-[#cfe5ff]">
          <div className="absolute bottom-0 m-auto flex max-w-[75rem] items-center justify-start">
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-[2.5rem] font-bold text-gray-700">
                일상의 모든 물건을 거래해 보세요
              </h1>
              <Link
                className="w-full rounded-full bg-brand-blue p-3 text-center text-xl font-semibold text-gray-50"
                href="/items"
              >
                구경하러 가기
              </Link>
            </div>
            <Image
              className="h-auto w-auto"
              src={headerImage}
              alt="판다가 손 흔드는 이미지"
              width={746}
              height={340}
            />
          </div>
        </header>

        <div className="main-wrapper">
          {CARD_LIST.map((content, index) => {
            return <IntroCard key={index} data={content} />;
          })}
        </div>

        <div className="bg-[#cfe5ff]">
          <h1 className="title">
            믿을 수 있는 <br />
            판다마켓 중고거래
          </h1>
        </div>

        <footer className="h-40 bg-gray-900">
          <div className="m-auto flex max-w-[75rem] flex-shrink items-center justify-evenly pt-8">
            <div className="text-base font-normal text-gray-400">
              ©codeit - 2024
            </div>
            <div className="flex items-center justify-center gap-[1.875rem] text-base font-normal text-gray-200">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/faq">FAQ</Link>
            </div>

            <div className="flex items-center justify-center gap-3">
              {SNS_LIST.map((sns, index) => {
                const { link, icon, alt } = sns;
                return (
                  <Link key={index} href={link} target="_blank">
                    <Image
                      src={icon}
                      alt={`${alt} 아이콘`}
                      width={20}
                      height={20}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
