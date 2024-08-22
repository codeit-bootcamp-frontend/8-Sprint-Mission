import { Link } from "react-router-dom";
import facebookIc from "assets/icons/ic_facebook.png";
import twitterIc from "assets/icons/ic_twitter.png";
import youtubeIc from "assets/icons/ic_youtube.png";
import instagramIc from "assets/icons/ic_instagram.png";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <footer className="bg-slate-900 font-normal pt-8 pb-[104px] px-8">
      <div className=" flex flex-row justify-between">
        <span className="text-gray-600">@codeit - 2024</span>
        <div className="text-gray-400 flex flex-row gap-8">
          <div>
            <Link to="./privacy/privacy">Privacy Policy</Link>
          </div>
          <div>
            <Link to="./faq/faq">FAQ</Link>
          </div>
        </div>
        <ul className="flex flex-row gap-3">
          <li>
            <Link to="https://www.facebook.com/">
              <img
                alt="페이스북 아이콘"
                src={facebookIc}
                className="h-5 w-5"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/">
              <img
                alt="트위터 아이콘"
                src={twitterIc}
                className="h-5 w-5"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/">
              <img
                alt="유튜브 아이콘"
                src={youtubeIc}
                className="h-5 w-5"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/">
              <img
                alt="인스타그램 아이콘"
                src={instagramIc}
                className="h-5 w-5"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
