import styles from './ArticleManagement.module.scss';
import OrderByDropdown from '../@shared/OrderByDropdown';
interface ArticleManagementProps {
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onOrderByClick: (orderBy: string) => void;
}

function ArticleManagement({ onSearchSubmit, onOrderByClick }: ArticleManagementProps) {
  return (
    <>
      <div className={styles.inputAndDropdown}>
        <form onSubmit={onSearchSubmit}>
          <input name={'search'} placeholder={'검색할 상품을 입력해주세요'} autoComplete={'off'} />
        </form>
        <OrderByDropdown onMenuClick={onOrderByClick} />
      </div>
    </>
  );
}

export default ArticleManagement;
