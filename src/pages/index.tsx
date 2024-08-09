import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import S from "@/styles/index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div className={S.homeContainer}>
        {/* <NavBar /> */}
        <header>
          <div className={S.headerContentsBackground}>
            <div className={S.headerContent}>
              <div className={S.headerTextImage}>
                <div className={S.slogan}>
                  일상의 모든 물건을
                  <br />
                  거래해 보세요
                </div>
                <Link href="/items" className={S.lookAroundLink}>
                  구경하러 가기
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className={S.sectionContainer}>
          <section className={S.sectionBox}>
            <div className={S.sectionWrapper}>
              <div className={S.sectionImage}>
                <Image
                  fill
                  src="/images/mainPage/Img_home_hot_item.png"
                  alt="인기 상품 기능 소개 이미지"
                />
              </div>
              <div className={S.contents}>
                <div className={S.contentCategory}>Hot item</div>
                <div className={S.contentTitle}>
                  인기 상품을
                  <br />
                  확인해 보세요
                </div>
                <div className={S.contentText}>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </div>
              </div>
            </div>
          </section>
          <section className={`${S.reverse} ${S.sectionBox}`}>
            <div className={S.sectionWrapper}>
              <div className={S.contents}>
                <div className={S.contentCategory}>Search</div>
                <div className={S.contentTitle}>
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </div>
                <div className={S.contentText}>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </div>
              </div>
              <div className={S.sectionImage}>
                <Image
                  fill
                  src="/images/mainPage/Img_home_item_search.png"
                  alt="검색 기능 소개 이미지"
                />
              </div>
            </div>
          </section>
          <section className={S.sectionBox}>
            <div className={S.sectionWrapper}>
              <div className={S.sectionImage}>
                <Image
                  fill
                  src="/images/mainPage/Img_home_for_sale_item.png"
                  alt="상품 등록 기능 소개 이미지"
                />
              </div>
              <div className={S.contents}>
                <div className={S.contentCategory}>Register</div>
                <div className={S.contentTitle}>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </div>
                <div className={S.contentText}>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className={S.bottomContents}>
          <div className={S.bottomContentsBackground}>
            <div className={S.bottomTextImage}>
              <div className={S.bottomText}>
                <div className={S.slogan}>
                  믿을 수 있는
                  <br />
                  판다마켓 중고거래
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className={S.footerLinkBarBackground}>
          <div className={S.footerLinkBar}>
            <address className={S.codeit}>@codeit - 2024</address>
            <div className={S.privacyFaqBox}>
              <div>
                <Link href="privacy" className={S.privacy}>
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link href="faq" className={S.faq}>
                  FAQ
                </Link>
              </div>
            </div>
            <nav className={S.snsLinks}>
              <ul className={S.ulBox}>
                <li>
                  <Link href="/facebook" target="_blank" rel="noopener norefferer">
                    <Image
                      width={20}
                      height={20}
                      className={S.snsLinkMini}
                      src="/images/icon/ic_facebook.png"
                      alt="sns-link-facebook"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/twitter" target="_blank" rel="noopener norefferer">
                    <Image
                      width={20}
                      height={20}
                      className={S.snsLinkMini}
                      src="/images/icon/ic_twitter.png"
                      alt="sns-link-twitter"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/youtube" target="_blank" rel="noopener norefferer">
                    <Image
                      width={20}
                      height={20}
                      className={S.snsLinkMini}
                      src="/images/icon/ic_youtube.png"
                      alt="sns-link-youtube"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/instagram" target="_blank" rel="noopener norefferer">
                    <Image
                      width={20}
                      height={20}
                      className={S.snsLinkMini}
                      src="/images/icon/ic_instagram.png"
                      alt="sns-link-instagram"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
