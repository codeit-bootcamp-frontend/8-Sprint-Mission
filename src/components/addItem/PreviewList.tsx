import styled from 'styled-components';

import React from 'react';
import { StyledRemoveButton } from 'styles/addProduct/buttonStyles';
import Image from 'components/@shared/Image';
import { IImagePreview } from 'types/@shared/addProductTypes';

interface PreviewListProps {
  previewList: IImagePreview[];
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function PreviewList({ previewList, handleRemoveClick }: PreviewListProps) {
  return (
    <StyledPreviewList onClick={handleRemoveClick}>
      {previewList.map(preview => (
        <StyledPreviewItem key={preview.id}>
          <Image
            src={preview.imgUrl}
            alt={'등록한 상품 이미지 미리보기'}
            height={'100%'}
            width={'auto'}
            radius={'1.2rem'}
            aspectRatio={'1'}
          />
          <StyledRemoveButton
            className={'preview-remove-btn'}
            data-category={'preview'}
            data-id={preview.id}
            data-url={preview.imgUrl}
          />
        </StyledPreviewItem>
      ))}
    </StyledPreviewList>
  );
}

export default PreviewList;

const StyledPreviewList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

const StyledPreviewItem = styled.li`
  position: relative; // 버튼 위치 조정을 위한 속성
`;
