import styled from 'styled-components';
import { IPreview } from 'types/addItemPreviewTypes';
import React from 'react';
import PreviewItem from './PreviewItem';

interface PreviewListProps {
  previewList: IPreview[];
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function PreviewList({ previewList, handleRemoveClick }: PreviewListProps) {
  return (
    <StyledPreviewList onClick={handleRemoveClick}>
      {previewList.map(preview => (
        <PreviewItem key={preview.id} preview={preview} />
      ))}
    </StyledPreviewList>
  );
}

export default PreviewList;

const StyledPreviewList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;
