import styles from './ArticleManagement.module.scss';
import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';
import sortIcon from '@/public/images/market/sort-icon.png';
import dropDownIcon from '@/public/images/market/order-dropdown.png';
import { orderType } from '@/apis/getArticles';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';

const orderByObject = {
  recent: '최신순',
  like: '좋아요순',
};

interface ArticleManagementProps {
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onDropdownClick: () => void;
  onOrderByClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  isDropdownOpen: boolean;
  orderBy: orderType;
}

function ArticleManagement({
  onSearchSubmit,
  onDropdownClick: onIsOpenClick,
  onOrderByClick,
  isDropdownOpen,
  orderBy,
}: ArticleManagementProps) {
  const { innerWidth } = useWindowSize();

  //TODO: 드롭다운 모듈화
  return (
    <>
      <div className={styles.inputAndDropdown}>
        <form onSubmit={onSearchSubmit}>
          <input name={'search'} placeholder={'검색할 상품을 입력해주세요'} autoComplete={'off'} />
        </form>
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownTrigger} onClick={onIsOpenClick}>
            {innerWidth > DEVICE_MAX_WIDTH.mobile && <span>{orderByObject[orderBy]}</span>}
            <Image
              src={innerWidth > DEVICE_MAX_WIDTH.mobile ? dropDownIcon : sortIcon}
              alt={'드롭다운 열기 아이콘'}
              height={24}
              width={24}
            />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdown} onClick={onOrderByClick}>
              <button data-value={'recent'}>{orderByObject.recent}</button>
              <button data-value={'like'}>{orderByObject.like}</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ArticleManagement;
