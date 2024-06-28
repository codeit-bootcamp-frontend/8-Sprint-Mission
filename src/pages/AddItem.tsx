import Button from 'components/@shared/Button';
import Image from 'components/@shared/Image';
import styled, { css } from 'styled-components';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';
import { StyledTitleText } from 'styles/market/textStyle';
import plusIcon from 'assets/images/addItem/plus-icon.png';
import removeIcon from 'assets/images/addItem/remove-icon.png';
import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useAllFieldFilled from 'hooks/useAllFieldFilled';
import { IFormValue } from 'types/addItemFormValueTypes';
import { ADDITEM_FEIELDSET_LIST } from ' constants/infomations/addItemList';
import { ALLOW_FILE_EXTENSION } from ' constants/infomations/fileExtension';

export interface ITag {
  id: string;
  content: string;
}

interface IPreview {
  id: string;
  url: string;
}

function AddItem() {
  const [formValue, setFormValue] = useState<IFormValue>({
    imgfiles: [],
    title: '',
    description: '',
    price: '',
    tag: '',
  });
  const [tagList, setTagList] = useState<ITag[]>([]);

  const needToFilledFields = { title: formValue.title, description: formValue.description, price: formValue.price };
  const isSubmitActive = useAllFieldFilled(needToFilledFields) && tagList.length > 0;
  const [previewList, setPreviewList] = useState<IPreview[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLElement>) => {
    const { value, name, files } = event.target as HTMLInputElement;

    if (name === 'image') {
      if (files && files[0]) {
        // 상위 if와 합치지 않은 이유는 image input 과정에서 잘못된 값이 들어올 수도 있을 거라 생각함
        const file = files[0];
        setFormValue(prevState => ({ ...prevState, [name]: [...prevState.imgfiles, file] }));
        const imageUrl = URL.createObjectURL(file);
        setPreviewList(prevState => [...prevState, { id: uuidv4(), url: imageUrl }]);
      }
    } else {
      setFormValue(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // formValue 가공해서 서버로 전송하면 됨
    event.preventDefault();
  };

  const handleReturnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTage: ITag = { id: uuidv4(), content: formValue.tag };
      setTagList(prevState => [...prevState, newTage]);
      setFormValue(prevState => ({ ...prevState, ['tag']: '' }));
    }
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLElement>) => {
    const { category, id, url } = (event.target as HTMLElement).dataset;

    if (category === 'preview' && url) {
      setPreviewList(prevState => prevState.filter(preview => preview.id !== id));
      URL.revokeObjectURL(url); // 사용하지 않는 메모리 제거
    } else if (category === 'tag') {
      setTagList(prevState => prevState.filter(tag => tag.id !== id));
    }
  };

  return (
    <StyledAddItemForm onSubmit={handleSubmitForm}>
      <StyledAddItemHeader>
        <StyledAddItemTitle>상품 등록하기</StyledAddItemTitle>
        <Button type={'submit'} $category={'medium'} disabled={!isSubmitActive} height={'4.2rem'} width={'8.8rem'}>
          등록
        </Button>
      </StyledAddItemHeader>
      <StyledAddItemInputSection>
        <fieldset>
          <StyledAddItemSubTitle>상품 이미지</StyledAddItemSubTitle>
          <StyledItemRegistSection>
            <label htmlFor={'file-input-display-none'}>
              <Image src={plusIcon} alt={'이미지 추가하기 아이콘'} height={'4.8rem'} width={'4.8rem'} />
              <div>이미지 등록하기</div>
            </label>
            {/* input 자체는 display:none 처리, label에 연동하여 label을 디자인된 인풋 트리거를 만듦(웹 접근성 유지 가능) */}
            <input
              id={'file-input-display-none'}
              name={'image'}
              type={'file'}
              accept={ALLOW_FILE_EXTENSION}
              placeholder={'이미지 등록'}
              onChange={handleInputChange}
            />
            <StyledPreviewList onClick={handleRemoveClick}>
              {previewList.map(preview => (
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
              ))}
            </StyledPreviewList>
          </StyledItemRegistSection>
        </fieldset>
        {ADDITEM_FEIELDSET_LIST.map(fieldset => (
          <Fragment key={fieldset.name}>
            <fieldset>
              <StyledAddItemSubTitle htmlFor={fieldset.name}>{fieldset.subTitle}</StyledAddItemSubTitle>
              <input
                id={fieldset.name}
                name={fieldset.name}
                value={formValue[fieldset.name]}
                onChange={handleInputChange}
                placeholder={fieldset.placeholder}
                onKeyDown={fieldset.name === 'tag' ? handleReturnKeyDown : undefined}
              />
            </fieldset>
            {fieldset.name === 'tag' && (
              <StyledTagList onClick={handleRemoveClick}>
                {tagList.map(tag => (
                  <StyledTagItem key={tag.id}>
                    {tag.content}
                    <StyledRemoveButton className={'tag-remove-btn'} data-category={'tag'} data-id={tag.id} />
                  </StyledTagItem>
                ))}
              </StyledTagList>
            )}
          </Fragment>
        ))}
      </StyledAddItemInputSection>
    </StyledAddItemForm>
  );
}

export default AddItem;

const smallTextStyle = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const StyledAddItemForm = styled.form`
  margin: 2.4rem auto auto auto;
  max-width: var(--container-width);
`;

const StyledAddItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledAddItemInputSection = styled.section`
  & fieldset {
    margin-bottom: 2.4rem;

    & input,
    & textarea {
      ${inputStyle};
      ${smallTextStyle};
      &::placeholder {
        ${placeholderStyle};
      }
    }

    & textarea {
      height: 20rem;
      resize: none;
      border: none;
      padding-top: 1.6rem;
    }
  }
`;

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

const StyledAddItemTitle = styled.p`
  ${StyledTitleText};
  font-size: 2.8rem;
  line-height: 3.341rem;
  margin-bottom: 2.4rem;
`;

const StyledAddItemSubTitle = styled.label`
  ${StyledTitleText};
  /* margin-bottom 처리하기 위한 block 변환 */
  display: inline-block;
  font-size: 1.8rem;
  line-height: 2.148rem;
  margin-bottom: 1.2rem;
`;

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

const StyledPreviewList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

const StyledPreviewItem = styled.li`
  position: relative; // 버튼 위치 조정을 위한 속성
`;

const StyledRemoveButton = styled.button`
  width: 2rem;
  height: 2rem;

  background-image: url(${removeIcon});
  background-size: 0.8rem;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--cool-gray-400);

  color: var(--white);
  border-radius: 50%;

  &.preview-remove-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.3rem;
    background-color: var(--brand-blue);
  }
`;
