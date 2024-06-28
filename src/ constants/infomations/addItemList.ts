import { IAddItemFeildset } from 'types/addItemFeildsetTypes';

export const ADDITEM_FEIELDSET_LIST: IAddItemFeildset[] = [
  {
    subTitle: '상품명',
    name: 'title',
    placeholder: '상품명을 입력해주세요',
  },
  {
    subTitle: '상품 소개',
    name: 'description',
    placeholder: '상품 소개를 입력해주세요',
  },
  {
    subTitle: '판매 가격',
    name: 'price',
    placeholder: '판매 가격을 입력해주세요',
  },
  {
    subTitle: '태그',
    name: 'tag',
    placeholder: '태그를 입력해주세요',
  },
];
