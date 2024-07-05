import { BRAND_FEATURE_ITEM_LIST } from ' constants/infomations/brandFeatureList';
import { commonContainerStyle } from 'styles/@shared/shared';
import FeatItem from './FeatItem';
import styled from 'styled-components';

function FeatList() {
  return (
    <StyledFeatList>
      {BRAND_FEATURE_ITEM_LIST.map(item => (
        <FeatItem
          key={item.id}
          src={item.src}
          alt={item.alt}
          title={item.title}
          description={item.description}
          detail={item.detail}
        />
      ))}
    </StyledFeatList>
  );
}

export default FeatList;

const StyledFeatList = styled.main`
  ${commonContainerStyle};

  & figure:nth-of-type(2) {
    text-align: right;
    @media all and (min-width: 1200px) {
      /* 두번째 기능은 사진과 텍스트 위치가 바뀌고 우측 정렬이어야 함 */
      flex-direction: row-reverse;
    }
  }
`;
