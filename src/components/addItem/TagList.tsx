import React from 'react';
import styled from 'styled-components';
import { smallTextStyle } from 'styles/addItem/textStyles';
import { ITag } from 'types/addItemTagTypes';
import { StyledRemoveButton } from 'styles/addItem/buttonStyles';

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
  width: var(--container-width);

  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;

  ${smallTextStyle};
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
