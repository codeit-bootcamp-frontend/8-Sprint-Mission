import Button from 'components/@shared/Button';
import Image from 'components/@shared/Image';
import styled from 'styled-components';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';
import { StyledTitleText } from 'styles/market/textStyle';
import plusIcon from 'assets/images/addItem/plus-icon.png';
import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useAllFieldFilled from 'hooks/useAllFieldFilled';
import { IFormValue } from 'types/addItemFormValueTypes';
import { ADDITEM_FEIELDSET_LIST } from ' constants/infomations/addItemList';

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
  const [previews, setPreviews] = useState<IPreview[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLElement>) => {
    const { value, name, files } = event.target as HTMLInputElement;

    if (name === 'image') {
      if (files && files[0]) {
        // 상위 if와 합치지 않은 이유는 image input 과정에서 잘못된 값이 들어올 수도 있을 거라 생각함
        const file = files[0];
        setFormValue(prevState => ({ ...prevState, [name]: [...prevState.imgfiles, file] }));
        const imageUrl = URL.createObjectURL(file);
        setPreviews(prevState => [...prevState, { id: uuidv4(), url: imageUrl }]);
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
            <label htmlFor={'image-input-display-none'}>
              <Image src={plusIcon} alt={'이미지 추가하기 아이콘'} height={'4.8rem'} width={'4.8rem'} />
              <div>이미지 등록하기</div>
            </label>
            {/* input 자체는 display:none 처리, label에 연동하여 label을 디자인된 인풋 트리거를 만듦(웹 접근성 유지 가능) */}
            <input id={'image-input-display-none'} name={'image'} type={'file'} placeholder={'이미지 등록'} />
            {previews.map(preview => (
              <Image
                key={preview.id}
                src={preview.url}
                alt={'등록된 이미지'}
                height={'28.2rem'}
                width={'28.2rem'}
                radius={'1.2rem'}
              />
            ))}
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
              <StyledTagList>
                {tagList.map(tag => (
                  <StyledTagItem key={tag.id}>{tag.content}</StyledTagItem>
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

  & label {
    ${inputStyle};
    ${placeholderStyle};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0; // 크기가 줄어들지 않도록 지정
    gap: 1.2rem;

    height: 28.2rem;
    width: 28.2rem;

    cursor: pointer;
  }

  & #image-input-display-none {
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
`;

const StyledTagItem = styled.li`
  padding: 1.2rem;
  border-radius: 2.6rem;
  background-color: var(--cool-gray-50);
`;
