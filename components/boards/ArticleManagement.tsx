import Button from '../@shared/Button';
import styles from './ArticleSection.module.scss';
import Link from 'next/link';
import CustomImage from '../@shared/CustomImage';
import { DEVICE_MAX_WIDTH } from '@/constants/mediaQuerySize';
import sortIcon from '@/public/images/market/sort-icon.png';
import dropDownIcon from '@/public/images/market/order-dropdown.png';
import { orderType } from '@/apis/getArticles';
import useWindowSize from '@/hooks/useWindowSize';

const orderByObject = {
  recent: '최신순',
  like: '좋아요순',
};

interface ArticleManagementProps {
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onIsOpenClick: () => void;
  onOrderByClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  isDropdownOpen: boolean;
  orderBy: orderType;
}

function ArticleManagement({
  onSearchSubmit,
  onIsOpenClick,
  onOrderByClick,
  isDropdownOpen,
  orderBy,
}: ArticleManagementProps) {
  const { innerWidth } = useWindowSize();

  return (
    <section>
      <div className={styles.titleAndButton}>
        <h2>게시글</h2>
        <Link href='/'>
          <Button category={'large'}>글쓰기</Button>
        </Link>
      </div>
      <div className={styles.inputAndDropdown}>
        <form onSubmit={onSearchSubmit}>
          <input
            name={'search'}
            placeholder={'검색할 상품을 입력해주세요'}
            autoComplete={'off'}
          />
        </form>
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownTrigger} onClick={onIsOpenClick}>
            {innerWidth > DEVICE_MAX_WIDTH.mobile && (
              <span>{orderByObject[orderBy]}</span>
            )}
            <CustomImage
              src={
                innerWidth > DEVICE_MAX_WIDTH.mobile ? dropDownIcon : sortIcon
              }
              alt={'드롭다운 열기 아이콘'}
              height={24}
              width={24}
            />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdown} onClick={onOrderByClick}>
              <button data-value={'recent'}>최신순</button>
              <button data-value={'like'}>좋아요순</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ArticleManagement;
