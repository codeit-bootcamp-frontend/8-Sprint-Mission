import Image from 'components/@shared/Image';
import styled from 'styled-components';
import { StyledRemoveButton } from 'styles/addItem/buttonStyles';
import { IPreview } from 'types/addItemPreviewTypes';

interface PreviewItemProps {
  preview: IPreview;
}

function PreviewItem({ preview }: PreviewItemProps) {
  return (
    <StyledPreviewItem key={preview.id}>
      <Image
        src={preview.url}
        alt={'등록한 상품 이미지 미리보기'}
        height={'28.2rem'}
        width={'28.2rem'}
        radius={'1.2rem'}
      />
      <StyledRemoveButton
        className={'preview-remove-btn'}
        data-category={'preview'}
        data-id={preview.id}
        data-url={preview.url}
      />
    </StyledPreviewItem>
  );
}

export default PreviewItem;

const StyledPreviewItem = styled.li`
  position: relative; // 버튼 위치 조정을 위한 속성
`;
