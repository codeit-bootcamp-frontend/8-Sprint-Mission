import React from 'react';
import styled from 'styled-components';
import Button from 'components/@shared/Button';
import searchIcon from 'assets/images/market/search-icon.png';
import sortIcon from 'assets/images/market/sort-icon.png';
import dropDownIcon from 'assets/images/market/order-dropdown.png';
import { PATH_ADD_ITEM } from ' constants/paths/paths';
import Image from 'components/@shared/Image';
import useNavigateTo from 'hooks/useNavigateTo';
import useWindowSize from 'hooks/useWindowSize';
import { MOBILE_MAX_WIDTH } from ' constants/infomations/size';
import { ProductOrderByType } from 'types/@shared/marketTypes';

const orderByObject = {
  recent: '최신순',
  favorite: '좋아요순',
};

interface ProductManagementProps {
  isOpenDropdown: boolean;
  orderBy: ProductOrderByType;
  handleOrderByClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleIsOpenClick: () => void;
}

function ProductManagement({
  isOpenDropdown,
  orderBy,
  handleOrderByClick,
  handleSearchSubmit,
  handleIsOpenClick,
}: ProductManagementProps) {
  const { navigateTo } = useNavigateTo();
  const { innerWidth } = useWindowSize();

  return (
    <StyledProductManagementSection>
      <StyledSearchInputForm onSubmit={handleSearchSubmit}>
        <Image src={searchIcon} alt={'검색 아이콘'} height={'2.4rem'} width={'2.4rem'} />
        <input name={'search'} placeholder={'검색할 상품을 입력해주세요'} />
      </StyledSearchInputForm>

      <Button
        className={'product-regist-btn'}
        height={'4.2rem'}
        width={'13.3rem'}
        onClick={() => navigateTo(PATH_ADD_ITEM)}>
        상품 등록하기
      </Button>

      <StyledDropdownWrapper>
        <StyledDropdownTrigger>
          {innerWidth > MOBILE_MAX_WIDTH && <span>{orderByObject[orderBy]}</span>}
          <button onClick={handleIsOpenClick}>
            <Image
              src={innerWidth > MOBILE_MAX_WIDTH ? dropDownIcon : sortIcon}
              alt={'드롭다운 열기 아이콘'}
              height={'2.4rem'}
              width={'2.4rem'}
            />
          </button>
        </StyledDropdownTrigger>
        {isOpenDropdown && (
          <StyledDropdown onClick={handleOrderByClick}>
            <button data-value={'recent'}>최신순</button>
            <button data-value={'favorite'}>좋아요순</button>
          </StyledDropdown>
        )}
      </StyledDropdownWrapper>
    </StyledProductManagementSection>
  );
}

export default ProductManagement;

const StyledProductManagementSection = styled.section`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  @media (max-width: 768px) {
    height: 9.2rem;
    width: 100%;
    position: relative;
    align-items: flex-end;
    gap: 0.8rem;

    & .product-regist-btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const StyledSearchInputForm = styled.form`
  display: flex;
  align-items: center;

  width: 32.5rem;
  height: 4.2rem;
  left: 588px;
  padding: 0.9rem 2rem 0.9rem 1.6rem;
  border-radius: 1.2rem;
  background-color: var(--cool-gray-100);

  & input {
    width: 100%;
    background-color: var(--cool-gray-100);
    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
    }
  }

  @media (max-width: 1280px) {
    width: 24.2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledDropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  position: relative;
  height: 4.2rem;
  width: 13rem;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  border-radius: 1.2rem;

  color: var(--cool-gray-800);
  background-color: var(--white);
  border: 1px solid var(--cool-gray-200);

  @media (max-width: 1280px) {
    width: 12rem;
  }
  @media (max-width: 768px) {
    width: 4.2rem;
    border-radius: 1.2rem;
  }
`;

const StyledDropdownTrigger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    width: 6.6rem;
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 13rem;
  height: 8.4rem;
  top: 4.6rem;
  right: 0;
  border-radius: 1.2rem;

  background-color: var(--white);
  border: 1px solid var(--cool-gray-200);

  & button {
    width: 100%;
    height: 100%;

    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;

    &:not(:last-child) {
      border-bottom: 1px solid var(--cool-gray-200);
    }
  }
`;
