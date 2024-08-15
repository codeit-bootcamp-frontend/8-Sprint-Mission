import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';
import useInnerWidth from './useInnerWidth';

interface UseDynamicPageSizeParams {
  desktop: number;
  tablet: number;
  mobile: number;
}

const useDynamicPageSize = ({ desktop, tablet, mobile }: UseDynamicPageSizeParams) => {
  const innerWidth = useInnerWidth();
  const querySize =
    innerWidth > DEVICE_MAX_WIDTH.tablet // 태블릿 사이즈보다 크면 불러올 페이지 사이즈
      ? desktop
      : innerWidth > DEVICE_MAX_WIDTH.mobile // 태블릿 사이즈보다 작고 모바일 사이즈보다 크면 불러올 페이지 사이즈
      ? tablet
      : mobile; //모바일 사이즈에서 불러올 페이지 사이즈

  return querySize;
};

export default useDynamicPageSize;
