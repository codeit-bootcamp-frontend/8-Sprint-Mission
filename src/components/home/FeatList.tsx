import { FEAT_ITEM_LIST } from ' constants/infomations/featItemList';
import FeatItem from './FeatItem';
import styled from 'styled-components';

function FeatList() {
  return (
    <StyledFeatList>
      {FEAT_ITEM_LIST.map(item => (
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
  max-width: 120rem;
  margin: 0 auto;

  & figure:nth-of-type(2) {
    text-align: right;
    @media all and (min-width: 1200px) {
      /* 두번째 기능은 사진과 텍스트 위치가 바뀌고 우측 정렬이어야 함 */
      flex-direction: row-reverse;
    }
  }
`;
