import { useState } from 'react';

import { BoardSearch } from '@/widget/boardSearch';
import { BoardCardList } from '@/widget/boardCardList';
import { BoardItemList } from '@/widget/boardItemList';
import { SectionTitle } from '@/shared/ui/title';
import { LinkSmall } from '@/shared/ui/buttons';
import { Dropdown } from '@/shared/ui/dropdown';
import { BOARD_DROPDOWN_CONTENTS } from '@/shared/config';

import * as S from './Boards.style';

const mock = {
  list: [
    {
      id: 71,
      title: '칠월이 팔아요',
      content: '마넌',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/14/1722856440876/20231112_054723.jpg',
      likeCount: 1,
      createdAt: '2024-08-05T11:14:06.964Z',
      updatedAt: '2024-08-08T14:21:31.756Z',
      writer: {
        id: 14,
        nickname: '응애',
      },
    },
    {
      id: 70,
      title: '최고의 커피 원두 추천',
      content: '향과 맛이 뛰어난 최고의 커피 원두를 추천합니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png',
      likeCount: 11,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 69,
      title: '건강한 샐러드 레시피',
      content: '집에서 쉽게 만들 수 있는 건강한 샐러드 레시피입니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png',
      likeCount: 12,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 68,
      title: '겨울철 히터 추천',
      content: '올 겨울을 따뜻하게 보낼 수 있는 히터 추천 리뷰입니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png',
      likeCount: 5,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 67,
      title: '여행용 캐리어 추천',
      content: '여행할 때 꼭 필요한 튼튼한 캐리어 추천입니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png',
      likeCount: 8,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 66,
      title: '홈트레이닝 기구 리뷰',
      content: '집에서 운동할 때 유용한 홈트레이닝 기구 리뷰입니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png',
      likeCount: 1,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-08-08T14:21:46.753Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 65,
      title: '새로운 스마트폰 출시 소식',
      content: '이번에 출시된 새로운 스마트폰에 대한 소식입니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png',
      likeCount: 10,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 64,
      title: '중고 노트북 거래 후기',
      content: '중고 노트북 거래 후기를 남깁니다. 아주 만족스러웠어요.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png',
      likeCount: 5,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 63,
      title: '퀸사이즈 침대 프레임 조립 후기',
      content: '퀸사이즈 침대 프레임을 직접 조립해본 후기입니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png',
      likeCount: 6,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
    {
      id: 62,
      title: '편안한 스니커즈 추천',
      content: '요즘 착용해본 편안한 스니커즈를 추천합니다.',
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png',
      likeCount: 7,
      createdAt: '2024-07-29T05:45:03.250Z',
      updatedAt: '2024-07-29T05:45:03.250Z',
      writer: {
        id: 1,
        nickname: 'Noah.Gerhold',
      },
    },
  ],
  totalCount: 71,
};

export const Boards = () => {
  const [dropdownValue, setDropdownValue] = useState<string>('최신순');
  const handleDropdownListClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLElement;
    setDropdownValue(target.dataset['name'] === 'like' ? 'like' : 'time');
  };
  return (
    <S.Wrapper>
      <S.Section>
        <SectionTitle>베스트 게시글</SectionTitle>
        <BoardCardList boardList={mock.list.slice(0, 3)} />
      </S.Section>
      <S.Section>
        <S.AllBoardsHeader>
          <SectionTitle>게시글</SectionTitle>
          <LinkSmall $size="40" $style="default">
            글쓰기
          </LinkSmall>
        </S.AllBoardsHeader>
        <S.SearchSection>
          <BoardSearch />
          <Dropdown
            contentList={BOARD_DROPDOWN_CONTENTS}
            onContentClick={handleDropdownListClick}
          >
            {dropdownValue}
          </Dropdown>
        </S.SearchSection>
        <BoardItemList boardItemList={mock.list} />
      </S.Section>
    </S.Wrapper>
  );
};
