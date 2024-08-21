import Link from "next/link";
import Image from "next/image";
import headerImage from "@/assets/images/Img_home_top.png";
import pandaWithTShirtImage from "@/assets/images/Img_home_01.png";
import readingGlassImage from "@/assets/images/Img_home_02.png";
import fileOfProductImage from "@/assets/images/Img_home_03.png";
import facebookIcon from "@/assets/images/ic_facebook.png";
import twitterIcon from "@/assets/images/ic_twitter.png";
import youtubeIcon from "@/assets/images/ic_youtube.png";
import instagramIcon from "@/assets/images/ic_instagram.png";

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
    <main>
      <header>
        <div className="header-wrapper">
          <h1 className="title">
            일상의 모든 물건을 <br className="onlyPC" />
            거래해 보세요
          </h1>
          <Link className="header-link" href="/items">
            구경하러 가기
          </Link>
        </div>
      </header>

      <div className="main-wrapper">
        <section>
          <Image
            className="section-img hot-item"
            src={pandaWithTShirtImage}
            alt="판다가 반팔티를 보고 있는 이미지"
            width={588}
            height={444}
          />
          <div className="section-content hot-item">
            <p className="section-content-label hot-item">Hot item</p>
            <h1 className="title hot-item">
              인기 상품을 <br className="onlyPC" />
              확인해 보세요
            </h1>
            <h2 className="section-content-description hot-item">
              가장 HOT한 중고거래 물품을 <br />
              판다 마켓에서 확인해 보세요
            </h2>
          </div>
        </section>

        <section>
          <div className="section-content search">
            <p className="section-content-label search">Search</p>
            <h1 className="title search">
              구매를 원하는 <br className="onlyPC" />
              상품을 검색하세요
            </h1>
            <h2 className="section-content-description search">
              구매하고 싶은 물품은 검색해서 <br />
              쉽게 찾아보세요
            </h2>
          </div>
          <Image
            className="section-img search"
            src={readingGlassImage}
            alt="돋보기로 물음표를 보는 이미지"
            width={588}
            height={444}
          />
        </section>

        <section>
          <Image
            className="section-img register"
            src={fileOfProductImage}
            alt="상품 파일이 담긴 폴더를 고르는 이미지"
            width={588}
            height={444}
          />
          <div className="section-content register">
            <p className="section-content-label register">Register</p>
            <h1 className="title register">
              판매를 원하는 <br className="onlyPC" />
              상품을 등록하세요
            </h1>
            <h2 className="section-content-description register">
              어떤 물건이든 판매하고 싶은 상품을 <br />
              쉽게 등록하세요
            </h2>
          </div>
        </section>
      </div>

      <div className="banner">
        <div className="banner-wrapper">
          <h1 className="title">
            믿을 수 있는 <br />
            판다마켓 중고거래
          </h1>
        </div>
      </div>

      <footer>
        <div className="footer-wrapper">
          <div className="footer-copyright">©codeit - 2024</div>
          <div className="footer-menu">
            <Link className="footer-menu-link" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="footer-menu-link" href="/faq">
              FAQ
            </Link>
          </div>

          <div className="footer-sns">
            {SNS_LIST.map((sns, index) => {
              const { link, icon, alt } = sns;
              return (
                <Link key={index} href={link} target="_blank">
                  <Image src={icon} alt={`${alt} 아이콘`} />
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
