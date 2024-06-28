import React from 'react';
import styled from 'styled-components';
import { smallTextStyle } from 'styles/addItem/textStyles';
import { ITag } from 'types/addItemTagTypes';
import TagItem from './TagItem';

interface TagListProps {
  tagList: ITag[];
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function TagList({ tagList, handleRemoveClick }: TagListProps) {
  return (
    <StyledTagList onClick={handleRemoveClick}>
      {tagList.map(tag => (
        <TagItem key={tag.id} tag={tag} />
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
