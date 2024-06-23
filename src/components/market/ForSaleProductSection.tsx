import React, { Suspense, useState } from 'react';
import ForSaleProductList from './ForSaleProductList';
import { StyledProductCategoryText } from 'styles/market/textStyle';
import styled from 'styled-components';
import Button from 'components/@shared/Button';
import searchIcon from 'assets/images/market/search-icon.png';
import dropDownIcon from 'assets/images/market/order-dropdown.png';
import Image from 'components/@shared/Image';

function ForSaleProductsSection() {
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState('recent');
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);

  const handleOrderByClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { value } = (event.target as HTMLDivElement).dataset;
    if (value) {
      setOrderBy(value);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = (event.target as HTMLFormElement)['search'];
    setSearchValue(value);
  };

  const handleDropdownOpenrClick = () => {
    setIsOpenDropDown(prevState => !prevState);
  };

  return (
    <StyledForSaleProductsSection>
      <StyledForSaleProductSubHeader>
        <StyledProductCategoryText>판매 중인 상품</StyledProductCategoryText>

        <StyledProductManagementSection>
          <StyledSearchInputForm onSubmit={handleSearchSubmit}>
            <i>
              <Image src={searchIcon} alt={'검색 아이콘'} height={'2.4rem'} width={'2.4rem'} />
            </i>
            <input name={'search'} placeholder={'검색할 상품을 입력해주세요'} />
          </StyledSearchInputForm>

          <Button height={'4.2rem'} width={'13.3rem'}>
            상품 등록하기
          </Button>

          <StyledDropdownWrapper>
            <StyledDropdownTrigger>
              최신순
              <button onClick={handleDropdownOpenrClick}>
                <Image src={dropDownIcon} alt={'드롭다운 열기 아이콘'} height={'2.4rem'} width={'2.4rem'} />
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
      </StyledForSaleProductSubHeader>

      <Suspense fallback={<div>Loding...</div>}>
        <ForSaleProductList keyword={searchValue} order={orderBy} />
      </Suspense>
    </StyledForSaleProductsSection>
  );
}

export default ForSaleProductsSection;

const StyledForSaleProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledForSaleProductSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledProductManagementSection = styled.section`
  display: flex;
  gap: 1.2rem;
  align-items: center;
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
`;

const StyledDropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

const StyledDropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const StyledDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 13rem;
  height: 8.4rem;
  top: 4.6rem;
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
