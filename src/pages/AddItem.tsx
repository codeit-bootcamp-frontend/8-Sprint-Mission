import Button from 'components/@shared/Button';
import Image from 'components/@shared/Image';
import styled from 'styled-components';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';
import { StyledTitleText } from 'styles/market/textStyle';
import plusIcon from 'assets/images/addItem/plus-icon.png';

function AddItem() {
  return (
    <StyledAddItemForm>
      <StyledAddItemHeader>
        <StyledAddItemTitle>상품 등록하기</StyledAddItemTitle>
        <Button type={'submit'} $category={'medium'} disabled={true} height={'4.2rem'} width={'8.8rem'}>
          등록
        </Button>
      </StyledAddItemHeader>
      <StyledAddItemInputSection>
        <fieldset>
          <StyledAddItemSubTitle>상품 이미지</StyledAddItemSubTitle>
          <StyledItemRegistSection>
            <label htmlFor={'input-image-regist'}>
              <Image src={plusIcon} alt={'이미지 추가하기 아이콘'} height={'4.8rem'} width={'4.8rem'} />
              <div>이미지 등록하기</div>
            </label>
            {/* input 자체는 display:none 처리, label에 연동하여 label을 디자인된 인풋 트리거를 만듦(웹 접근성 유지 가능) */}
            <input id={'input-image-regist'} name={'image'} type={'file'} placeholder={'이미지 등록'} />
          </StyledItemRegistSection>
        </fieldset>
        <fieldset>
          <StyledAddItemSubTitle>상품명</StyledAddItemSubTitle>
          <input name={'title'} placeholder={'상품명을 입력해주세요'} />
        </fieldset>
        <fieldset>
          <StyledAddItemSubTitle>상품 소개</StyledAddItemSubTitle>
          <textarea name={'introduction'} placeholder={'상품 소개를 입력해주세요'} />
        </fieldset>
        <fieldset>
          <StyledAddItemSubTitle>판매 가격</StyledAddItemSubTitle>
          <input name={'price'} placeholder={'판매 가격을 입력해주세요'} />
        </fieldset>
        <fieldset>
          <StyledAddItemSubTitle>태그</StyledAddItemSubTitle>
          <input name={'tag'} placeholder={'태그를 입력해주세요'} />
        </fieldset>
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
  }

  #input-image-regist {
    /* input 자체는 숨기고, label에 연동하여 디자인된 인풋 트리거를 만듦 */
    display: none;
  }
`;

const StyledAddItemTitle = styled.legend`
  ${StyledTitleText};
  font-size: 2.8rem;
  line-height: 3.341rem;
  margin-bottom: 2.4rem;
`;

const StyledAddItemSubTitle = styled.legend`
  ${StyledTitleText};
  font-size: 1.8rem;
  line-height: 2.148rem;
  margin-bottom: 1.2rem;
`;
