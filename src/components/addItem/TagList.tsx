import React from 'react';
import styled from 'styled-components';
import { smallTextStyle } from 'styles/addProduct/textStyles';

import { StyledRemoveButton } from 'styles/addProduct/buttonStyles';
import { ITag } from 'types/@shared/addProductTypes';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from ' constants/information/mediaQuerySize';

interface TagListProps {
  tagList: ITag[];
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function TagList({ tagList, handleRemoveClick }: TagListProps) {
  return (
    <StyledTagList onClick={handleRemoveClick}>
      {tagList.map(tag => (
        <StyledTagItem key={tag.id}>
          {tag.content}
          <StyledRemoveButton className={'tag-remove-btn'} data-category={'tag'} data-id={tag.id} />
        </StyledTagItem>
      ))}
    </StyledTagList>
  );
}

export default TagList;

const StyledTagList = styled.ul`
  overflow-x: auto; // 태그가 많아지면 좌우 스크롤이 되도록 지정

  display: flex;
  flex-grow: 0;
  gap: 1rem;
  margin-top: 1.2rem;
  max-width: var(--container-width);

  ${smallTextStyle};

  @media (max-width: ${TABLET_MAX_WIDTH}px) {
    max-width: calc(100vw - 5.2rem);
  }
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    max-width: calc(100vw - 3.2rem);
  }
`;

const StyledTagItem = styled.li`
  position: relative; // 버튼 위치 조정
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  height: 4.8rem;
  padding: 0 1.2rem;
  border-radius: 2.6rem;
  background-color: var(--cool-gray-50);
`;
