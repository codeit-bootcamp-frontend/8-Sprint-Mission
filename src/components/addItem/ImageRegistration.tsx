import styled from 'styled-components';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';
import plusIcon from 'assets/images/addItem/plus-icon.png';
import { ALLOW_FILE_EXTENSION } from ' constants/infomations/fileExtension';
import { StyledAddItemSubTitle } from 'styles/addItem/textStyles';
import { IPreview } from 'types/addItemPreviewTypes';
import React from 'react';
import Image from 'components/@shared/Image';
import PreviewList from './PreviewList';

interface ImageRegistrationProps {
  previewList: IPreview[];
  handleInputChange: (event: React.ChangeEvent<HTMLElement>) => void;
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function ImageRegistration({ previewList, handleInputChange, handleRemoveClick }: ImageRegistrationProps) {
  return (
    <fieldset>
      <StyledAddItemSubTitle>상품 이미지</StyledAddItemSubTitle>
      <StyledItemRegistSection>
        <label htmlFor={'file-input-display-none'}>
          <Image src={plusIcon} alt={'이미지 추가하기 아이콘'} height={'4.8rem'} width={'4.8rem'} />
          <div>이미지 등록하기</div>
        </label>
        {/* input 자체는 display:none 처리, label에 input을 연결하여 label을 디자인된 인풋 트리거로 만듦
        (웹 접근성 유지 및 불필요한 ref나 클릭 이벤트 제거) */}
        <input
          id={'file-input-display-none'}
          name={'image'}
          type={'file'}
          accept={ALLOW_FILE_EXTENSION}
          placeholder={'이미지 등록'}
          onChange={handleInputChange}
        />
        <PreviewList previewList={previewList} handleRemoveClick={handleRemoveClick} />
      </StyledItemRegistSection>
    </fieldset>
  );
}

export default ImageRegistration;

const StyledItemRegistSection = styled.section`
  display: flex;
  gap: 2.4rem;
  overflow-x: auto; // 사진이 많아지면 좌우 스크롤이 되도록 지정
  width: var(--container-width);
  height: 28.2rem;

  & label {
    ${inputStyle};
    ${placeholderStyle};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0; // 크기가 줄어들지 않도록 지정
    gap: 1.2rem;
    height: 100%;
    width: 28.2rem;

    cursor: pointer;
  }

  & #file-input-display-none {
    /* input 자체는 숨기고, label에 연동하여 디자인된 인풋 트리거를 만듦 */
    display: none;
  }
`;
