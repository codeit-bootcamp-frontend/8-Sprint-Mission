import styled from 'styled-components';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';
import plusIcon from 'assets/images/addProduct/plus-icon.png';
import { ALLOW_FILE_EXTENSION } from ' constants/information/fileExtension';
import { StyledAddItemSubTitle } from 'styles/addProduct/textStyles';
import React from 'react';
import Image from 'components/@shared/Image';
import PreviewList from './PreviewList';
import { IImagePreview } from 'types/@shared/addProductTypes';
import { MEDIA_QUERY_SIZE } from ' constants/information/mediaQuerySize';

interface ImageRegistrationProps {
  previewList: IImagePreview[];
  handleInputChange: (event: React.ChangeEvent<HTMLElement>) => void;
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function ImageRegistration({ previewList, handleInputChange, handleRemoveClick }: ImageRegistrationProps) {
  return (
    <fieldset>
      <StyledAddItemSubTitle>상품 이미지</StyledAddItemSubTitle>
      <StyledItemRegistrationSection>
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
      </StyledItemRegistrationSection>
    </fieldset>
  );
}

export default ImageRegistration;

const StyledItemRegistrationSection = styled.section`
  display: flex;
  gap: 2.4rem;
  overflow-x: auto; // 사진이 많아지면 좌우 스크롤이 되도록 지정
  width: var(--container-width);
  height: 28.2rem;

  @media ${MEDIA_QUERY_SIZE.underTablet} {
    height: 16.2rem;
    max-width: calc(100vw - 5.2rem);
    overflow-y: hidden;
    overflow-x: auto;
  }
  @media ${MEDIA_QUERY_SIZE.mobile} {
    max-width: calc(100vw - 3.2rem);
  }

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

    @media ${MEDIA_QUERY_SIZE.underTablet} {
      width: 16.2rem;
    }
  }

  & #file-input-display-none {
    /* input 자체는 숨기고, label에 연동하여 디자인된 인풋 트리거를 만듦 */
    display: none;
  }
`;
