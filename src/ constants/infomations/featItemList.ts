import feautureImg1 from 'assets/images/home/home_feat1.png';
import feautureImg2 from 'assets/images/home/home_feat2.png';
import feautureImg3 from 'assets/images/home/home_feat3.png';

export interface IItemInfo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  detail: string;
}

export const FEAT_ITEM_LIST: IItemInfo[] = [
  {
    id: 1,
    src: feautureImg1,
    alt: '인기 상품을 바라보는 두 팬더의 머리가 보이는 이미지',
    title: 'Hot item',
    description: '인기 상품을\n 확인해 보세요',
    detail: '가장 HOT한 중고거래 물품을\n 판다 마켓에서 확인해보세요',
  },
  {
    id: 2,
    src: feautureImg2,
    alt: '돋보기로 물음표가 그려진 박스를 보고 있는 이미지',
    title: 'Search',
    description: '구매를 원하는\n 상품을 검색하세요',
    detail: '구매하고 싶은 물품은 검색해서\n 쉽게 찾아보세요',
  },
  {
    id: 3,
    src: feautureImg3,
    alt: '폴더 위에 3개의 상품이 나열되어 있는 사진',
    title: 'Register',
    description: '판매를 원하는\n 상품을 등록하세요',
    detail: '어떤 물건이든 판매하고 싶은\n 상품을 쉽게 등록하세요',
  },
];
