import facebook from './../assets/img/ic_facebook.svg';
import kakao from './../assets/img/ic_kakao.svg';
import instagram from './../assets/img/ic_instagram.svg';

export function getSnsIcon(name) {
  switch (name) {
    case 'kakao':
      return kakao;
    case 'instagram':
      return instagram;
    case 'facebook':
      return facebook;
    default:
      return null;
  }
}
export default getSnsIcon;
