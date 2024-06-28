import styled from 'styled-components';
import { StyledRemoveButton } from 'styles/addItem/buttonStyles';
import { ITag } from 'types/addItemTagTypes';

interface TagItemProps {
  tag: ITag;
}

function TagItem({ tag }: TagItemProps) {
  return (
    <StyledTagItem key={tag.id}>
      {tag.content}
      <StyledRemoveButton className={'tag-remove-btn'} data-category={'tag'} data-id={tag.id} />
    </StyledTagItem>
  );
}

export default TagItem;

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
