import facebookLogoImg from 'assets/images/home/ic_facebook.png';
import twitterLogoImg from 'assets/images/home/ic_twitter.png';
import youtubeLogoImg from 'assets/images/home/ic_youtube.png';
import instagramLogoImg from 'assets/images/home/ic_instagram.png';

type tagetType = '_blank' | '_self' | '_top' | '_parrent';

export interface ILink {
  id: string;
  href: string;
  src: string;
  alt: string;
  target: tagetType;
}

export const SNS_LINKS: ILink[] = [
  {
    id: '페이스북',
    href: 'https://www.facebook.com',
    src: facebookLogoImg,
    alt: '페이스북 로고',
    target: '_blank',
  },
  {
    id: '트위터',
    href: 'https://x.com/?lang=ko',
    src: twitterLogoImg,
    alt: '트위터 로고',
    target: '_blank',
  },
  {
    id: '유튜브',
    href: 'https://www.youtube.com',
    src: youtubeLogoImg,
    alt: '유튜브 로고',
    target: '_blank',
  },
  {
    id: '인스타그램',
    href: 'https://www.instagram.com',
    src: instagramLogoImg,
    alt: '인스타그램 로고',
    target: '_blank',
  },
];
