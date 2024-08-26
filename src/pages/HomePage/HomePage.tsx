import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import facebookicon from "../../images/icons/ic_facebook.png";
import twittericon from "../../images/icons/ic_twitter.png";
import youtubeicon from "../../images/icons/ic_youtube.png";
import instagramkicon from "../../images/icons/ic_instagram.png";
import home1 from "../../images/image/home1.png";
import home2 from "../../images/image/home2.png";
import home3 from "../../images/image/home3.png";

const facebookURL = "https://www.facebook.com";
const twitterURL = "http://twitter.com";
const youtubeURL = "https://www.youtube.com/";
const instagramRUL = "https://www.instagram.com/";

function HomePage() {
  return (
    <div>
      <main>
        <div className={style.title}>
          <h1 className={style.homepageMaincontent}>
            일상의 모든 물건을
            <br className={style.breakbanner} />
            거래해 보세요
          </h1>
          <div className={style.buttonContainer}>
            <Link to="/items" className={style.itmebotton}>
              구경하러 가기
            </Link>
          </div>
        </div>
        <div className={style.container}>
          <section className={style.mainsection}>
            <img className={style.homeimg} src={home1} alt="hot item" />
            <div className={style.text}>
              <span className={style.sectiontitle}>Hot item</span>
              <h2 className={style.hometitles}>
                인기 상품을
                <br className={style.breakm} />
                확인해 보세요
              </h2>
              <p className={style.content}>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </section>

          <section className={style.reverse}>
            <img className={style.homeimg} src={home2} alt="hot item" />
            <div className={style.text}>
              <span className={style.sectiontitle}>Search</span>
              <h2 className={style.hometitles}>
                구매를 원하는 <br className={style.breakm} />
                상품을 검색하세요
              </h2>
              <p className={style.content}>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </section>

          <section className={style.mainsection}>
            <img className={style.homeimg} src={home3} alt="hot item" />
            <div className={style.text}>
              <span className={style.sectiontitle}>Register</span>
              <h2 className={style.hometitles}>
                판매를 원하는
                <br className={style.breakm} />
                상품을 등록하세요
              </h2>
              <p className={style.content}>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </section>
        </div>

        <div className={style.bottom}>
          <div className={style.bottomtext}>
            믿을수 있는 <br />
            판다마켓 중고거래
          </div>
        </div>
      </main>

      <footer className={style.homefooter}>
        <p className={style.year}>©cod eit 2024</p>
        <p className={style.FAQ}>
          <a href="/privacy.html">
            <span>Privacy Policy</span>
          </a>
          <a href="/faq.html">
            <span>FAQ</span>
          </a>
        </p>
        <ul className={style.icon}>
          <a href={facebookURL}>
            <img src={facebookicon} alt="fecebook" />
          </a>
          <a href={twitterURL}>
            <img src={twittericon} alt="twitter" />
          </a>
          <a href={youtubeURL}>
            <img src={youtubeicon} alt="youtube" />
          </a>
          <a href={instagramRUL}>
            <img src={instagramkicon} alt="imstrgram" />
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
